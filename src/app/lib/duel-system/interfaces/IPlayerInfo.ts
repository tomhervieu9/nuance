/**
 * Represents the info about a player in a duel.
 */
export interface IPlayerInfo {
  /**
   * The player's user ID.
   */
  id: string;

  /**
   * The player's username.
   */
  username: string;

  /**
   * The player's argument.
   */
  argument: string | undefined;
}
