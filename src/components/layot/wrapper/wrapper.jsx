import classes from './wrapper.module.sass'

const wrapper = ({children}) => {

    return (
        <div className={classes.wrapper}>
            {children}
        </div>

    )

}

export default wrapper