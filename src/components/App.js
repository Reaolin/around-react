import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import AddCardPopup from './CardPopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

function App() {

//create 'state' variables	
	const [isEditAvatarOpen, setIsEditAvatarOpen] = React.useState(false);
	const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
	const [isAddPlaceOpen, setIsAddPlaceOpen] = React.useState(false);
	

//creates handlers for opening popups
	function handleEditAvatarClick() {
		setIsEditAvatarOpen(true);
	}
	function handleEditProfileClick() {
		setIsEditProfileOpen(true);
	}
	function handleAddPlaceClick() {
		setIsAddPlaceOpen(true);
	}

//set state to false to close popups
	function handlePopupClose(){
		setIsAddPlaceOpen(false);
		setIsEditAvatarOpen(false);
		setIsEditProfileOpen(false);
	}

	return (
		<body className="page">
			<Header />
			<Main
				handleEditAvatarClick={handleEditAvatarClick}
				handleEditProfileClick={handleEditProfileClick}
				handleAddPlaceClick={handleAddPlaceClick}
			/>
			<Footer />
		{/*Add Card Component*/}
			<AddCardPopup isOpen={isAddPlaceOpen} onClose={handlePopupClose} />
		{/*Edit Avatar Component*/}	
			<EditAvatarPopup isOpen={isEditAvatarOpen} onClose={handlePopupClose} />
		{/*Edit Profile Component*/}	
			<EditProfilePopup isOpen={isEditProfileOpen} onClose={handlePopupClose} />
			
			<div className="modal modal_type_delete-card">
				<div className="modal__container">
					<div className="modal__content">
						<h3 className="modal__title">Are you sure?</h3>
						<form action="#" className="modal__form form form_type_delete-card">
							<button type="submit" className="modal__button form__save">
								Yes!
							</button>
						</form>
						<button className="modal__close link"></button>
					</div>
				</div>
			</div>

			<template className="card-template">
				<li className="card">
					<img className="card__img" />
					<button className="card__remove-btn">
						<img
							src="./images/Trashcan_lid.svg"
							alt="Trashcan lid"
							className="card__trash-top"
						/>
						<img
							src="./images/trashcan_bottom.svg"
							alt="trashcan bottom"
							className="card__trash-bottom"
						/>
					</button>
					<div className="card__info">
						<h2 className="card__title"></h2>
						<div className="card__likes">
							<button className="card__heart"></button>
							<p className="card__like-total"></p>
						</div>
					</div>
				</li>
			</template>
		</body>
	);
}

export default App;
