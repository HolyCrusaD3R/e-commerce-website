export const validateCheckoutDetails = (formData) => {
  const errors = {};

  if (!formData.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email format is invalid";
  }

  if (!formData.phone) {
    errors.phone = "Phone is required";
  } else if (!/^\+?\d{7,15}$/.test(formData.phone)) {
    errors.phone = "Invalid phone number";
  }

  if (!formData.firstName) errors.firstName = "First Name is required";
  if (!formData.lastName) errors.lastName = "Last Name is required";

  if (!formData.address) errors.address = "Address is required";

  if (!formData.country) errors.country = "Country is required";
  if (!formData.postalCode) {
    errors.postalCode = "Postal Code is required";
  } else if (!/^\d{4,10}$/.test(formData.postalCode)) {
    errors.postalCode = "Postal Code is invalid";
  }

  return errors;
};
