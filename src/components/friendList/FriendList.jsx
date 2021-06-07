import React from 'react';
import PropTypes from 'prop-types';

import FriendsListItem from "./FriendListItem";

const FriendList = ({friends}) => (
    <ul className="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => (
            <FriendsListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                id={id}
            />
        ))}       
    </ul>
)

export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    })).isRequired
};