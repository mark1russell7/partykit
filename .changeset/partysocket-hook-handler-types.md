---
"partysocket": patch
---

The `onOpen`, `onMessage`, `onClose` and `onError` options of the React hooks now use the event types of `partysocket` (`WebSocketEventMap` of `partysocket/ws`), not the DOM `WebSocketEventMap`. So `onError` gets `ErrorEvent` with `message` and `error`, and `onClose` gets the `CloseEvent` of `partysocket`, as `addEventListener()` does.
