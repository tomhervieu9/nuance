import { IDuelParams } from "./interfaces/IDuelParams";
import { IDuel } from "./interfaces/IDuel";
import { IDuelTimestamps } from "./interfaces/IDuelTimestamps";
import { DuelStatus } from "./types/DuelStatus";
import { IPlayer } from "./interfaces/IPlayer";
import assert from "@nuance/utils/assertions";

/**
 * A duel between two players.
 */
export default class Duel implements IDuel {
  private _id: string;
  private _duelParams: IDuelParams;
  private _challenger: IPlayer;
  private _challengee: IPlayer;
  private _status: DuelStatus;
  private _timestamps: IDuelTimestamps;

  /**
   * Constructor.
   *
   * @param id The unique ID of the duel.
   * @param duelParams The duel creation parameters.
   * @param challenger The player offering the challenge to this duel.
   * @param challengee The player receiving the challenge to this duel.
   * @param creationTime The time the duel challenge was created by the challenger.
   */
  constructor(
    id: string,
    duelParams: IDuelParams,
    challenger: IPlayer,
    challengee: IPlayer,
    creationTime: Date
  ) {
    this._id = id;
    this._duelParams = duelParams;
    this._challenger = challenger;
    this._challengee = challengee;
    this._status = DuelStatus.PENDING;
    this._timestamps = {
      challengeTime: creationTime,
      startTime: undefined,
      completedTime: undefined,
      rejectedTime: undefined,
      cancelledTime: undefined,
    };
  }

  /**
   * @inheritdoc
   */
  public get id(): string {
    return this._id;
  }

  /**
   * @inheritdoc
   */
  public get duelParams(): IDuelParams {
    return this._duelParams;
  }

  /**
   * @inheritdoc
   */
  public get challenger(): IPlayer {
    return this._challenger;
  }

  /**
   * @inheritdoc
   */
  public get challengee(): IPlayer {
    return this._challengee;
  }

  /**
   * @inheritdoc
   */
  public get status(): DuelStatus {
    return this._status;
  }

  /**
   * @inheritdoc
   */
  public get timestamps(): IDuelTimestamps {
    return this._timestamps;
  }

  /**
   * @inheritdoc
   */
  startDuel(): void {
    console.log(`Duel Status: ${this._status}.`);
  }

  /**
   * @inheritdoc
   */
  endDuel(newStatus: DuelStatus): void {
    // Ensure the new status is valid for ending the duel.
    assert(
      [
        DuelStatus.COMPLETED,
        DuelStatus.CANCELLED,
        DuelStatus.REJECTED,
      ].includes(newStatus),
      `Cannot end duel with ID:${this._id} Invalid status for ending the duel.`
    );
  }
}
