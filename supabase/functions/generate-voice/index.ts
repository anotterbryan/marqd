import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });

  try {
    const { text, voice_id } = await req.json();
    if (!text || !voice_id) {
      return new Response('Missing text or voice_id', { status: 400, headers: CORS });
    }

    const apiKey = Deno.env.get('ELEVENLABS_API_KEY');
    if (!apiKey) {
      return new Response('API key not configured', { status: 500, headers: CORS });
    }

    const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice_id}`, {
      method: 'POST',
      headers: {
        'xi-api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text,
        model_id: 'eleven_monolingual_v1',
        voice_settings: { stability: 0.5, similarity_boost: 0.75 },
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      return new Response(`ElevenLabs error: ${err}`, { status: res.status, headers: CORS });
    }

    const audio = await res.arrayBuffer();
    return new Response(audio, {
      headers: { ...CORS, 'Content-Type': 'audio/mpeg' },
    });
  } catch (e) {
    return new Response(String(e), { status: 500, headers: CORS });
  }
});
