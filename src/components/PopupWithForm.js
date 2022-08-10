import close from "../images/CloseIcon.svg";

export function PopupWithForm({ title, name, isOpen, children }) {
  /*const modal = document.querySelector("#edit-avatar-modal");
    modal.classList.add("modal_open");*/
  return (
    /*modal for the edit avatar pic*/
    <div className={isOpen ? "modal modal_open" : "modal"} id={`${name}-modal`}>
      <div className="modal__content">
        <button type="button" className="modal__close-button">
          <img src={close} alt="X" />
        </button>
        <h2 className="modal__title">{title}</h2>
        {children}
      </div>
    </div>
  );
}
