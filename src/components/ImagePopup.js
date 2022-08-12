import close from "../images/CloseIcon.svg";

export function ImagePopup({ card, onClose }) {
  return (
    /*modal for the image popup*/
    <div className={card && "popup modal modal_open"} id="image-popup">
      <div className="popup__content">
        <img className="popup__image" src={card.link} />
        {/*src={`url(${card.link})`}*/}
        <button type="button" className="modal__close-button" onClick={onClose}>
          <img src={close} alt="X" />
        </button>
        <h2 className="popup__caption">insert caption here</h2>
      </div>
    </div>
  );
}
