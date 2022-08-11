import close from "../images/CloseIcon.svg";

export function ImagePopup() {
  return (
    /*modal for the image popup*/
    <div className="popup modal" id="image-popup">
      <div className="popup__content">
        <img className="popup__image" />
        <button type="button" className="modal__close-button">
          <img src={close} alt="X" />
        </button>
        <h2 className="popup__caption">insert caption here</h2>
      </div>
    </div>
  );
}
