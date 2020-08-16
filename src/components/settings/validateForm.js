import * as Yup from 'yup';

const validateForm = (translate) => {
  return Yup.object().shape({
    currentPassword: Yup.string().required(translate('pos.required')),
    newPassword: Yup.string().required(translate('pos.required')),
    verifiedNewPassword: Yup.string().required(translate('pos.required'))
  });
}

export default validateForm;