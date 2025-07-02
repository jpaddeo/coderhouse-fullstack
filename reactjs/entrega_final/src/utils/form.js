export const validateCheckoutForm = (formData) => {
  const { nombre, numeroTarjeta, expiracion, cvc } = formData;

  if (!nombre || !numeroTarjeta || !expiracion || !cvc) {
    return {
      isValid: false,
      message: 'Todos los campos son obligatorios.',
    };
  }

  if (!/^\d{16}$/.test(numeroTarjeta)) {
    return {
      isValid: false,
      message: 'El número de tarjeta debe tener 16 dígitos.',
    };
  }

  if (!/^\d{2}\/\d{2}$/.test(expiracion)) {
    return {
      isValid: false,
      message: 'La expiración debe estar en formato MM/AA.',
    };
  }

  if (!/^\d{3}$/.test(cvc)) {
    return {
      isValid: false,
      message: 'El CVC debe ser numérico y tener 3 dígitos.',
    };
  }

  return {
    isValid: true,
    message: '',
  };
};
