import { IStake } from "../interfaces/IStake";
import { users } from "./users";

const stake: IStake[] = [
  {
    userId: users[0].id,
    amount: 15795,
    status: "pending",
    date: "2022-12-06",
  },
  {
    userId: users[1].id,
    amount: 20348,
    status: "pending",
    date: "2022-11-14",
  },
  // ...
];
