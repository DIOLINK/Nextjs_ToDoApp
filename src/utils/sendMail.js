import Swal from 'sweetalert2';

export const sendMail = async (data) => {
  try {
    await fetch('/api/email', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    });
  } catch (error) {
    Swal.fire('Error Send Mail', error.message, 'error');
  }
};
