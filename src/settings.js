 /**
 * Validates and updates user settings with strict accessibility and error handling.
 */
export function validateAndSaveSettings(settings) {
  const errors = {};

  if (!settings.username || settings.username.trim().length < 2) {
    errors.username = "Username must be at least 2 characters.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!settings.email || !emailRegex.test(settings.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  return { success: true, data: settings };
}