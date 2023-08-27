import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rllhfsbktjhrvazaitly.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsbGhmc2JrdGpocnZhemFpdGx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMwNzk1NTIsImV4cCI6MjAwODY1NTU1Mn0._kpUPZG5txqsvym7OpOX6Zq4ejhZ-Orjq1YNwp2jP0s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
