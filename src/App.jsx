import { useState } from 'react'
import './App.css'
import FriendList from './components/FriendList';
import AddFriendForm from './components/AddFriendForm';
import Button from './components/Button';
import BillSplit from './components/BillSplit';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] =useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowFriend(){
    setShowAddFriend(() => !showAddFriend)
  }

  function handleAddFriend(friend){
    setFriends( (friends) => [...friends, friend] )
    setShowAddFriend(false)
  }

  function handleSelection(friend){
    setSelectedFriend((currselected) => currselected?.id === friend.id? null: friend)
    setShowAddFriend(false)
  }

  function handleSplitBill(value){
    setFriends((friends) => 
        friends.map((friend) => 
            friend.id === selectedFriend.id ? 
                {...friend, balance: friend.balance + value} : friend))
    setSelectedFriend(null);
  }

  return (
    <div className='app'>
      <div className="sidebar">
        <FriendList friends={friends} selectedFriend={selectedFriend} onSelection={handleSelection}/>
        {showAddFriend && (<AddFriendForm onAddFriend={handleAddFriend}/>)}
        <Button setfunction={handleShowFriend}>{showAddFriend? 'Close':'Add friend'}</Button>
      </div>
      {selectedFriend && <BillSplit selectedFriend={selectedFriend} onSplitBill={handleSplitBill} key={selectedFriend.id}/>}
    </div>
  )
}

export default App
