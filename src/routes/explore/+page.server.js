import { supabase } from "$lib/supabaseClient";

// select table in the from function by calling tables name
export async function load() {
  const { data } = await supabase.from("route").select();
  // return the table and data
  return {
    route: data ?? [],
  };
}