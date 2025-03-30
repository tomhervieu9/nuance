import { IUser } from "../duel-system/interfaces/IUser";

// TODO: replace with DB query.
export const dummyUsers: IUser[] = [
  {
    id: "1",
    name: "John Doe",
    availableFunds: 800,
  },
  {
    id: "2",
    name: "Sally Smith",
    availableFunds: 400,
  },
];
