---
"partysocket": patch
---

`updateProperties()` now keeps the changes of the earlier calls and the id of the socket. Before, each call started again from the constructor options, so a second call undid the first one (for example a changed `party` or `query`), and a socket made without an `id` got a new random id on each call.
