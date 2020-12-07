import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
	const [userName, setUserName] = React.useState("");
	const [userDescription, setUserDescription] = React.useState("");
	const [userAvatar, setUserAvatar] = React.useState("");
	const [userCards, setUserCards] = React.useState([]);

	React.useEffect(() => {
		api
			.getUserInfo()
			.then((res) => {
				console.log(res);
				setUserName(res);
				setUserDescription(res);
				setUserAvatar(res);
			})
			.catch((err) => console.log(err));
	}, []);

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
					}))
				);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<main className="main">
			<section className="profile">
				<div className="profile__avatar-container">
					<img
						className="profile__avatar"
						src={userAvatar.avatar}
						alt="profile"
					/>
					<button
						className="profile__avatar_edit-btn"
						onClick={props.handleEditAvatarClick}
					></button>
				</div>
				<div className="profile-info">
					<div className="profile-info__text">
						<h1 className="profile-info__title">{userName.name}</h1>
						<p className="profile-info__sub-title">{userDescription.about}</p>
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
				
            {userCards.map((card) =>
              
              <Card key={card._id} src={card.link} title={card.name} likes={card.likes.length} onCardClick={() => props.handleCardClick(card.link, card.name)} onDeleteClick={() => props.handleDeleteClick()}/>
            
            )}	
				</ul>
			</section>
			

		</main>
	);
}

export default Main;
