const validatePaymentForm = (formData) => {
  const errors = {};

  if (!formData.cardNumber || !/^\d{16}$/.test(formData.cardNumber)) {
    errors.cardNumber = "Card number must be 16 digits";
  }

  if (!formData.holderName || formData.holderName.trim().length < 2) {
    errors.holderName = "Holder name is required";
  }

  if (
    !formData.expiry ||
    !/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiry.trim())
  ) {
    errors.expiry = "Expiry must be in MM/YY format";
  }

  if (!formData.cvv || !/^\d{3,4}$/.test(formData.cvv)) {
    errors.cvv = "CVV must be 3 or 4 digits";
  }

  return errors;
};

export default validatePaymentForm;
