import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import AddPlacePopup from "./AddPlacePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "./ImagePopup";
//import DeleteCard from "./DeleteCard";
import api from "../utils/test";
import { UserContext } from "../contexts/CurrentUserContext";


function App() {
	//create 'state' variables
	const [cards, setUserCards] = React.useState([]);
	const [isEditAvatarOpen, setIsEditAvatarOpen] = React.useState(false);
	const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
	const [isAddPlaceOpen, setIsAddPlaceOpen] = React.useState(false);
	//const [isDeleteOpen, setIsDeleteOpen] = React.useState(false);
	const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
	const [cardLink, setCardLink] = React.useState("");
	const [cardTitle, setCardTitle] = React.useState("");
	const [currentUser, setCurrentUser] = React.useState("");

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

	//function handleDeleteClick() {
	//	setIsDeleteOpen(true);
	//}

	//creates the handler for opening the image
	function handleCardClick(link, title) {
		setIsImagePopupOpen(true);
		setCardLink(link);
		setCardTitle(title);
	}

	//set state to false to close popups
	function handlePopupClose() {
		setIsAddPlaceOpen(false);
		setIsEditAvatarOpen(false);
		setIsEditProfileOpen(false);
		setIsImagePopupOpen(false);
		//	setIsDeleteOpen(false);
	}

	//Calls the users info
	React.useEffect(() => {
		api
			.getUserInfo()
			.then((res) => {
				console.log(res);
				setCurrentUser(res);
			})
			.catch((err) => console.log(err));

		api
			.getInitialCards()
			.then((res) => {
				console.log(res);
				setUserCards(
					res.map((card) => ({
						name: card.name,
						link: card.link,
						likes: card.likes,
						_id: card._id,
						owner: card.owner,
					}))
				);
			})
			.catch((err) => console.log(err));
	}, []);

	function handleCardLike(card) {
		// Check one more time if this card was already liked

		const isLiked = card.likes.some((i) => i._id === currentUser._id);
		let res;

		if (isLiked === false) {
			res = api.addLikes(card._id);
		} else {
			res = api.removeLikes(card._id);
		}
		res
			.then((newCard) => {
				// Create a new array based on the existing one and putting a new card into it
				const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
				// Update the state
				setUserCards(newCards);
			})
			.catch((err) => console.log(err));
	}
	function handleCardDelete(card) {
		api
			.removeCard(card._id)
			.then(() => {
				const listCopy = cards.filter((c) => c._id !== card._id);
				setUserCards(listCopy);
			})
			.catch((err) => console.log(err));
	}

	function handleAddPlace({ name, link }) {
		api
			.addCard({ name, link })
			.then((newCard) => {
				setUserCards([newCard, ...cards]);
			})
			.then(() => setIsAddPlaceOpen(false))
			.catch((err) => console.log(err));
	}

	function handleUpdateUser({ name, about }) {
		api
			.setUserInfo({ name, about })
			.then((res) => {
				setCurrentUser(res);
			})
			.then(() => setIsEditProfileOpen(false))
			.catch((err) => console.log(err));
	}

	function handleUpdateAvatar(avatar) {
		api
			.setAvatar({ avatar })
			.then((res) => {
				setCurrentUser(res);
			})
			.then(() => setIsEditAvatarOpen(false))
			.catch((err) => console.log(err));
	}

	return (
		<div>
			<UserContext.Provider value={currentUser}>
				<Header />
				<Main
					cards={cards}
					handleEditAvatarClick={handleEditAvatarClick}
					handleEditProfileClick={handleEditProfileClick}
					handleAddPlaceClick={handleAddPlaceClick}
					//handleDeleteClick={handleDeleteClick}
					handleCardClick={handleCardClick}
					onCardClick={(data) => {
						handleCardClick(data);
					}}
					onDeleteClick={(card) => {
						handleCardDelete(card);
					}}
					onLikeClick={(card) => {
						handleCardLike(card);
					}}
					handleCardLike={handleCardLike}
					handleCardDelete={handleCardDelete}
				/>
				<Footer />
				{/*Add Card Component*/}
				<AddPlacePopup
					isOpen={isAddPlaceOpen}
					onClose={handlePopupClose}
					handleAddPlace={handleAddPlace}
				/>
				{/*Edit Avatar Component*/}
				<EditAvatarPopup
					isOpen={isEditAvatarOpen}
					onClose={handlePopupClose}
					onUpdateAvatar={handleUpdateAvatar}
				/>
				{/*Edit Profile Component*/}
				<EditProfilePopup
					isOpen={isEditProfileOpen}
					onClose={handlePopupClose}
					onProfileUpdate={handleUpdateUser}
				/>
				{/*Card Popup*/}
				<ImagePopup
					isOpen={isImagePopupOpen}
					onClose={handlePopupClose}
					title={cardTitle}
					link={cardLink}
				/>
				{/*Delete Popup*/}
				{/*<DeleteCard isOpen={isDeleteOpen} onClose={handlePopupClose} onDeleteCard={handleCardDelete}/>*/}
			</UserContext.Provider>
		</div>
	);
}

export default App;
