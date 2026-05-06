# Yellow Brick Load – Code Review Notes

## High-impact improvements

1. **Fix state interpolation to use full store state**
   - `PassageRenderer` currently passes a reduced state object to `interpolate(...)` (`load`, `desync`, `smudge`, `compliance`, etc.), which means template tokens like `{{flags.someFlag}}` and many `{{stats.KEY}}` values can silently render as blank even when they exist in the store.
   - Recommendation: pass the entire Zustand snapshot (or at least include `flags` and all wetware stats used by passages) into interpolation.

2. **Add duplicate passage-ID validation at startup/tests**
   - The passage registry merges many large objects with spread syntax. In JS object spreads, later duplicates overwrite earlier ones silently.
   - Recommendation: add a build/test-time assertion that detects duplicate IDs before merge finalization (or checks source maps for collisions). This avoids hard-to-debug narrative branch loss.

3. **Harden persistence/localStorage access**
   - Residual signal/persistent flag systems depend on `localStorage`; while this works in browsers, future SSR/testing environments can fail if not gated.
   - Recommendation: centralize storage reads/writes behind a tiny adapter with graceful fallbacks and error logging.

## Gameplay/data consistency improvements

4. **Oracle draw bucket coverage is partial across characters**
   - `oracleDraw.js` has explicit bucket priorities for only `lion`, `tin_man`, `scarecrow`, and `dorothy`.
   - Other playable characters currently fall back to `'archive'` only, reducing build-specific oracle variability.
   - Recommendation: define priorities for `glinda`, `wizard`, `witch_west`, and `witch_east` tied to their core wetware stats.

5. **Document and enforce effect-schema contracts**
   - `applyEffects` supports a broad effect language and intentionally no-ops several types. This is flexible but can hide authoring mistakes.
   - Recommendation: add a lightweight runtime validator in dev/test mode for effect objects (`type`, required fields), and fail loudly on unknown effect types unless explicitly whitelisted.

6. **Cycle handling strategy for map + choice filtering**
   - `PassageRenderer` removes choices targeting any previously visited node. This avoids loops but also blocks deliberate narrative revisits.
   - Recommendation: consider per-node/per-choice metadata (`allowRevisit`, `maxVisits`) so authored loops can exist intentionally.

## Test coverage opportunities

7. **Add targeted tests for interpolation edge-cases**
   - Include tests for `{{flags.KEY}}`, conditional blocks (`{{#flags.KEY}}...`), and `{{stats.KEY}}` with full store snapshots.

8. **Add tests for oracle bucket selection by character**
   - Verify `getActiveBucket()` behavior and fallback behavior for each character.

9. **Add registry integrity tests**
   - Validate every choice target resolves to an existing passage ID.
   - Validate all `ORACLE_ENTRY`/`ORACLE_DRAW` and ending nodes exist.

## UX/accessibility/performance enhancements

10. **Respect reduced motion preference**
    - `window.scrollTo({ behavior: 'smooth' })` should switch to instant when `prefers-reduced-motion` is enabled.

11. **Keyboard focus management on node transitions**
    - Move focus to the state card/container after navigation so keyboard and screen-reader users get deterministic context updates.

12. **Memoization boundaries**
    - `mapLayout` recomputation is reasonable now, but as passage graphs grow, deriving filtered choices and path nodes via helper selectors (with stable inputs) can reduce rerender costs.

## Nice-to-have project hygiene

13. **Narrative content linting tooling**
    - Consider a script that scans passage files for:
     - unreachable nodes,
     - orphan passages,
     - invalid effect types/fields,
     - token placeholders that never resolve.

14. **Authoring docs for passage DSL**
    - Expand docs with canonical examples of `onEnter`, `effects`, conditions, token interpolation, and convergence-node patterns.

