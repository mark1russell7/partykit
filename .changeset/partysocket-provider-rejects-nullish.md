---
"partysocket": patch
---

A URL provider, a protocols provider or a PartySocket `query` function that rejects with `undefined` or `null` now gives an `error` event and a retry, as a rejection with an `Error` does. Before, it gave an unhandled promise rejection (a `TypeError`), no `error` event and no retry: the socket stayed in `CONNECTING`.
