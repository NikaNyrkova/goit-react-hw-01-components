import React from 'react';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from "./data/friends.json";
import transactions from "./data/transaction.json";

import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendsList from "./components/friendList/FriendList";
import TransactionHistory from "./components/transaction/TransactionHistory";

function App() {
    return (
        <div className="App">
            <h1>Home work 1</h1>
            <Profile data={user} />
            <Statistics title="Upload stats" stats={statisticalData} />
            <Statistics stats={statisticalData} />
            <FriendsList friends={friends} />
            <TransactionHistory transactions={transactions} />
        </div>
    );
}

export default App
