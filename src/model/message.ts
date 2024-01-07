export type Message = {
  id: string;
  thread: string;
  sender: string;
  test: string;

  /**
   * Metadata
   */
  sentDate: number;
  setDateString: string;
  hasBeenRead: boolean;
};
