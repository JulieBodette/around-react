import close from "../images/CloseIcon.svg";

export function PopupWithForm({ title, name, isOpen, onClose, children }) {
  /*const modal = document.querySelector("#edit-avatar-modal");
    modal.classList.add("modal_open");*/
  return (
    /*modal for the edit avatar pic*/
    <div className={isOpen ? "modal modal_open" : "modal"} id={`${name}-modal`}>
      <div className="modal__content">
        <button type="button" className="modal__close-button" onClick={onClose}>
          {/*set the onClick event to onClose- so that the X closes the modal panel */}
          <img src={close} alt="X" />
        </button>
        <h2 className="modal__title">{title}</h2>
        {children}
      </div>
    </div>
  );
}
