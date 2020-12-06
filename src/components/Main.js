import React from 'react';




function Main(props){
    return(
        <main className="main">
			<section className="profile">
				<div className="profile__avatar-container">
					<img
						className="profile__avatar"
						src={`../images/jc.png`}
						alt="profile"
					/>
					<button className="profile__avatar_edit-btn"  onClick={props.handleEditAvatarClick}></button>
				</div>
				<div className="profile-info">
					<div className="profile-info__text">
						<h1 className="profile-info__title">Jacques Cousteau</h1>
						<p className="profile-info__sub-title">Explorer</p>
					</div>
					<button className="profile__edit-btn link" onClick={props.handleEditProfileClick}></button>
				</div>

				<button className="profile__add-btn link" onClick={props.handleAddPlaceClick}></button>
			</section>
			<section className="photo-container">
				<ul className="photo-grid"></ul>
			</section>


			
		</main>
    )
}

export default Main;