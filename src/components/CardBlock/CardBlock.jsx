import classes from './CardBlock.module.sass'
import Card from "../card/card";
import Task from "../task/task";

const CardBlock = () => {

    return (
        <div className={classes.cardBlock}>
            <Card><Task/> <Task/></Card>
            <Card><Task/> <Task/></Card>
            <Card><Task/> <Task/></Card>
        </div>
    )

}

export default CardBlock