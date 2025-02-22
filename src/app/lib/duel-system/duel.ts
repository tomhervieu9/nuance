import { assert } from "console";
import { IDuelParams } from "./interfaces/IDuelParams";
import { IDuel } from "./interfaces/IDuel";
import { IDuelTimestamps } from "./interfaces/IDuelTimestamps";
import { DuelStatus } from "./types/DuelStatus";
import { IPlayer } from "./interfaces/IPlayer";

/**
 * A duel between two players.
 */
export default class Duel implements IDuel {
  private _id: string;
  private _duelParams: IDuelParams;
  private _challenger: IPlayer;
  private _challengee: IPlayer;
  private _status: DuelStatus;
  private _timings: IDuelTimestamps;

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
    this._timings = {
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
  public get timings(): IDuelTimestamps {
    return this._timings;
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
    assert(
      newStatus !== this._status &&
        (newStatus === DuelStatus.COMPLETED ||
          newStatus === DuelStatus.CANCELLED ||
          newStatus === DuelStatus.REJECTED),
      "New status must be different from the current status."
    );
  }
}
