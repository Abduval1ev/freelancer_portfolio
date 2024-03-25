import React from 'react'
import moon from '../../img/icons/moon.svg'
import sun from '../../img/icons/sun.svg'
import { useLocalStorage } from '../../utils/useLocalStorage'
import detectDarkMode from '../../utils/detectDarkMode'

export default function DarkMood() {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())

    const btnRef = React.useRef(null)

    React.useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark')
            btnRef.current.classList.add('dark-mode-btn--active')
        } else {
            document.body.classList.remove('dark')
            btnRef.current.classList.remove('dark-mode-btn--active')
        }
    }, [darkMode])

    const toggleDarkMood = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light';

        })
    }

    return (
        <>
            <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMood}>
                <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
                <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
            </button>
        </>
    )
}
