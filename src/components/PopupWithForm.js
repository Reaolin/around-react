import React from "react";

function PopupWithForm(props) {
	return (
		<div
			className={`modal modal_type_${props.name} ${
				props.isOpen ? "modal_display" : " "
			}`}
		>
			<div className="modal__container">
				<div className="modal__content">
					<h3 className="modal__title">{`${props.title}`}</h3>
					<form
						action="#"
						className={`modal__form form form_type_${props.name}`}
						novalidate
					>
						{props.children}
						<button
							type="submit"
							className="modal__button form__save modal__button_disabled"
							disabled=""
						>
							{props.buttonText}
						</button>
					</form>
					<button
						className="modal__close link"
						onClick={props.onClose}
					></button>
				</div>
			</div>
		</div>
	);
}

export default PopupWithForm;

/*import Popup from "./Popup.js";
class PopupWithForm extends Popup {
	constructor({ popupSelector, handleSubmitForm }) {
		super(popupSelector);

		const formContainer = this._popupElement.querySelector(".modal__form");
		this._handleSubmitForm = handleSubmitForm;
		this._container = formContainer;
	}

	_getInputValues() {
		this._inputList = this._popupElement.querySelectorAll(".modal__input");
		this._inputValues = {};
		this._inputList.forEach(
			(input) => (this._inputValues[input.name] = input.value)
		);
		return this._inputValues;
	}

	setEventListeners() {
		this._container.addEventListener("submit", (e) => {
			e.preventDefault();
			this._handleSubmitForm(this._getInputValues());
		});
		super.setEventListeners();
	}
	close() {
		this._container.reset();

		super.close();
	}
	setSubmit(action){
		this._handleSubmitForm = action;
	}
}

export default PopupWithForm;

					<label className="modal__label">
						<input
							id="profile-name"
							type="text"
							name="name"
							className="modal__input form__name-input"
							value=""
							placeholder="name"
							minlength="2"
							maxlength="40"
							required
						/>
						<span id="profile-name-error" className="modal__error"></span>
					</label>

					<label className="modal__label">
						<input
							id="profile-occupation"
							type="text"
							name="occupation"
							className="modal__input form__job-input"
							value=""
							placeholder="occupation"
							minlength="2"
							maxlength="200"
							required
						/>
						<span
							id="profile-occupation-error"
							className="modal__error"
						></span>
					</label>
					<button
						type="submit"
						className="modal__button form__save modal__button_disabled"
						disabled=""
					>
						Save
					</button>*/
