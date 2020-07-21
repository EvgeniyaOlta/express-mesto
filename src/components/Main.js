import React from 'react';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Card from './Card';
import api from '../utils/api';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setIUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
    .then((userInfoData) => {
      setUserName(userInfoData.name);
      setIUserDescription(userInfoData.about)
      setUserAvatar(userInfoData.avatar);
    })
    .catch(() => {
      console.error('Что-то пошло не так.');
    });
    api.getInitialCards()
    .then(cardsInfoData => {
      Array.from(cardsInfoData)
      setCards(cardsInfoData);
    })
    .catch(() => {
      console.error('Что-то пошло не так.');
    });
  }, []);

  return (
    <main className="content">
    <section className="profile">
      <div className="profile__avatar-box">
        <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}></div>
        <button className="profile__avatar-edit-button" onClick={props.onEditAvatar}></button>
      </div>
      <div className="profile__info">
        <div className="profile__first-line"> 
          <p className="profile__name">{userName}</p>
          <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
        </div>
        <p className="profile__description">{userDescription}</p>
      </div>
      <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
    </section>

    <section className="cards">
      {cards.map(card =>
      <Card cardData ={card} onCardClick={props.onCardClick} key = {card._id}/>
      )}
    </section>

    <PopupWithForm name="profile" title="Редактировать профиль" isOpen={props.isEditProfilePopupOpen} onClose={props.onClose}>  
      <input id="name-input" type="text" className="popup__input" name="name" placeholder="Имя" pattern="[a-zA-Zа-яА-Я\s\-]+" required minLength="2" maxLength="40" /> 
      <span id="name-input-error" className="popup__input-error"></span>
      <input id="description-input" type="text" className="popup__input" name="description" placeholder="Описание" required minLength="2" maxLength="200" /> 
      <span id="description-input-error" className="popup__input-error"></span>
      <button type="submit" className="popup__save-button">Сохранить</button> 
    </PopupWithForm> 

    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={props.isEditAvatarPopupOpen} onClose={props.onClose}>
      <input id="avatar-input" type="url" className="popup__input" name="avatar" placeholder="Ссылка на фотографию" required /> 
      <span id="avatar-input-error" className="popup__input-error"></span>
      <button type="submit" className="popup__save-button">Сохранить</button> 
    </PopupWithForm>  

    <PopupWithForm name="newplace" title="Новое место" isOpen={props.isAddPlacePopupOpen} onClose={props.onClose}>
      <input id="place-input" type="text" className="popup__input" name="name" placeholder="Название" required minLength="1" maxLength="30" /> 
      <span id="place-input-error" className="popup__input-error"></span>
      <input id="link-input" type="url" className="popup__input" name="link" placeholder="Ссылка на картинку" required /> 
      <span id="link-input-error" className="popup__input-error"></span>
      <button type="submit" className="popup__save-button">Создать</button> 
    </PopupWithForm> 
    
    <PopupWithForm name="removeCard" title="Вы уверенны?">
      <button type="submit" className="popup__save-button popup__save-button_active popup__save-button_for-remove">Да</button>
    </PopupWithForm> 
    
    <ImagePopup card={props.card} onClose={props.onClose} />

  </main>
  );
}

export default Main;
