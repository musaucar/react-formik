import * as yup from 'yup';

const validations = yup.object({
    email: yup.string().email('Geçerli bir email girin.').required('Bu alan boş geçilemez'),
    password: yup.string().min(6,'En az 6 karakter girilmelidir.').required('Bu alan boş geçilemez'),
    passwordConfirm: yup.string().oneOf([yup.ref('password')],'Girilen şifre ile aynı olmalıdır').required('Bu alan boş geçilemez')
});

export default validations;