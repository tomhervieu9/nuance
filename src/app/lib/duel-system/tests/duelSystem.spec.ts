import DuelSystem from "../duelSystem";
import { IDuelParams } from "../interfaces/IDuelParams";
import { beforeEach, describe, expect, it } from "@jest/globals";

// Mock the Users class.
jest.mock("@nuance/lib/users/Users", () => {
  return {
    __esModule: true,
    default: {
      get users() {
        return [
          { id: "user1", name: "User One" },
          { id: "user2", name: "User Two" },
        ];
      },
    },
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
      expect(duelSystem.duels.length).toBe(1);

      // Ensure the duel was created and populated with the correct information.
      const duel = duelSystem.duels[0];
      expect(duel.challenger.id).toBe("user1");
      expect(duel.challengee.id).toBe("user2");
      expect(duel.duelParams.question).toBe("Is this a valid question?");
      expect(duel.duelParams.stake).toBe(2);
      expect(duel.duelParams.timeToAccept).toBe(100);
      expect(duel.status).toBe("PENDING");
    });
  });
});
