import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });

  try {
    const { text, voice_id } = await req.json();
    if (!text || !voice_id) return new Response('Missing text or voice_id', { status: 400, headers: CORS });

    const apiKey = Deno.env.get('GOOGLE_TTS_API_KEY');
    if (!apiKey) return new Response('API key not configured', { status: 500, headers: CORS });

    const res = await fetch(
      `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          input: { text },
          voice: { languageCode: 'en-US', name: voice_id },
          audioConfig: { audioEncoding: 'MP3' },
        }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      return new Response(`Google TTS error: ${err}`, { status: res.status, headers: CORS });
    }

    const { audioContent } = await res.json();
    // audioContent is base64-encoded MP3 — decode to binary
    const binary = Uint8Array.from(atob(audioContent), (c) => c.charCodeAt(0));
    return new Response(binary, { headers: { ...CORS, 'Content-Type': 'audio/mpeg' } });
  } catch (e) {
    return new Response(String(e), { status: 500, headers: CORS });
  }
});
