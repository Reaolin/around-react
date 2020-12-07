import React from 'react';
import PopupWithForm from './PopupWithForm';


function DeleteCard(props){
return(
<PopupWithForm name="delete-card" title="Are you sure" buttonText="Yes!" isOpen={props.isOpen} onClose={props.onClose}>


</PopupWithForm>
)
}
export default DeleteCard;