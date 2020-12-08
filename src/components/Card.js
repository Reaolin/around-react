import React from "react";
import TrashLid from "../images/Trashcan_lid.svg";
import TrashBottom from "../images/trashcan_bottom.svg";

function Card(props) {
	function handleClick() {
		props.onCardClick(props.card);
	}

	function deleteClick() {
		props.onDeleteClick(props.card);
	}

	return (
		<li className="card">
			<img
				className="card__img"
				src={props.src}
				onClick={handleClick}
				alt={props.title}
			/>
			<button className="card__remove-btn" onClick={deleteClick}>
				<img src={TrashLid} alt="Trashcan lid" className="card__trash-top" />
				<img
					src={TrashBottom}
					alt="trashcan bottom"
					className="card__trash-bottom"
				/>
			</button>
			<div className="card__info">
				<h2 className="card__title">{props.title}</h2>
				<div className="card__likes">
					<button className="card__heart"></button>
					<p className="card__like-total">{props.likes}</p>
				</div>
			</div>
		</li>
	);
}
export default Card;
