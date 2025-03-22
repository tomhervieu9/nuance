import DuelSystem from "../duelSystem";
import { IDuelParams } from "../interfaces/IDuelParams";
import { beforeEach, describe, expect, it } from "@jest/globals";

// Mock the dummy user data.
jest.mock("./../../users/dummyUsers", () => {
  return {
    __esModule: true, // Ensures the mock is treated as an ES module
    dummyUsers: [
      { id: "user1", name: "Carl", availableFunds: 100 },
      { id: "user2", name: "Jen", availableFunds: 50 },
    ],
  };
});

describe("DuelSystem", () => {
  let duelSystem: DuelSystem;

  beforeEach(() => {
    duelSystem = new DuelSystem();
  });

  describe("createDuel", () => {
    it("should create a duel successfully when both users are valid", () => {
      const params: IDuelParams = {
        question: "Is this a valid question?",
        stake: 2,
        timeToAccept: 100,
      };
      const result = duelSystem.createDuel("user1", "user2", params);
      expect(result).toBe(true);

      // Ensure only 1 duel was created.
      expect(duelSystem.getDuels().length).toBe(1);

      // Ensure the duel was created and populated with the correct information.
      const duel = duelSystem.getDuels()[0];
      expect(duel.challenger.id).toBe("user1");
      expect(duel.challengee.id).toBe("user2");
      expect(duel.duelParams.question).toBe("Is this a valid question?");
      expect(duel.duelParams.stake).toBe(2);
      expect(duel.duelParams.timeToAccept).toBe(100);
      expect(duel.status).toBe("PENDING");
    });
  });
});
