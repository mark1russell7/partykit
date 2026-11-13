/**
 * @vitest-environment jsdom
 */

import { expect, test } from "vitest";

import PartySocket from "../index";

const PORT = 50121;
const URL = `localhost:${PORT}/`;

test("throws if host or room is not set", () => {
  expect(() => {
    const partySocket = new PartySocket({ host: "" });
    partySocket.reconnect();
  }).toThrow();
});

test("if the room is correctly updated after calling updateProperties", () => {
  const partySocket = new PartySocket({ host: URL, room: "first-room" });
  partySocket.updateProperties({ room: "second-room" });

  expect(partySocket.room).toBe("second-room");
});

test("updateProperties() keeps the earlier updates and the id", () => {
  const partySocket = new PartySocket({
    host: URL,
    room: "first-room",
    startClosed: true
  });
  const id = partySocket.id;
  partySocket.updateProperties({ party: "chat" });
  partySocket.updateProperties({ room: "second-room" });

  expect(partySocket.name).toBe("chat");
  expect(partySocket.roomUrl).toBe(
    "ws://localhost:50121/parties/chat/second-room"
  );
  expect(partySocket.id).toBe(id);
});
