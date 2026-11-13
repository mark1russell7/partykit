---
"partysocket": patch
---

An `onopen`, `onmessage`, `onerror` or `onclose` handler that throws no longer stops the listeners added with `addEventListener()`. The error is reported asynchronously, as `EventTarget` does for a listener that throws. Before, the listeners did not get the event, and an `onclose` that threw inside `close()` was silently swallowed. A throwing `onerror` also no longer stops the next reconnection attempt.
