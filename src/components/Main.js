import React, { useState, useEffect } from "react";
import avatar from "../images/Avatar.jpg";
import edit from "../images/Edit.svg";
import plus from "../images/Plus.svg";

import { apiObj } from "../utils/Api.js";

export function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
}) {
  /*state variables */
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  //componentDidMount() {
  React.useEffect(() => {
    console.log("mount3ed");
    apiObj.getUserInfo().then(() => {
      console.log("got the user info");
    });

    //use this code once we get cards working
    /* //Promise.all() takes multiple promises, and returns a single promise (an array of the results of the input promises)
//it rejects if ANY of the promises throw an error
//we use this to load the user info and get the initial cards
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userInfoResponse, cardsResponse]) => {
    //user info set up
    user.setAvatar(userInfoResponse.avatar);
    userId = userInfoResponse._id;
    user.setUserInfoTextOnly(userInfoResponse);
    //cards set up
    cardGridObject.setItems(cardsResponse);

    cardGridObject.renderItems();
  })
  .catch((err) => {
    console.log(err); // log the error to the console
  }); */
  }, []); //empty array tells it to only do once (when it is mounted)

  return (
    <main>
      <section className="profile">
        {/* profile is a grid */}
        <div className="profile__image">
          <img className="profile__avatar" src={avatar} alt="Avatar" />
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
          <h1 className="profile__info-name"></h1>
          <button
            type="button"
            className="profile__info-edit-button"
            id="profile-info-edit-button"
            onClick={onEditProfileClick}
          >
            <img src={edit} alt="Edit" />
          </button>

          <p className="profile__info-title"></p>
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
        {/*inserted via javascript*/}
      </section>
    </main>
  );
}
