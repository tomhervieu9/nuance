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
        minStakeAmount: 2,
        timeToAccept: 100,
      };
      const result = duelSystem.createDuel("user1", "user2", params);
      expect(result).toBe(true);
    });
  });
});
