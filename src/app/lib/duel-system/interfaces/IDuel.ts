import { DuelStatus } from "../types/DuelStatus";

/**
 * Interface for a Duel.
 */
export interface IDuel {
  /**
   * Starts the debate.
   */
  startDuel(): void;

  /**
   * Ends the debate.
   * @param newStatus - The new status of the debate.
   */
  endDuel(newStatus: DuelStatus): void;
}
