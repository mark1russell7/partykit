---
"partysocket": patch
---

`updateProperties()` no longer throws "path must not start with a slash" on a PartySocket that was made with a `path`. It passed the stored path, which starts with a slash, back as the `path` option.
