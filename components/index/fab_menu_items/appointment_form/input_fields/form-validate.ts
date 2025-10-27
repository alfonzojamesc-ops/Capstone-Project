import { InputFields } from "./input-texts";

const MIN_ADDRESS_LENGTH = 14;
const MIN_DATE_OFFSET_DAYS = 2;
export const MIN_DATE = new Date(Date.now() + MIN_DATE_OFFSET_DAYS * 86400000);

const REQUIRED_FIELDS: (keyof InputFields)[] = [
  "first_name",
  "last_name",
  "message",
  "address",
  "phone",
  "email",
];

export const getFieldError = (
  field: keyof InputFields,
  value: string | Date,
  form?: InputFields
): string | undefined => {
  if (field === "date_specified") {
    if (!(value instanceof Date)) return "Invalid date.";
    if (value < MIN_DATE)
      return `Date must be at least ${MIN_DATE_OFFSET_DAYS} days from now.`;
    return undefined;
  }

  const val = value.toString().trim();

  switch (field) {
    case "first_name":
      return !val ? "First name is required." : undefined;

    case "last_name":
      return !val ? "Last name is required." : undefined;

    case "message":
      return !val ? "Message is required." : undefined;

    case "address":
      if (!val) return "Address is required.";
      if (val.length < MIN_ADDRESS_LENGTH)
        return `Please enter a valid address.`;
      break;

    case "phone":
      if (!val) return "Phone number is required.";
      if (!/^09\d{9}$/.test(val) && !/^\+639\d{9}$/.test(val))
        return "Please enter a valid phone number (starts with 09 or +63, 11 digits).";
      break;

    case "email":
      if (!val) return "Email is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val))
        return "Please enter a valid email address.";
      break;
  }

  return undefined;
};

export const formValidate = (form: InputFields): string | null => {
  for (const field of REQUIRED_FIELDS) {
    const error = getFieldError(field, form[field], form);
    if (error) return error;
  }

  const dateError = getFieldError("date_specified", form.date_specified, form);
  if (dateError) return dateError;

  return null;
};
