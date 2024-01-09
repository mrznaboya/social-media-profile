export type Message = {
  id: string;
  thread: string;
  sender: string;
  text: string;

  /**
   * Metadata
   */
  sentDate: number;
  setDateString: string;
  hasBeenRead: boolean;
};
