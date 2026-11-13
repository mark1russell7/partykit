---
"partysocket": patch
---

The type of `PartySocket.fetch()` options no longer requires `room` when `basePath` is set. `PartySocket.fetch({ host, basePath })` already worked at run time, as `new PartySocket({ host, basePath })` does. A `room` or a `basePath` is still required.
