import DuelSystem from "../duelSystem";
import { IChallengeParams } from "../interfaces/IChallengeParams";
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

  describe("createChallenge", () => {
    it("should create a challenge successfully when both users are valid", () => {
      const params: IChallengeParams = {
        question: "Is this a valid question?",
        minStakeAmount: 2,
        timeToAccept: 100,
      };
      const result = duelSystem.createChallenge("user1", "user2", params);
      expect(result).toBe(true);
    });
  });
});
