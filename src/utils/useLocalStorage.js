import React from "react"

function getStorageValue(key, defaultValue) {
    const saved = localStorage.getItem(key)
    const initial = JSON.parse(saved)
    return initial || defaultValue
}

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = React.useState(() => {
        return getStorageValue(key, defaultValue)
    })

    React.useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}