import classes from './Overlay.module.sass'
import {useFormik} from "formik";
import CardForm from "../cardForm/cardForm";

const Overlay = () => {

    return (
        <div className={classes.overlay}>
            <div className={classes.popupForm}>
                <CardForm/>
            </div>
        </div>

    )

}

export default Overlay