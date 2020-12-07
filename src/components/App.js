import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import AddCardPopup from './CardPopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import PopupWithImage from './PopupWithImage';
import DeleteCard from './DeleteCard';

function App() {

//create 'state' variables	
	const [isEditAvatarOpen, setIsEditAvatarOpen] = React.useState(false);
	const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
	const [isAddPlaceOpen, setIsAddPlaceOpen] = React.useState(false);
	const [isDeleteOpen, setIsDeleteOpen] = React.useState(false);
	const [isImagePopupOpen, setIsImagePopupOpen] =React.useState(false);
	const [cardLink, setCardLink] =React.useState("");
	const [cardTitle, setCardTitle] =React.useState("");
	

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

	function handleDeleteClick(){
		setIsDeleteOpen(true);
	}
	function handleCardClick(link, title){
		setIsImagePopupOpen(true);
		setCardLink(link);
		setCardTitle(title);
	}

//set state to false to close popups
	function handlePopupClose(){
		setIsAddPlaceOpen(false);
		setIsEditAvatarOpen(false);
		setIsEditProfileOpen(false);
		setIsImagePopupOpen(false);
		setIsDeleteOpen(false);
	}

	return (
		<body>
			<Header />
			<Main
				handleEditAvatarClick={handleEditAvatarClick}
				handleEditProfileClick={handleEditProfileClick}
				handleAddPlaceClick={handleAddPlaceClick}
				handleDeleteClick={handleDeleteClick}
				handleCardClick={handleCardClick}
				onCardClick={(data) => { handleCardClick(data) }}
				onDeleteClick={() => {handleDeleteClick()}}
			/>
			<Footer />
		{/*Add Card Component*/}
			<AddCardPopup isOpen={isAddPlaceOpen} onClose={handlePopupClose} />
		{/*Edit Avatar Component*/}	
			<EditAvatarPopup isOpen={isEditAvatarOpen} onClose={handlePopupClose} />
		{/*Edit Profile Component*/}	
			<EditProfilePopup isOpen={isEditProfileOpen} onClose={handlePopupClose} />
			{/*Card Popup*/}
			<PopupWithImage isOpen={isImagePopupOpen} onClose={handlePopupClose} title={cardTitle} link={cardLink}/>
			{/*Delete Popup*/}
			<DeleteCard isOpen={isDeleteOpen} onClose={handlePopupClose}/>
			
			
		</body>
	);
}

export default App;


