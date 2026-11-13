---
"partysocket": patch
---

`close()` now clears a pending reconnection delay. Before, the timer of the delay stayed active after `close()`, so a Node.js process did not exit until the delay ended (3 seconds or more with the default options).
