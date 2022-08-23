import { PopupWithForm } from "./PopupWithForm.js";
import React, { useState } from "react";

export function EditProfilePopup({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
    console.log(name);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
    console.log(description);
  }

  return (
    <PopupWithForm
      title="Edit Profile"
      name="edit-profile"
      isOpen={isOpen}
      onClose={onClose}
    >
      {/*might need to mess with form name re:the brief and use edit-profile (the props.name) */}
      <form name="nameandtitle" className="modal__form">
        {/*This isnput is a controlled component- the value is set to the name state value*/}
        <input
          className="modal__input-text"
          type="text"
          name="name"
          value={name}
          minLength="2"
          maxLength="40"
          id="name-input"
          placeholder="Name"
          onChange={handleNameChange}
          required
        />
        <span className="modal__error name-input-error">error here</span>
        {/*This isnput is a controlled component- the value is set to the description state value*/}
        <input
          className="modal__input-text"
          type="text"
          name="title"
          value={description}
          minLength="2"
          maxLength="200"
          id="title-input"
          placeholder="About"
          onChange={handleDescriptionChange}
          required
        />
        <span className="modal__error title-input-error">error here</span>
        {/*set input values to the same text as the default values on the page*/}
        <button type="submit" className="modal__submit-button">
          Save
        </button>
      </form>
    </PopupWithForm>
  );
}
