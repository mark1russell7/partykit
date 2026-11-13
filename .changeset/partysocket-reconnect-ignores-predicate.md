---
"partysocket": patch
---

`reconnect()` on an open socket now connects again also when `shouldReconnectOnClose` returns `false` for the close event of this `reconnect()` itself. Before, a predicate such as `(e) => e.code !== 1000` turned the explicit `reconnect()` into a close.
