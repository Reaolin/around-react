import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
	return (
		<PopupWithForm
			name="edit-avatar"
			title="Change profile picture"
			buttonText="Save"
			isOpen={props.isOpen}
			onClose={props.onClose}
		>
			<label className="modal__label">
				<input
					id="avatar-url"
					type="url"
					name="avatar"
					className="modal__input form__url-input"
					value=""
					placeholder="avatar url"
					minlength="2"
					required
				/>
				<span id="avatar-url-error" className="modal__error">
					Please enter a url.
				</span>
			</label>
		</PopupWithForm>
	);
}
export default EditAvatarPopup;
