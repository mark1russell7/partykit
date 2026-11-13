---
"partysocket": patch
---

`usePartySocket` and `useWebSocket`: when the hook mounted with `enabled: false` and was then enabled, the first change of the options (for example a new `room`) did not make a new socket. The hook reconnected the old socket with the old options. Now the first change makes a new socket, as later changes do.
