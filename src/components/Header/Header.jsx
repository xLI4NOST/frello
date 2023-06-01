import classes from './Header.module.sass'
import menu from '../../images/menu.svg'
import home from '../../images/home.svg'
import boards from '../../images/boards.svg'
import brand from '../../images/Brand.svg'
import plus from '../../images/plus.svg'
import info from '../../images/info.svg'
import profile from '../../images/profile.svg'
const Header = () => {

    return (
        <div className={classes.header}>
            <div className={classes.buttonBlock}>
                <img src={menu}/>
                <img src={home}/>
                <img src={boards}/>
            </div>
            <img src={brand}/>
            <div className={classes.buttonBlock}>
                <img src={plus}/>
                <img src={info}/>
                <img src={profile}/>
            </div>
        </div>
    )

}

export default Header