import avatar from "../images/Avatar.jpg";
import edit from "../images/Edit.svg";
import plus from "../images/Plus.svg";

function handleEditAvatarClick() {
  console.log("edit avatar clicked");
  const modal = document.querySelector("#edit-avatar-modal");
  modal.classList.add("modal_open");
}

function handleEditProfileClick() {
  console.log("edit profile clicked");
  const modal = document.querySelector("#edit-profile-modal");
  modal.classList.add("modal_open");
}

function handleEditPlaceClick() {
  console.log("edit place clicked");
  const modal = document.querySelector("#add-card-modal");
  modal.classList.add("modal_open");
}

export function Main() {
  return (
    <main>
      <section className="profile">
        {/* profile is a grid */}
        <div className="profile__image">
          <img className="profile__avatar" src={avatar} alt="Avatar" />
          <button
            className="profile__icon"
            id="edit-avatar-button"
            onClick={handleEditAvatarClick}
          >
            {/*either set the background image of the button or do an <img> here */}
          </button>
        </div>
        <div className="profile__info">
          {/*cannot be span (w3c error from having <p> tag) */}
          <h1 className="profile__info-name"></h1>
          <button
            type="button"
            className="profile__info-edit-button"
            id="profile-info-edit-button"
            onClick={handleEditProfileClick}
          >
            <img src={edit} alt="Edit" />
          </button>

          <p className="profile__info-title"></p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          id="profile-add-button"
          onClick={handleEditPlaceClick}
        >
          <img src={plus} alt="Add" />
        </button>
      </section>
      <section className="grid">
        {/*Elements section. This is a grid of pictures*/}
        {/*inserted via javascript*/}
      </section>
    </main>
  );
}
