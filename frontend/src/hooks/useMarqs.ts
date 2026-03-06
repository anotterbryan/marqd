// Returns seed data now. In Phase 1, fetches from Supabase.
import { seedMarqs } from '../data/seedMarqs';
import type { MarqLocation } from '../types';

export const useMarqs = (): { marqs: MarqLocation[]; loading: boolean } => {
  return { marqs: seedMarqs, loading: false };
};
