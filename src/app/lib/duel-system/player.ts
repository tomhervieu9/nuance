import { IPlayer } from "./interfaces/IPlayer";

/**
 * A player in a duel.
 */
export default class Player implements IPlayer {
  private _id: string;
  private _username: string;
  private _argument: string;

  /**
   * Constructor.
   * @param id The player's user ID.
   * @param username The player's username.
   * @param argument The player's argument.
   */
  constructor(id: string, username: string, argument: string) {
    this._id = id;
    this._username = username;
    this._argument = argument;
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
  public get username(): string {
    return this._username;
  }

  /**
   * @inheritdoc
   */
  public get argument(): string {
    return this._argument;
  }
}
