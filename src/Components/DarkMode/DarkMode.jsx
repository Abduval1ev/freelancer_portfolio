import React from 'react'
import sun from '../../img/icons/sun.svg'
import moon from '../../img/icons/moon.svg'
import style from '../../sass/blocks/darkMode.module.scss'

export default function DarkMode() {

    // const activeFunc = () => {
    //     let activeBtn = dark_mode_btn__icon;
    //     let normalBtn = dark_mode_btn__active;
    // }


    return (
        <>
            <button className={style.dark_mode_btn}>
                <img
                    src={sun}
                    alt="Light mode"
                    className={style.dark_mode_btn__icon}
                />
                <img
                    src={moon}
                    alt="Dark mode"
                    className={style.dark_mode_btn__icon}
                />
            </button>
        </>
    )
}
