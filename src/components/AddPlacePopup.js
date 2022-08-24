import { PopupWithForm } from "./PopupWithForm.js";
export function AddPlacePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title="New Place"
      name="add-card"
      isOpen={isOpen}
      onClose={onClose}
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
        <span className="modal__error imagename-input-error">error here</span>
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
        <span className="modal__error imagelink-input-error">error here</span>
        {/*set input values to the same text as the default values on the page*/}
        <button type="submit" className="modal__submit-button">
          Create
        </button>
      </form>
    </PopupWithForm>
  );
}
