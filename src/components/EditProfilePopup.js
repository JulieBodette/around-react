import { PopupWithForm } from "./PopupWithForm.js";

export function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title="Edit Profile"
      name="edit-profile"
      isOpen={isOpen}
      onClose={onClose}
    >
      {/*might need to mess with form name re:the brief and use edit-profile (the props.name) */}
      <form name="nameandtitle" className="modal__form">
        <input
          className="modal__input-text"
          type="text"
          name="name"
          // value="Jacques Cousteau"
          minLength="2"
          maxLength="40"
          id="name-input"
          placeholder="Name"
          required
        />
        <span className="modal__error name-input-error">error here</span>
        <input
          className="modal__input-text"
          type="text"
          name="title"
          //value="Explorer"
          minLength="2"
          maxLength="200"
          id="title-input"
          placeholder="About"
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
