---
"partysocket": patch
---

In Node.js and React Native, the `close` events that reach the listeners added with `addEventListener()` now keep an empty `reason` and the `wasClean` value of the WebSocket. Before, an empty reason became `"unknown reason"`, and `wasClean` was always `true`, also for an abnormal closure (code 1006).
