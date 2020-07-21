import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] =React.useState(null);
  
  function handleCardClick (card){
    setSelectedCard({
      name: card.name,
      link: card.link,
    });
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null)
  }

  return (
   <div className="root"> 
    <Header />
    <Main 
    onEditProfile ={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} 
    onCardClick = {handleCardClick}
    onClose={closeAllPopups}
    isEditAvatarPopupOpen={isEditAvatarPopupOpen} isAddPlacePopupOpen={isAddPlacePopupOpen} isEditProfilePopupOpen={isEditProfilePopupOpen} 
    card={selectedCard} />
    <Footer />
  
   </div>
  );
}

export default App;
