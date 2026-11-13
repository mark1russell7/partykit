---
"partysocket": patch
---

The default `minReconnectionDelay` is random again (1 to 5 seconds, chosen once for each socket), as the README says. Since 1.1.19 it was a fixed 3 seconds, so all clients that lost the same server tried again at the same moments. The random value is chosen at the first reconnection, not when the module is imported, so the fix of 1.1.19 for Cloudflare Workers stays.
