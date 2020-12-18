import React from "react";
import api from "../utils/Api";
import Card from "./Card";
import { UserContext } from "../contexts/CurrentUserContext";

function Main(props) {
	const currentUser = React.useContext(UserContext);

	const [userCards, setUserCards] = React.useState([]);

	//Calls the initial cards from the API --don't forget the empty array
	React.useEffect(() => {
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
						owner_id: card.owner._id,
					}))
				);
			})
			.catch((err) => console.log(err));
	}, []);

	function handleCardLike(card) {
		// Check one more time if this card was already liked
		const isLiked = card.likes.some((i) => i._id === currentUser._id);

		// Send a request to the API and getting the updated card data
		api.addLikes(card._id, !isLiked).then((newCard) => {
			// Create a new array based on the existing one and putting a new card into it
			const newCards = card.map((c) => (c._id === card._id ? newCard : c));
			// Update the state
			setUserCards(newCards);
		});
	}

	return (
		<main className="main">
			<section className="profile">
				<div className="profile__avatar-container">
					<img
						className="profile__avatar"
						src={currentUser.avatar}
						alt="profile"
					/>
					<button
						className="profile__avatar_edit-btn"
						onClick={props.handleEditAvatarClick}
					></button>
				</div>
				<div className="profile-info">
					<div className="profile-info__text">
						<h1 className="profile-info__title">{currentUser.name}</h1>
						<p className="profile-info__sub-title">{currentUser.about}</p>
					</div>
					<button
						className="profile__edit-btn link"
						onClick={props.handleEditProfileClick}
					></button>
				</div>

				<button
					className="profile__add-btn link"
					onClick={props.handleAddPlaceClick}
				></button>
			</section>
			<section className="photo-container">
				<ul className="photo-grid">
					{userCards.map((card) => (
						<Card
							key={card._id}
							src={card.link}
							title={card.name}
							likes={card.likes}
							owner={card.owner}
							owner_id={card.owner_id}
							onCardClick={() => props.handleCardClick(card.link, card.name)}
							onDeleteClick={() => props.handleDeleteClick()}
							onLikeClick={(card) => props.handleCardLike(card)}
						/>
					))}
				</ul>
			</section>
		</main>
	);
}

export default Main;
