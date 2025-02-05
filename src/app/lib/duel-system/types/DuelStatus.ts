export enum DuelStatus {
  /**
   * The duel is pending, meaning that the challengee has not yet accepted the challenge.
   */
  PENDING = "PENDING",

  /**
   * The duel is active, meaning that the challengee has accepted the challenge and the duel is ongoing.
   */
  ACTIVE = "ACTIVE",

  /**
   * The duel has been completed, meaning that the duel has finished naturally and a winner has been declared.
   */
  COMPLETED = "COMPLETED",

  /**
   * The duel has been rejected, meaning that the challengee has rejected the challenge.
   */
  REJECTED = "REJECTED",

  /**
   * The duel has been cancelled, meaning that the duel was cancelled automatically by the protocol.
   */
  CANCELLED = "CANCELLED",
}
