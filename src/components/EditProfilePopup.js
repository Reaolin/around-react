import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
	return (
		<PopupWithForm
			name="edit-profile"
			title="Edit profile"
			buttonText="Save"
			isOpen={props.isOpen}
			onClose={props.onClose}
		>
			<label className="modal__label">
				<input
					id="profile-name"
					type="text"
					name="name"
					className="modal__input form__name-input"
					value=""
					placeholder="name"
					minLength="2"
					maxLength="40"
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
					minLength="2"
					maxLength="200"
					required
				/>
				<span id="profile-occupation-error" className="modal__error"></span>
			</label>
		</PopupWithForm>
	);
}
export default EditProfilePopup;
