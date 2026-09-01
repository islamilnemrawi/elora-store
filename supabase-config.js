// Elora Store - Supabase Configuration

const SUPABASE_URL = "https://qhqyptilvbecutfxwxsu.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_BU6NEoRTS2j5QfjTUzfwGA_0nycodU_";

const { createClient } = supabase;

const eloraSupabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
