import trash from "../images/Trash.svg";
import heartDisabled from "../images/Heart_disabled.svg";

export function Card({ card, onCardClick }) {
  //we must send it the card that we clicked on so it knows what image to display
  function handleClick() {
    onCardClick(card);
    console.log(card);
  }
  return (
    <div id="card-template">
      {/*javascript finds this template via the id using queryselector might get rid of template tag???*/}
      <div className="element">
        <button type="button" className="element__trash">
          <img src={trash} alt="trash" className="element__trash-image" />
        </button>
        <div
          className="element__image"
          style={{ backgroundImage: `url(${card.link})` }}
          //style must be wrapped in curly braces because JSX
          //    this._cardImage.style = `background-image:url(${this._cardLink});`;
          //use .src here if image tag, I am using style and background image because it is button
          alt={card.name}
          onClick={handleClick}
        ></div>
        <div className="element__rectangle">
          <h2 className="element__text">{card.name}</h2>

          {/*div contains like button and number of likes*/}
          <button type="button" className="element__like">
            <img
              src={heartDisabled}
              alt="like"
              className="element__like-image"
            />
            <p className="element__like-text">{card.likes.length}</p>
          </button>
        </div>
      </div>
    </div>
  );
}
