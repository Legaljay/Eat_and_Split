import { useState } from "react";
import Button from "./Button";
import PropTypes from 'prop-types'

export default function AddFriendForm({onAddFriend}) {
    const [name, setName] = useState('')
    const [image, setImage] = useState('https://i.pravatar.cc/48')

    function handleUpdateFriend(e){
        e.preventDefault()
        if(!name || !image) return; //this is a guard clause to prevent from carrying out the rest of the info when we have falsy value
        const id =crypto.randomUUID();

        const newFriend = {
            name, 
            image: `${image}?=${id}`, 
            balance: 0,
            id: crypto.randomUUID(),
        }
        onAddFriend(newFriend)
        setName('')
        setImage('https://i.pravatar.cc/48')
    }
  return (
    
        <form className="form-add-friend" onSubmit={handleUpdateFriend}>
            
            <label>👫Friend name</label>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>

            <label>🌄 Image URL</label>
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)}/>

            <Button>Add</Button>
        </form>
    
  )
}

AddFriendForm.propTypes = {
    onAddFriend : PropTypes.func.isRequired
}
