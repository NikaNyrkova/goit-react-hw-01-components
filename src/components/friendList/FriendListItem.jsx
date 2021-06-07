import React from 'react';
import styles from './FriendListItem.module.css'

const FriendListItem = ({ id, name, avatar, isOnline }) => (
    <li className={styles.item} key={id}>
        {isOnline
            ? <span className={styles.status_online}>{isOnline}</span>
            : <span className={styles.status_offline}>{isOnline}</span>
        }        
        <img className={styles.avatar} src={avatar} alt="" width="48" />
        <p className={styles.name}>{name}</p>
    </li>
);

export default FriendListItem;
