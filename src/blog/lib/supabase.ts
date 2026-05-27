import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

// Requires VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env
// Use the anon/public key — never the service_role key on the client.
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("[supabase] Missing env vars: VITE_SUPABASE_URL and/or VITE_SUPABASE_ANON_KEY");
}

export const supabase = createClient(
  supabaseUrl ?? "https://placeholder.supabase.co",
  supabaseAnonKey ?? "placeholder"
);
