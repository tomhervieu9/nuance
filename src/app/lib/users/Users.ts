import { IUser } from "../interfaces/IUser";

export default abstract class Users {
  constructor() {
    // Initialize
  }

  public static get users(): IUser[] {
    return [
      {
        id: "1",
        name: "John Doe",
        totalStaked: 800,
      },
      {
        id: "2",
        name: "Sally Smith",
        totalStaked: 400,
      },
    ];
  }
}
