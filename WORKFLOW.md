 # AI Workflow Reflection (FE-03)

## Prompt Comparison & Analysis

### Round 1: Vague Prompting (`feat/vague-prompt`)
* **Prompt used:** "Make a user settings feature."
* **Resulting Code Quality:** The AI generated generic boilerplate code with minimal error handling and no unit tests. The implementation lacked input validation for email formats and username lengths, requiring manual refactoring to meet production standards.
* **Refactoring Effort:** High. Significant manual intervention was needed to add edge-case checks and create test coverage.

### Round 2: Spec-Driven Prompting (`feat/spec-driven`)
* **Prompt used:** "Create a modular JavaScript function `validateAndSaveSettings` that validates user settings (username >= 2 chars, valid email syntax). Return structured success/error objects, and provide full unit tests using the native Node.js test runner."
* **Resulting Code Quality:** The output was precise, production-ready, and included complete test coverage (`node:test` and `node:assert`). All 3 unit tests passed on the first execution.
* **Refactoring Effort:** Low. The generated code strictly adhered to the requirements without unexpected side effects.

## Key Takeaways
1. Clear structural constraints and explicitly naming target testing frameworks drastically reduce AI hallucinations.
2. Spec-driven prompts save significant debugging time by enforcing input/output contracts up front.