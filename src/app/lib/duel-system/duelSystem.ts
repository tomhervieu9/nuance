import Duel from "./duel";
import { IChallengeParams } from "./interfaces/IChallengeParams";
import Users from "@nuance/lib/users/Users";
import { IDuel } from "./interfaces/IDuel";
/**
 * The system that deals with managing user-to-user duels.
 */
export default class DuelSystem {
  activeDuels: IDuel[] = [];

  constructor() {
    // Initialize
  }

  /**
   * Creates a new challenge (pending duel) between two users.
   *
   * @param challengerId The ID of the user who issued the challenge.
   * @param challengeeId The ID of the user who was challenged.
   * @param params The parameters of the challenge.
   * @returns True if the challenge was created successfully, false otherwise.
   */
  public createChallenge(
    challengerId: string,
    challengeeId: string,
    params: IChallengeParams
  ): boolean {
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
      // TODO: Generate a unique ID for the duel
      "1",
      params,
      "Challenger Argument",
      "Challengee Argument",
      new Date()
    );

    this.activeDuels.push(newDuel);

    return true;
  }
}
