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

test("a room name with ? or # stays in the path of the URL", () => {
  const partySocket = new PartySocket({
    host: URL,
    room: "a?b#c",
    id: "client-1",
    startClosed: true
  });

  expect(partySocket.room).toBe("a?b#c");
  expect(partySocket.roomUrl).toBe(
    "ws://localhost:50121/parties/main/a%3Fb%23c"
  );
  // @ts-expect-error accessing protected field
  expect(partySocket._url).toBe(
    "ws://localhost:50121/parties/main/a%3Fb%23c?_pk=client-1"
  );
});
