export interface IChallengeParams {
  /**
   * The question posed by the challenger, which will become the topic of the duel.
   */
  question: string;

  /**
   * The minimum amount (in USD) that both challenger and challengee must stake for the duel to start.
   */
  minStakeAmount: number;

  /**
   * The time (in seconds) that the challengee has to accept the challenge.
   */
  timeToAccept: number;
}
