import React from 'react';

function PopupWithImage(props){
	return(
		<div className={`modal modal_type_display-image" ${props.isOpen ? "popup_visible" : " "}`} onClick={props.onClose}>
		<div className="modal__container">
			<button className="modal__close link" onClick={props.onClose}></button>
			<figure>
				<img src="#" alt="#" className="modal__img" />
				<figcaption className="modal__caption"></figcaption>
			</figure>
		</div>
	</div>
	)
}

export default PopupWithImage;





/*

import Popup from "./Popup.js";

class PopupWithImage extends Popup {
	constructor(popupSelector) {
		super(popupSelector);
		this._card = popupSelector;
		this._viewImage = this._popupElement.querySelector(".modal__img");
		this._viewCaption = this._popupElement.querySelector(".modal__caption");
	}

	open({ name, link }) {


		this._viewImage.src = link;
		this._viewImage.alt = name;
		this._viewCaption.textContent = name;

		super.open();
	}
}

export default PopupWithImage;
*/