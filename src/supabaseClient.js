import { createClient } from '@supabase/supabase-js';

// Retrieve environment variables
const rawUrl = import.meta.env.VITE_SUPABASE_URL || '';
// Strip '/rest/v1/' or '/rest/v1' from the end of the URL if present,
// since @supabase/supabase-js automatically appends it for API requests.
const supabaseUrl = rawUrl.replace(/\/rest\/v1\/?$/, '');
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl) {
  console.warn('Supabase URL is missing from environment variables.');
}
if (!supabaseAnonKey) {
  console.warn('Supabase Anon Key is missing from environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
