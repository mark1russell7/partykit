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

test("makes an id when there is no global crypto", () => {
  // as in React Native without a polyfill
  const descriptor = Object.getOwnPropertyDescriptor(globalThis, "crypto");
  // @ts-expect-error - remove the global for this test
  delete globalThis.crypto;
  try {
    expect(typeof crypto).toBe("undefined");
    const partySocket = new PartySocket({
      host: URL,
      room: "room",
      startClosed: true
    });
    expect(partySocket.id).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/
    );
  } finally {
    if (descriptor) {
      Object.defineProperty(globalThis, "crypto", descriptor);
    }
  }
});
