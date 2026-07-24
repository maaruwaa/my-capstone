 import { test } from 'node:test';
import assert from 'node:assert';
import { validateAndSaveSettings } from '../src/settings.js';

test('validates valid user settings successfully', () => {
  const input = { username: 'Yassmine', email: 'user@example.com', notifications: true };
  const result = validateAndSaveSettings(input);
  assert.strictEqual(result.success, true);
  assert.deepStrictEqual(result.data, input);
});

test('returns error for short username', () => {
  const input = { username: 'Y', email: 'user@example.com', notifications: true };
  const result = validateAndSaveSettings(input);
  assert.strictEqual(result.success, false);
  assert.strictEqual(result.errors.username, 'Username must be at least 2 characters.');
});

test('returns error for invalid email', () => {
  const input = { username: 'Yassmine', email: 'invalid-email', notifications: true };
  const result = validateAndSaveSettings(input);
  assert.strictEqual(result.success, false);
  assert.strictEqual(result.errors.email, 'Please enter a valid email address.');
});