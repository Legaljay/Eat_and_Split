import PropTypes from 'prop-types'
import { useState } from 'react'
import Button from './Button'

export default function BillSplit({selectedFriend, onSplitBill}) {
    const [bill,setBill] = useState('')
    const [paidByUser, setPaidByUser] = useState('')
    const paidByFriend = bill? bill - paidByUser: '';
    const [whoIsPaying, setWhoIsPaying] = useState('user')

    function handleSubmit(e){
        e.preventDefault();

        if(!bill || !paidByUser) return;
        onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser ) //remember that negative numbers in the balance are owed by you, so by the user, and positive numbers means that your friend is owing you
        //so if you are paying, then they will be owing you their part. so therefore this is a positive number (paidByFriend)
    }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split a bill with {selectedFriend.name}</h2>

        <label>🌄 Bill value</label>
        <input type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))}/>

        <label>🤑Your expenses</label>
        <input type="text" value={paidByUser} onChange={(e) => setPaidByUser(
                Number(e.target.value) > bill ? 
                    paidByUser : Number(e.target.value) 
                )
            }
        />

        <label>🌄 {selectedFriend.name}&apos;s expenses</label>
        <input type="text" value={paidByFriend} disabled/>

        <label>👫Who is paying the bill</label>
        <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
        </select>
        <Button>Split bill</Button>
    </form>
  )
}

BillSplit.propTypes = {
    selectedFriend : PropTypes.object,
    onSplitBill : PropTypes.func.isRequired,
}