import classes from './task.module.sass'
import time from '../../images/time.svg'
const task = () => {

    return (
        <div className={classes.task}>
            <div className={classes.color_block}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h2>New e-commerce for designer</h2>
            <a href='#'>Link</a>
            <div className={classes.time}>
                <img src={time} alt={time}/>
                <h2>27 Jun</h2>
            </div>
        </div>

    )

}

export default task