import { PopupWithForm } from "./PopupWithForm.js";

export function EditAvatarPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title="Update Profile Picture"
      name="edit-avatar"
      isOpen={isOpen}
      onClose={onClose}
    >
      <form name="avatarimage" className="modal__form">
        {/*form name was formerly avatarimage, will need to edit the code that
          references the form name now using edit-avatar also id=
          edit-avatar-modal
            This modal uses placeholder , but the other one
  uses value*/}
        <input
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
