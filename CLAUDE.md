 # Project Rules & Guidelines

1. **Testing Standard:** Always write unit tests using Node's native test runner (`node:test` and `node:assert`) inside the `tests/` directory.
2. **Modular Code Structure:** Keep business logic separated in `src/` and ensure all functions export structured success/error response objects.
3. **Commit Discipline:** Maintain feature-based git branch workflows (`feat/*`) and run `npm test` before committing changes.