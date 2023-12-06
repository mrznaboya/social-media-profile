import { supabase } from "./supabase";

export const createProfileWithId = async (
  path: string,
  profileId: string,
  data: object
) => {
  try {
    const { error } = await supabase
      .from(path)
      .upsert({ ...data, id: profileId })
      .select();

    if (error) {
      return { error };
    } else {
      return { error: undefined };
    }
  } catch (error) {
    return { error };
  }
};
