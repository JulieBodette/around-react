import { PopupWithForm } from "./PopupWithForm.js";
import React from "react";
export function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = React.useRef();
  function handleSubmit(e) {
    // Prevent the browser from navigating to the form address
    e.preventDefault();
    console.log("submitted");
    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }
  return (
    <PopupWithForm
      title="Update Profile Picture"
      name="edit-avatar"
      isOpen={isOpen}
      onClose={onClose}
    >
      <form name="avatarimage" className="modal__form" onSubmit={handleSubmit}>
        {/*This modal uses placeholder , but the other one
  uses value*/}
        <input
          ref={inputRef}
          className="modal__input-text"
          type="url"
          name="avatar"
          placeholder="Image link"
          id="avatar-link-input"
          required
        />
        {/*type=url is needed for validation- it checks to make sure user
            entered a url*/}
        <span className="modal__error avatar-link-input-error">error here</span>
        {/*set input values to the same text as the default values on the
            page*/}
        <button type="submit" className="modal__submit-button">
          Save
        </button>
      </form>
    </PopupWithForm>
  );
}
