import Duel from "./duel";
import { IDuelParams } from "./interfaces/IDuelParams";
import Users from "@nuance/lib/users/Users";
import { IDuel } from "./interfaces/IDuel";
import Player from "./player";
/**
 * The system that deals with managing user-to-user duels.
 */
export default class DuelSystem {
  private _duels: IDuel[] = [];

  constructor() {
    // Initialize
  }

  /**
   * Creates a new challenge (pending duel) between two players. A player is derived from a user.
   *
   * @param challengerId The ID of the user who issued the challenge.
   * @param challengeeId The ID of the user who was challenged.
   * @param params The parameters of the challenge.
   * @returns True if the challenge was created successfully, false otherwise.
   */
  public createDuel(
    challengerId: string,
    challengeeId: string,
    params: IDuelParams
  ): boolean {
    // FIXME: Replace with actual user IDs. This is using dummy data.
    const users = Users.users.map((user) => user.id);

    // Check that challengerId is valid
    if (!users.includes(challengerId)) {
      return false;
    }

    // Check that challengeeId is valid
    if (!users.includes(challengeeId)) {
      return false;
    }

    // Create a pending duel
    const newDuel = new Duel(
      "someuniqueid",
      params,
      new Player(challengerId, "username", "argument"),
      new Player(challengeeId, "username", "argument"),
      new Date()
    );

    this._duels.push(newDuel);

    return true;
  }

  public get duels(): IDuel[] {
    return this._duels;
  }
}
