import close from "../images/CloseIcon.svg";
import trash from "../images/Trash.svg";
import heartDisabled from "../images/Trash.svg";

import { Header } from "./Header.js";
import { Footer } from "./Footer.js";
import { Main } from "./Main.js";
function App() {
  return (
    <>
      <div className="page__content">
        <Header />
        <Main />
        <Footer />
      </div>
      {/*End page content*/}

      <div className="modal" id="edit-profile-modal">
        <div className="modal__content">
          <button type="button" className="modal__close-button">
            <img src={close} alt="X" />
          </button>
          <h2 className="modal__title">Edit profile</h2>
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
        </div>
      </div>

      <div className="modal" id="add-card-modal">
        <div className="modal__content">
          <button type="button" className="modal__close-button">
            <img src={close} alt="X" />
          </button>
          <h2 className="modal__title">New Place</h2>
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
            <span className="modal__error imagename-input-error">
              error here
            </span>
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
            <span className="modal__error imagelink-input-error">
              error here
            </span>
            {/*set input values to the same text as the default values on the page*/}
            <button type="submit" className="modal__submit-button">
              Create
            </button>
          </form>
        </div>
      </div>

      {/*modal for the edit avatar pic*/}
      <div className="modal" id="edit-avatar-modal">
        <div className="modal__content">
          <button type="button" className="modal__close-button">
            <img src={close} alt="X" />
          </button>
          <h2 className="modal__title">Change profile picture</h2>
          <form name="avatarimage" className="modal__form">
            {/*This modal uses placeholder , but the other one uses value*/}
            <input
              className="modal__input-text"
              type="url"
              name="avatar"
              placeholder="Image link"
              id="avatar-link-input"
              required
            />
            {/*type=url is needed for validation- it checks to make sure user entered a url*/}
            <span className="modal__error avatar-link-input-error">
              error here
            </span>
            {/*set input values to the same text as the default values on the page*/}
            <button type="submit" className="modal__submit-button">
              Save
            </button>
          </form>
        </div>
      </div>

      {/*modal for the image popup*/}
      <div className="popup modal" id="image-popup">
        <div className="popup__content">
          <img className="popup__image" />
          <button type="button" className="modal__close-button">
            <img src={close} alt="X" />
          </button>
          <h2 className="popup__caption">insert caption here</h2>
        </div>
      </div>

      {/*modal for the delete button to ask if the user is sure*/}
      <div className="modal" id="delete-card-modal">
        <div className="modal__content">
          <button type="button" className="modal__close-button">
            <img src={close} alt="X" />
          </button>
          <h2 className="modal__title">Are you sure?</h2>
          <form name="delete" className="modal__form">
            {/*form is needed so that PopupWithForm class works with this html*/}
            <button type="submit" className="modal__submit-button">
              Yes
            </button>
          </form>
        </div>
      </div>

      {/*template MUST be before the <script>, or the script cannot acess the template*/}
      <template id="card-template">
        {/*javascript finds this template via the id using queryselector*/}
        <div className="element">
          <button type="button" className="element__trash">
            <img src={trash} alt="trash" className="element__trash-image" />
          </button>
          <div
            className="element__image"
            //style=""
            alt=" "
          ></div>
          <div className="element__rectangle">
            <h2 className="element__text"></h2>

            {/*div contains like button and number of likes*/}
            <button type="button" className="element__like">
              <img
                src={heartDisabled}
                alt="like"
                className="element__like-image"
              />
              <p className="element__like-text">0</p>
            </button>
          </div>
        </div>
      </template>
    </>
  );
}

export default App;
