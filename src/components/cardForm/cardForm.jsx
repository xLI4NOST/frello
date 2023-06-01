import classes from './cardForm.module.sass'
import {useFormik, Formik, Field, Form, yupToFormErrors} from "formik";
import * as yup from 'yup'

const CardForm = () => {
    const validShema = yup.object().shape({
        text: yup.string().min(2, 'Минимум 2 символа').required('Обязательное поле')
    })

    return (
        <div className={classes.formCard}>
            <h2>Create card</h2>
            <Formik initialValues={{
                text: '',
            }}
                    validationSchema={validShema}
                    onSubmit={values => console.log(values)}>

                {({errors, touched, valid}) => (<Form>
                    <Field name="text" type='text'></Field>
                    {errors.text && touched.text ? (<p>{errors.text}</p>) : null}
                    <button disabled={errors.text ? true :  ''} type="submit">PUSH</button>
                </Form>)}
            </Formik>
        </div>
    )
}

export default CardForm