import React, { useState } from "react";

import close from "../images/CloseIcon.svg";

import { Header } from "./Header.js";
import { Footer } from "./Footer.js";
import { Main } from "./Main.js";

import { PopupWithForm } from "./PopupWithForm.js";

import { ImagePopup } from "./ImagePopup.js";

import { apiObj } from "../utils/Api.js";

import { UserContext } from "../contexts/CurrentUserContext";
import { EditProfilePopup } from "./EditProfilePopup";
import { EditAvatarPopup } from "./EditAvatarPopup";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  //this is called when the component is mounted. we pass it [] to make sure it only gets call once when its mounted
  //otherwise it would be called every time it updates
  React.useEffect(() => {
    apiObj.getUserInfo().then((userInfoResponse) => {
      setCurrentUser(userInfoResponse);
    });
  }, []);

  const [selectedCard, setSelectedCard] = useState(null);

  /*state variables responsible for visibility of popups*/
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  function handleEditAvatarClick() {
    /*const modal = document.querySelector("#edit-avatar-modal");
    modal.classList.add("modal_open");*/
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    /*const modal = document.querySelector("#edit-profile-modal");
    modal.classList.add("modal_open");*/
    setIsEditProfilePopupOpen(true);
  }

  function handleEditPlaceClick() {
    /*const modal = document.querySelector("#add-card-modal");
    modal.classList.add("modal_open");*/
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setTimeout(() => {
      setSelectedCard(null);
    }, 500);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function handleUpdateUser(info) {
    console.log("user was updated in app.js");
    apiObj
      .patchUserInfo(info)
      .then((userInfoResponse) => {
        setCurrentUser(userInfoResponse);
      })
      .then(closeAllPopups());
  }

  return (
    <UserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <Header />
          <Main
            onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleEditPlaceClick}
            onEditAvatarClick={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />
          <Footer />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <PopupWithForm
            title="New Place"
            name="add-card"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          >
            {/*might need to mess with form name re:the brief and use add-card (the props.name) */}
            <form name="imagenameandlink" className="modal__form">
              <input
                className="modal__input-text"
                type="text"
                name="imagename"
                placeholder="Title"
                minLength="1"
                maxLength="30"
                id="imagename-input"
                required
              />
              <span className="modal__error imagename-input-error">
                error here
              </span>
              {/*This modal uses placeholder , but the other one uses value*/}
              <input
                className="modal__input-text"
                type="url"
                name="imagelink"
                placeholder="Image link"
                id="imagelink-input"
                required
              />
              {/*type=url is needed for validation- it checks to make sure user entered a url*/}
              <span className="modal__error imagelink-input-error">
                error here
              </span>
              {/*set input values to the same text as the default values on the page*/}
              <button type="submit" className="modal__submit-button">
                Create
              </button>
            </form>
          </PopupWithForm>

          <PopupWithForm
            title="Are you sure?"
            //fix the name and isOpen later - this is the confirmation popup for delete
            name=""
            isOpen={false}
            onClose={closeAllPopups}
          />
        </div>

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          isOpen={isImagePopupOpen}
        />

        {/*modal for the image popup*/}
        <div className="popup modal" id="image-popup">
          <div className="popup__content">
            <img className="popup__image" />
            <button type="button" className="modal__close-button">
              <img src={close} alt="X" />
            </button>
            <h2 className="popup__caption">insert caption here</h2>
          </div>
        </div>

        {/*modal for the delete button to ask if the user is sure*/}
        <div className="modal" id="delete-card-modal">
          <div className="modal__content">
            <button type="button" className="modal__close-button">
              <img src={close} alt="X" />
            </button>
            <h2 className="modal__title">Are you sure?</h2>
            <form name="delete" className="modal__form">
              {/*form is needed so that PopupWithForm class works with this html*/}
              <button type="submit" className="modal__submit-button">
                Yes
              </button>
            </form>
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
