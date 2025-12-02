
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://myowvmiginahtlgcxctc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15b3d2bWlnaW5haHRsZ2N4Y3RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2NzE4MTQsImV4cCI6MjA4MDI0NzgxNH0.vhn3k1rUPFGyAtrpKBKMJcY4KrU0YUTh0vaUG9fWi_4';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and anon key are required.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
