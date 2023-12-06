import { supabase } from "./supabase";

export const createProfileWithId = async (
  path: string,
  profileId: string,
  data: object
) => {
  try {
    const { error } = await supabase
      .from("profiles")
      .upsert({ ...data, id: profileId });

    if (error) {
      return { error };
    } else {
      return { error: undefined };
    }
  } catch (error) {
    return { error };
  }
};
