import { assert } from "console";
import { IChallengeParams } from "./interfaces/IChallengeParams";
import { IDuel } from "./interfaces/IDuel";
import { IDuelTimings } from "./interfaces/IDuelTimings";
import { DuelStatus } from "./types/DuelStatus";

export default class Duel implements IDuel {
  private _id: string;
  private _challengeParams: IChallengeParams;
  private _challengerArgument: string;
  private _challengeeArgument: string;
  private _status: DuelStatus;
  private _timings: IDuelTimings;

  constructor(
    id: string,
    challengeParams: IChallengeParams,
    challengerArgument: string,
    challengeeArgument: string,
    currentTime: Date
  ) {
    this._id = id;
    this._challengeParams = challengeParams;
    this._challengerArgument = challengerArgument;
    this._challengeeArgument = challengeeArgument;
    this._status = DuelStatus.PENDING;
    this._timings = {
      challengeTime: currentTime,
      startTime: undefined,
      completedTime: undefined,
      rejectedTime: undefined,
      cancelledTime: undefined,
    };
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

  /**
   * @inheritdoc
   */
  getDuelStatus(): DuelStatus {
    return this._status;
  }
}
