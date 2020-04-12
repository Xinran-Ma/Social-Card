import React from 'react'
import styles from './index.module.scss'

import MessageLogo from '../MessageLogo'

const SingleCard = () => {
    return (
        <div className={styles.single_card}>
            <div className={styles.left_section}>
                <MessageLogo />
            </div>
            <div className={styles.right_section}></div>
        </div>
    )
}

export default SingleCard;