import React from 'react';
import PopupWithForm from './PopupWithForm';


function AddCardPopup(props){
    return(

<PopupWithForm name="add-card" title="New Card" buttonText="Save" isOpen={props.isOpen} onClose={props.onClose}>
							<label className="modal__label">
								<input
									id="image-title"
									type="text"
									name="name"
									className="modal__input form__title-input"
									placeholder="title"
									minlength="1"
									maxlength="30"
									required
								/>
								<span id="image-title-error" className="modal__error"></span>
							</label>

							<label className="modal__label">
								<input
									id="image-url"
									type="url"
									name="link"
									className="modal__input form__url-input"
									placeholder="url"
									required
								/>
								<span id="image-url-error" className="modal__error"></span>
							</label>

            </PopupWithForm>

)
}
export default AddCardPopup;