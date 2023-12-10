import { supabase } from "$lib/supabaseClient";
  export async function load({ params }) {
    let response = await supabase
    .from('route')
    .select("*")
    .eq('slug', params.slug)
    return {
      title: response.data[0].slug,
      content: response.data[0].description,
      grade: response.data[0].grade,
      holds: response.data[0].new_route,
    };
  }
