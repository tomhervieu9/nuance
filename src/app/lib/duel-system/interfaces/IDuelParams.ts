export interface IDuelParams {
  /**
   * The question posed by the challenger, which will become the topic of the duel.
   */
  question: string;

  /**
   * The amount (in USD) that both challenger and challengee must stake for the duel to start.
   */
  stake: number;

  /**
   * The time (in seconds) that the challengee has to accept the challenge.
   */
  timeToAccept: number;
}
