import classes from './card.module.sass'

const card = ({children}) => {

    return (
    <div className={classes.card}>
        <h2>adada</h2>
        {children}
    </div>
    )

}

export default card