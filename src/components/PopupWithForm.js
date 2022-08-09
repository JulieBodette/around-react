import close from "../images/CloseIcon.svg";

export function PopupWithForm({ title, name }) {
  return (
    /*modal for the edit avatar pic*/
    <div className="modal" id={`{$props.name}-modal`}>
      <div className="modal__content">
        <button type="button" className="modal__close-button">
          <img src={close} alt="X" />
        </button>
        <h2 className="modal__title">{title}</h2>
        <form name="avatarimage" className="modal__form">
          /*form name was formerly avatarimage, will need to edit the code that
          references the form name now using edit-avatar also id=
          edit-avatar-modal*/ /*This modal uses placeholder , but the other one
          uses value*/
          <input
            className="modal__input-text"
            type="url"
            name="avatar"
            placeholder="Image link"
            id="avatar-link-input"
            required
          />
          /*type=url is needed for validation- it checks to make sure user
          entered a url*/
          <span className="modal__error avatar-link-input-error">
            error here
          </span>
          /*set input values to the same text as the default values on the
          page*/
          <button type="submit" className="modal__submit-button">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
