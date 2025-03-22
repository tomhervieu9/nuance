import Duel from "./duel";
import { IDuelParams } from "./interfaces/IDuelParams";
import { IDuel } from "./interfaces/IDuel";
import PlayerInfo from "./playerInfo";
import assert from "@nuance/utils/assertions";
import { dummyUsers } from "../users/dummyUsers";

/**
 * The system that deals with managing user-to-user duels.
 */
export default class DuelSystem {
  // A collection of duels keyes on their ID.
  private _duels: Record<string, IDuel> = {};

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
    // Get all user IDs.
    const users = dummyUsers.map((user) => user.id);

    // Check that challengerId is valid
    if (!users.includes(challengerId)) {
      return false;
    }

    // Check that challengeeId is valid
    if (!users.includes(challengeeId)) {
      return false;
    }

    // Create a pending duel
    // FIXME: Replace these magic strings.
    const newDuel = new Duel(
      "someuniqueid",
      params,
      new PlayerInfo(challengerId, "username", "argument"),
      new PlayerInfo(challengeeId, "username", "argument"),
      new Date()
    );

    // Ensure the same duel ID does not already exist.
    assert(
      this._duels[newDuel.id] === undefined,
      "Cannot create duel. Duel ID already exists"
    );

    this._duels[newDuel.id] = newDuel;

    return true;
  }

  /**
   * Gets the duel(s) according the specified params.
   *
   * @param id The ID of the duel to get.
   * @returns The duel with the specified ID, or undefined if not found.
   */
  public getDuels(ids?: string[]): IDuel[] {
    const duelsToGet: IDuel[] = [];

    // If no IDs are specified, return all duels.
    if (ids === undefined) {
      const duels = Object.values(this._duels);

      duels.forEach((duel) =>
        assert(
          duel !== undefined,
          `Cannot get duels. Duel with ID ${duel.id} not found.`
        )
      );

      return duels;
    }

    // Get the duels with the specified IDs.
    ids.forEach((id) => {
      const duel = this._duels[id];

      // Ensure the duel exists.
      assert(
        duel !== undefined,
        `Cannot get duel. Duel with ID ${id} not found.`
      );

      duelsToGet.push(duel);
    });

    return duelsToGet;
  }
}
