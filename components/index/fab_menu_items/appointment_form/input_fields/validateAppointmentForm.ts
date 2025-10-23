// src/utils/validateAppointmentForm.ts

import { FormFields } from "./TextfieldInput";

const REQUIRED_FIELDS: (keyof FormFields)[] = [
  "first_name",
  "last_name",
  "message",
  "address",
  "phone",
  "email",
];

const MIN_ADDRESS_LENGTH = 14;
const MIN_DATE_OFFSET_DAYS = 2;
export const MIN_DATE = new Date(Date.now() + MIN_DATE_OFFSET_DAYS * 86400000);

export const validateAppointmentForm = (form: FormFields): string | null => {
  // 1. Check for missing required fields
  const missingFields = REQUIRED_FIELDS.filter(
    (field) => !form[field].toString().trim()
  );
  if (missingFields.length) {
    return `Please fill out: ${missingFields.join(", ").replaceAll("_", " ")}`;
  }

  // 2. Address length
  if (form.address.trim().length < MIN_ADDRESS_LENGTH) {
    return `Please enter a valid address (at least ${MIN_ADDRESS_LENGTH} characters).`;
  }

  // 3. Phone validation
  if (!/^09\d{9}$/.test(form.phone) && !/^\+639\d{9}$/.test(form.phone)) {
    return "Please enter a valid phone number (starts with 09 or +63, 11 digits).";
  }

  // 4. Email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    return "Please enter a valid email address.";
  }

  // 5. Date validation
  if (form.date_specified < MIN_DATE) {
    return `Date must be at least ${MIN_DATE_OFFSET_DAYS} days from now.`;
  }

  return null;
};
