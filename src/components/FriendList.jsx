import PropTypes from 'prop-types'
import Friend from './Friend'

export default function FriendList({friends, selectedFriend, onSelection}) {
  return (
    <ul>
        {
            friends.map((friend) => 
                (
                <Friend key={friend.id} friend={friend} selectedFriend={selectedFriend} onSelection={onSelection}/>
                )
            )
        }
    </ul>
  )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(Object),
    onSelection: PropTypes.func.isRequired,
    selectedFriend: PropTypes.object
}