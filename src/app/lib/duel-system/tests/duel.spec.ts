import Duel from "../duel";
import { IDuel } from "../interfaces/IDuel";
import { describe, expect, it } from "@jest/globals";
import { DuelStatus } from "../types/DuelStatus";

// Mock the dummy user data.
jest.mock("./../../users/dummyUsers", () => {
  return {
    __esModule: true, // Ensures the mock is treated as an ES module
    dummyUsers: [
      { id: "user1", name: "Carl", balance: 100 },
      { id: "user2", name: "Jen", balance: 50 },
    ],
  };
});

describe("Duel", () => {
  const duel: IDuel = new Duel(
    "someuniqueid",
    { question: "Is this a valid question?", stake: 2, timeToAccept: 100 },
    { id: "user1", username: "Carl", argument: undefined },
    { id: "user2", username: "Jen", argument: undefined },
    new Date()
  );

  describe("startDuel", () => {
    it("should start a duel successfully", () => {
      // Ensure the duel is in the correct state.
      expect(duel.status).toBe(DuelStatus.PENDING);

      // Start the duel.
      duel.startDuel();

      // Ensure the duel is in the correct state.
      expect(duel.status).toBe(DuelStatus.ACTIVE);
    });
  });
});
