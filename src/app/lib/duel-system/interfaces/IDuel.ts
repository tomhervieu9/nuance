import { DuelStatus } from "../types/DuelStatus";
import { IDuelParams } from "./IDuelParams";
import { IDuelTimestamps } from "./IDuelTimestamps";
import { IPlayer } from "./IPlayerInfo";

/**
 * Interface for a Duel.
 */
export interface IDuel {
  /**
   * The unique ID of the duel.
   */
  readonly id: string;

  /**
   * The challenger.
   */
  readonly challenger: IPlayer;

  /**
   * The challengee.
   */
  readonly challengee: IPlayer;

  /**
   * The duel parameters.
   */
  readonly duelParams: IDuelParams;

  /**
   * The status of the duel.
   */
  readonly status: DuelStatus;

  /**
   * The timestamps of the duel.
   */
  readonly timestamps: IDuelTimestamps;

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
