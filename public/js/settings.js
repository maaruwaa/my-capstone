const STORAGE_KEY = "app-settings";

const DEFAULT_SETTINGS = {
  profile: {
    firstName: "Alex",
    lastName: "Johnson",
    bio: "Product designer passionate about building intuitive experiences.",
    jobTitle: "Product Designer",
  },
  email: {
    address: "alex.johnson@example.com",
    verified: true,
  },
  notifications: {
    emailUpdates: true,
    pushNotifications: true,
    weeklyDigest: false,
    marketingEmails: false,
    securityAlerts: true,
  },
};

function loadSettings() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return structuredClone(DEFAULT_SETTINGS);

    const parsed = JSON.parse(stored);
    return {
      profile: { ...DEFAULT_SETTINGS.profile, ...parsed.profile },
      email: { ...DEFAULT_SETTINGS.email, ...parsed.email },
      notifications: { ...DEFAULT_SETTINGS.notifications, ...parsed.notifications },
    };
  } catch {
    return structuredClone(DEFAULT_SETTINGS);
  }
}

function saveSettings(settings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

function getInitials(firstName, lastName) {
  const first = firstName.trim().charAt(0).toUpperCase();
  const last = lastName.trim().charAt(0).toUpperCase();
  return `${first}${last}` || "?";
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("toast--visible");

  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    toast.classList.remove("toast--visible");
  }, 3000);
}

function populateForm(settings) {
  const { profile, email, notifications } = settings;

  document.getElementById("firstName").value = profile.firstName;
  document.getElementById("lastName").value = profile.lastName;
  document.getElementById("jobTitle").value = profile.jobTitle;
  document.getElementById("bio").value = profile.bio;
  document.getElementById("email").value = email.address;

  const avatar = document.getElementById("avatar");
  avatar.textContent = getInitials(profile.firstName, profile.lastName);
  avatar.setAttribute("aria-label", `${profile.firstName} ${profile.lastName}`);

  const badge = document.getElementById("emailBadge");
  badge.textContent = email.verified ? "Verified" : "Unverified";
  badge.className = `badge badge--verified${email.verified ? "" : " badge--unverified"}`;

  Object.entries(notifications).forEach(([key, value]) => {
    const input = document.getElementById(key);
    if (input) input.checked = value;
  });
}

function readFormValues() {
  return {
    profile: {
      firstName: document.getElementById("firstName").value.trim(),
      lastName: document.getElementById("lastName").value.trim(),
      jobTitle: document.getElementById("jobTitle").value.trim(),
      bio: document.getElementById("bio").value.trim(),
    },
    email: {
      address: document.getElementById("email").value.trim(),
      verified: loadSettings().email.verified,
    },
    notifications: {
      emailUpdates: document.getElementById("emailUpdates").checked,
      pushNotifications: document.getElementById("pushNotifications").checked,
      weeklyDigest: document.getElementById("weeklyDigest").checked,
      marketingEmails: document.getElementById("marketingEmails").checked,
      securityAlerts: document.getElementById("securityAlerts").checked,
    },
  };
}

function validateSettings(settings) {
  const errors = [];

  if (!settings.profile.firstName) errors.push("First name is required.");
  if (!settings.profile.lastName) errors.push("Last name is required.");
  if (!settings.email.address) {
    errors.push("Email address is required.");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(settings.email.address)) {
    errors.push("Please enter a valid email address.");
  }

  return errors;
}

function initSettingsPage() {
  const form = document.getElementById("settingsForm");
  const resetBtn = document.getElementById("resetBtn");

  if (!form) return;

  let settings = loadSettings();
  populateForm(settings);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const updated = readFormValues();
    const errors = validateSettings(updated);

    if (errors.length > 0) {
      showToast(errors[0]);
      return;
    }

    settings = updated;
    saveSettings(settings);
    populateForm(settings);
    showToast("Settings saved successfully.");
  });

  resetBtn.addEventListener("click", () => {
    settings = structuredClone(DEFAULT_SETTINGS);
    saveSettings(settings);
    populateForm(settings);
    showToast("Settings reset to defaults.");
  });

  ["firstName", "lastName"].forEach((id) => {
    document.getElementById(id).addEventListener("input", () => {
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      document.getElementById("avatar").textContent = getInitials(firstName, lastName);
    });
  });
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", initSettingsPage);
}

export {
  DEFAULT_SETTINGS,
  loadSettings,
  saveSettings,
  getInitials,
  validateSettings,
};
