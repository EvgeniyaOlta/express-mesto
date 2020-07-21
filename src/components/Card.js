import React from 'react';

function Card(props) {
  function handleClick () {
    props.onCardClick({
      name: props.cardData.name,
      link: props.cardData.link
    });
  }

  return (
    <article className="card">
        <button className="card__remove-button" type="button"></button>
        <div className="card__image" style={{ backgroundImage: `url(${props.cardData.link})` }} onClick={handleClick}></div>
        <p className="card__name">{props.cardData.name}</p>
        <div className="card__like-block">
          <button className="card__like-button" type="button"></button>
          <p className="card__like-amount">{props.cardData.likes.length}</p>
        </div>
      </article>
  );
}

export default Card;