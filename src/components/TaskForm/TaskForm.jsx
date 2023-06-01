import classes from './TaskForm.module.sass'
import {Field, Form, Formik} from "formik";

const TaskForm = () => {

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

export default TaskForm