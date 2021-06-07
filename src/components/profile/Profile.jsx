import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css'

const Profile = ({ data: { name, tag, location, avatar, stats: {followers, views, likes} } }) => (
    <div className={styles.profile}>
        <div className="description">
            <img
                src={avatar}
                alt="Аватар пользователя"
                className={styles.avatar}
            />
            <p className={styles.name}>{name}</p>
            <p className={styles.tag}>@{tag}</p>
            <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
            <li>
                <span className="label">stats</span>
                <span className="quantity">{followers}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">{views}</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity">{likes}</span>
            </li>
        </ul>
    </div>
);

export default Profile;

Profile.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.objectOf(PropTypes.number).isRequired,
    }).isRequired
};