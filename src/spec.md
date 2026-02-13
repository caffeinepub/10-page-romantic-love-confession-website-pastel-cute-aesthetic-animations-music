# Specification

## Summary
**Goal:** Make the “No” button on the Final Page clickable once (no runaway behavior) and then remove it after the first activation.

**Planned changes:**
- Update `frontend/src/pages/10-FinalPage.tsx` to remove/disable the runaway/dodging behavior for the “No” button so it stays in place and is normally clickable/focusable.
- Add one-time activation handling for “No” (mouse/touch/keyboard) that hides/removes the “No” button after the first successful activation.
- Ensure “No” does not trigger the “Yes 💖” celebration overlay or the “Let Me Think 😊” “I’ll wait patiently 💕” state, while keeping “Yes 💖” and “Let Me Think 😊” behavior unchanged.

**User-visible outcome:** On the Final Page, “No” can be clicked/activated once and then disappears, leaving only “Yes 💖” and “Let Me Think 😊” available with their existing behaviors.
