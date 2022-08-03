import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cn from 'classnames'


import styles from './index.module.scss'
import {themeAction, themeReducer} from "../../redux";

const Theme = ({ className }) => {
    let theme = useSelector((state) => state.themeReducer)
    const dispatch = useDispatch()

    React.useEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem('theme', theme)
    }, [ theme ])

    const handleChange = () => {
        const next = theme === 'dark' ? 'light' : 'dark'
        dispatch(themeAction.set(next))
    }

    return (
        <div
            className={cn(
                className,
                styles.root,
                theme === 'dark' ? styles.dark : styles.light)}
            onClick={handleChange}
        />
    )
}

export {Theme}