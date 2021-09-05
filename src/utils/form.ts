const patternConditions = {
  email: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: 'Correo inválido',
  },
  numbers: {
    value: new RegExp('^[0-9.]+$'),
    message: 'Solo números',
  },
};

const getPattern = (
  type: string,
): {message: string; value: string | RegExp} => {
  switch (type) {
    case 'email':
      return patternConditions.email;
    case 'number':
      return patternConditions.numbers;
    default:
      return {value: '', message: ''};
  }
};

export default {getPattern};
