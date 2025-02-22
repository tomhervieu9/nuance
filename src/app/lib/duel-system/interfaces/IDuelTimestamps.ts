/**
 * Interface for the metadata of a duel.
 */
export interface IDuelTimestamps {
  /**
   * The time at which the challenge was requested by the challenger.
   */
  challengeTime: Date;

  /**
   * The time at which the challenge was accepted by the challengee.
   */
  startTime: Date | undefined;

  /**
   * The time at which the duel finished naturally, with a winner being declared.
   */
  completedTime: Date | undefined;

  /**
   * The time at which the duel was rejected by the challengee.
   */
  rejectedTime: Date | undefined;

  /**
   * The time at which the duel was cancelled automatically by the protocol.
   */
  cancelledTime: Date | undefined;
}
