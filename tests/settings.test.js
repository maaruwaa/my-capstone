import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  DEFAULT_SETTINGS,
  getInitials,
  validateSettings,
} from "../public/js/settings.js";

describe("getInitials", () => {
  it("returns uppercase initials from first and last name", () => {
    assert.equal(getInitials("Alex", "Johnson"), "AJ");
  });

  it("handles single-character names", () => {
    assert.equal(getInitials("A", "B"), "AB");
  });

  it("returns fallback when names are empty", () => {
    assert.equal(getInitials("", ""), "?");
  });
});

describe("validateSettings", () => {
  it("passes with valid settings", () => {
    const errors = validateSettings(DEFAULT_SETTINGS);
    assert.equal(errors.length, 0);
  });

  it("requires first name", () => {
    const settings = structuredClone(DEFAULT_SETTINGS);
    settings.profile.firstName = "";
    const errors = validateSettings(settings);
    assert.ok(errors.includes("First name is required."));
  });

  it("requires a valid email", () => {
    const settings = structuredClone(DEFAULT_SETTINGS);
    settings.email.address = "not-an-email";
    const errors = validateSettings(settings);
    assert.ok(errors.some((e) => e.includes("valid email")));
  });
});
