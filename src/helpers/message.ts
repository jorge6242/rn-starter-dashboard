export const exception = (err: any) => {
  if (typeof err === 'object') {
    if (err.name === 'Error' && err.message === 'Network Error') {
      return 'El servidor no responde';
    }

    if (err.response) {
      if (err.response.status === 500) {
        return 'Error de Servidor';
      }

      if (err.response.data) {
        return err.response.data.message;
      }
    }
  }
  return err;
};

export default {
  exception,
};
