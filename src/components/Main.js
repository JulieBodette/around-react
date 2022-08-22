import React, { useState, useEffect } from "react";
import avatar from "../images/Avatar.jpg";
import edit from "../images/Edit.svg";
import plus from "../images/Plus.svg";

import { apiObj } from "../utils/Api.js";

import { Card } from "./Card.js";

import { UserContext } from "../contexts/CurrentUserContext";

export function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
}) {
  const currentUser = React.useContext(UserContext);

  /*state variables */
  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    //load the initial cards from the server
    apiObj
      .getInitialCards()
      .then((cardsResponse) => {
        setCards(cardsResponse);
      })
      .catch((err) => {
        console.log(err); // log the error to the console
      });
  }, []); //empty array tells it to only do once (when it is mounted)

  function handleCardLike(card) {
    // Check one more time if this card was already liked
    //The some() method tests whether at least one element in the array passes the test
    //in this case, if 1 of the likes is from the current user, we need to make the heart dark
    const isLiked = card.likes.some((user) => user._id === currentUser._id);

    console.log("you liked the card", isLiked);
    // Send a request to the API and getting the updated card data
    //if !isLiked- if the card was not liked before and now the user wants to like it
    if (!isLiked) {
      console.log("you like the card");
      apiObj.likeCard(card._id).then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      });
    }
    //if isLiked - if the user already liked it and is now unliking it
    else {
      console.log("you unlike the card");
      apiObj.unlikeCard(card._id).then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      });
    }
  }

  function handleCardDelete(card) {
    console.log("u deleted the card");
    apiObj
      .deleteCard(card._id)
      .then(() => {
        //filter will only include cards that pass the test- in this case, it includes all cards except the deletedCard
        setCards((state) =>
          state.filter((CurrentCard) => CurrentCard._id !== card._id)
        );
      })
      .then(console.log(cards));
  }

  return (
    <main>
      <section className="profile">
        {/* profile is a grid */}
        <div className="profile__image">
          <img
            className="profile__avatar"
            src={currentUser && currentUser.avatar}
            alt="Avatar"
          />
          <button
            className="profile__icon"
            id="edit-avatar-button"
            onClick={onEditAvatarClick}
          >
            {/*either set the background image of the button or do an <img> here */}
          </button>
        </div>
        <div className="profile__info">
          {/*cannot be span (w3c error from having <p> tag) */}
          <h1 className="profile__info-name">
            {currentUser && currentUser.name}
          </h1>
          <button
            type="button"
            className="profile__info-edit-button"
            id="profile-info-edit-button"
            onClick={onEditProfileClick}
          >
            <img src={edit} alt="Edit" />
          </button>

          <p className="profile__info-title">
            {currentUser && currentUser.about}
          </p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          id="profile-add-button"
          onClick={onAddPlaceClick}
        >
          <img src={plus} alt="Add" />
        </button>
      </section>
      <section className="grid">
        {/*Elements section. This is a grid of pictures*/}
        {/*array of cards via cards state variable goes here*/}
        {cards.map((item) => (
          <Card
            key={item._id}
            card={item}
            onCardClick={onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </section>
    </main>
  );
}
