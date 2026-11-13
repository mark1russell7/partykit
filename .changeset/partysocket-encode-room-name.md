---
"partysocket": patch
---

A `?` or a `#` in a `room` or `party` name is now percent-encoded in the URL. Before, a room such as `a?b` connected to the room `a` (the rest went into the query, with the `_pk` id), and a room such as `a#b` made a URL with a fragment, which the WebSocket constructor rejects, so the socket retried without end. Other characters are not changed, so the room names that work today stay the same.
