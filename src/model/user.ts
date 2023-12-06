export type User = {
  id: string;
  name: string;
  email: string;
  username: string;
  bio: string;

  /**
   * Metadata
   */
  created_at: number;
  created_at_string: string;
};
