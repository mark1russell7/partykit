---
"partysocket": patch
---

`close(code, reason)` with a code or a reason that `WebSocket.close()` rejects no longer leaves the inner socket open. The socket now closes without the rejected code and reason, the close event is dispatched, and the error from `WebSocket.close()` is thrown to the caller.
