---
"partysocket": patch
---

In browsers, the `close` and `error` events that `PartySocket` makes itself (for example after `close()` or a connection timeout) now reach the listeners added with `addEventListener()` with the right `code`, `reason`, `message` and `error`. Before, the listeners got `code` `"close"`, the event object as `reason`, an `undefined` `message` and the string `"error"` as `error`.
