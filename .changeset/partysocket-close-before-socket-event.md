---
"partysocket": patch
---

`close()` now dispatches its close event also when it is called before the inner WebSocket exists: right after the constructor, or while an async URL provider (or a PartySocket `query` function) is pending. Before, `readyState` went from `CONNECTING` to `CLOSED` with no close event.
