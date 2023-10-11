import PropTypes from 'prop-types'
import Button from './Button'

export default function Friend({friend, selectedFriend, onSelection}) {
    const isSelected = selectedFriend?.id === friend.id
  return (
    <li className={isSelected ? 'selected': ''}>
        <img src={friend.image} alt={friend.name} />
        <h3>
            {friend.name}
        </h3>
        {
            friend.balance < 0 && (
                <p className="red">
                    You owe {friend.name} ${Math.abs(friend.balance)}
                </p>
            
            
        )}
        {
            friend.balance > 0 && (
                <p className="green">
                    {friend.name} owe you ${Math.abs(friend.balance)}
                </p>)
            
            
        }
        {
            friend.balance === 0 && (
                <p>
                    You and {friend.name} are even 
                </p>)
            
            
        }

        
        <Button setfunction={() => onSelection(friend)}>{isSelected? 'Close': 'Select'}</Button>
        </li>
  )
}

Friend.propTypes = {
    friend: PropTypes.object,
    onSelection: PropTypes.func.isRequired,
    selectedFriend: PropTypes.object
}


{/* <p>
            {/* {
                friend.balance < 0? 
                `You owe ${friend.name} $${Math.abs(friend.balance)}`
                : friend.balance > 0? 
                    `${friend.name} owes you` :  
                    `You and ${friend.name} are even`
             } *
            </p> */}