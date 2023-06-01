import classes from './mainBoard.module.sass'
import privatee from  '../../images/private.svg'
import personal from '../../images/personal.svg'
import invite from '../../images/invite.svg'

const mainBoard = ({children}) => {

    return (
        <div className={classes.mainBoard}>
            <div className={classes.description}>
                <h2>Main board</h2>
                <img src={privatee} alt={privatee}/>
                <img src={personal} alt={personal}/>
                <img src={invite} alt={invite}/>
            </div>
            {children}
        </div>
    )

}

export default mainBoard