(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),i=(a(14),a(8)),s=a(2),l=a(1),u=a(5),p=a.n(u);var m=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{className:"header__logo",src:p.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto."}))};var d=function(e){return r.a.createElement("section",{className:"popup popup-with-form popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_opened")},r.a.createElement("form",{name:"".concat(e.name),className:"popup__container popup__container_for-form popup__container_type_".concat(e.name),noValidate:!0},r.a.createElement("button",{className:"popup__close-button",type:"button",onClick:e.onClose}),r.a.createElement("p",{className:"popup__title"},e.title),r.a.createElement("fieldset",{className:"popup__list"},e.children)))};var _=function(e){return r.a.createElement("section",{className:"popup popup_image ".concat(null!==e.card&&"popup_opened")},r.a.createElement("div",{className:"popup__container"},r.a.createElement("button",{className:"popup__close-button",type:"button",onClick:e.onClose}),r.a.createElement("div",{className:"popup__image",style:{backgroundImage:"url(".concat(null!==e.card&&e.card.link,")")}}," "),r.a.createElement("p",{className:"popup__title popup__title_for-image"},null!==e.card&&e.card.name)))},f=r.a.createContext();var h=function(e){var t=r.a.useState([]),a=Object(l.a)(t,2),n=a[0],o=a[1],c=r.a.useState([]),i=Object(l.a)(c,2),s=i[0],u=i[1],p=r.a.useContext(f);return r.a.useEffect(function(){o(null!==p&&p.name),u(null!==p&&p.about)},[p]),r.a.createElement(d,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose},r.a.createElement("input",{id:"name-input",type:"text",className:"popup__input",name:"name",placeholder:"\u0418\u043c\u044f",pattern:"[a-zA-Z\u0430-\u044f\u0410-\u042f\\s\\-]+",required:!0,minLength:"2",maxLength:"40",value:n,onChange:function(e){o(e.target.value)}}),r.a.createElement("span",{id:"name-input-error",className:"popup__input-error"}),r.a.createElement("input",{id:"description-input",type:"text",className:"popup__input",name:"description",placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"200",value:s,onChange:function(e){u(e.target.value)}}),r.a.createElement("span",{id:"description-input-error",className:"popup__input-error"}),r.a.createElement("button",{type:"submit",className:"popup__save-button popup__save-button_active ",onClick:function(t){t.preventDefault(),e.onUpdateUser(n,s)}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))};var v=function(e){var t=r.a.useRef();return r.a.createElement(d,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose},r.a.createElement("input",{id:"avatar-input",type:"url",className:"popup__input",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e",ref:t,required:!0}),r.a.createElement("span",{id:"avatar-input-error",className:"popup__input-error"}),r.a.createElement("button",{type:"submit",className:"popup__save-button popup__save-button_active",onClick:function(a){a.preventDefault(),e.onUpdateAvatar(t.current.value)}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))};var b=function(e){var t=r.a.useRef(),a=r.a.useRef();return r.a.createElement(d,{name:"newplace",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose},r.a.createElement("input",{ref:a,id:"place-input",type:"text",className:"popup__input",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"1",maxLength:"30"}),r.a.createElement("span",{id:"place-input-error",className:"popup__input-error"}),r.a.createElement("input",{ref:t,id:"link-input",type:"url",className:"popup__input",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),r.a.createElement("span",{id:"link-input-error",className:"popup__input-error"}),r.a.createElement("button",{type:"submit",className:"popup__save-button popup__save-button_active",onClick:function(n){n.preventDefault(),e.onAddPlace(a.current.value,t.current.value)}},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"))};var E=function(e){var t=r.a.useContext(f),a=e.cardData.owner._id===t._id,n="card__remove-button ".concat(a?"card__remove-button_active":"card__delete-button_hidden"),o=e.cardData.likes.some(function(e){return e._id===t._id}),c="card__like-button ".concat(o?"card__like-button_active":"card__like-button_hidden");return r.a.createElement("article",{className:"card"},r.a.createElement("button",{className:n,type:"button",onClick:function(){e.onCardDelete(e.cardData)}}),r.a.createElement("div",{className:"card__image",style:{backgroundImage:"url(".concat(e.cardData.link,")")},onClick:function(){e.onCardClick({name:e.cardData.name,link:e.cardData.link})}}),r.a.createElement("p",{className:"card__name"},e.cardData.name),r.a.createElement("div",{className:"card__like-block"},r.a.createElement("button",{className:c,type:"button",onClick:function(){e.onCardLike(e.cardData)}}),r.a.createElement("p",{className:"card__like-amount"},e.cardData.likes.length)))},N=a(6),C=a(7),k=new(function(){function e(t){Object(N.a)(this,e),this._baseUrl=t.baseUrl,this._authorizationNumber=t.authorizationNumber}return Object(C.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._authorizationNumber}}).then(this._returnErrorResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._authorizationNumber}}).then(this._returnErrorResponse)}},{key:"patchUserInfo",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._authorizationNumber,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then(this._returnErrorResponse)}},{key:"postNewCard",value:function(e,t){return console.log(t),fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._authorizationNumber,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then(this._returnErrorResponse)}},{key:"patchAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._authorizationNumber,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then(this._returnErrorResponse)}},{key:"changeLikeCardStatus",value:function(e,t){var a=!0===t?"PUT":"DELETE";return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:a,headers:{authorization:this._authorizationNumber}}).then(this._returnErrorResponse)}},{key:"deleteCard",value:function(e){return console.log("".concat(this._baseUrl,"/cards/").concat(e)),fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._authorizationNumber}}).then(this._returnErrorResponse)}},{key:"_returnErrorResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-12",authorizationNumber:"700729c8-6f90-4ed7-bfdf-eebcd18bcb3c"});var y=function(e){var t=r.a.useContext(f),a=null!==t&&t.name,n=null!==t&&t.avatar,o=null!==t&&t.about;return r.a.createElement("main",{className:"content"},r.a.createElement("section",{className:"profile"},r.a.createElement("div",{className:"profile__avatar-box"},r.a.createElement("div",{className:"profile__avatar",style:{backgroundImage:"url(".concat(n,")")}}),r.a.createElement("button",{className:"profile__avatar-edit-button",onClick:e.onEditAvatar})),r.a.createElement("div",{className:"profile__info"},r.a.createElement("div",{className:"profile__first-line"},r.a.createElement("p",{className:"profile__name"},a),r.a.createElement("button",{className:"profile__edit-button",type:"button",onClick:e.onEditProfile})),r.a.createElement("p",{className:"profile__description"},o)),r.a.createElement("button",{className:"profile__add-button",type:"button",onClick:e.onAddPlace})),r.a.createElement("section",{className:"cards"},Array.from(e.cards).map(function(t){return r.a.createElement(E,{cardData:t,onCardClick:e.onCardClick,key:t._id,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete})})),r.a.createElement(h,{isOpen:e.isEditProfilePopupOpen,onClose:e.onClose,onUpdateUser:e.onUpdateUser}),r.a.createElement(v,{isOpen:e.isEditAvatarPopupOpen,onClose:e.onClose,onUpdateAvatar:e.onUpdateAvatar}),r.a.createElement(b,{isOpen:e.isAddPlacePopupOpen,onClose:e.onClose,onAddPlace:e.onAddNewPlace}),r.a.createElement(d,{name:"removeCard",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u043d\u044b?"},r.a.createElement("button",{type:"submit",className:"popup__save-button popup__save-button_active popup__save-button_for-remove"},"\u0414\u0430")),r.a.createElement(_,{card:e.card,onClose:e.onClose}))};var g=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright"}," \xa9 2020 Mesto Russia"))};var O=function(){var e=r.a.useState(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],o=r.a.useState(!1),c=Object(l.a)(o,2),u=c[0],p=c[1],d=r.a.useState(!1),_=Object(l.a)(d,2),h=_[0],v=_[1],b=r.a.useState(null),E=Object(l.a)(b,2),N=E[0],C=E[1],O=r.a.useState(null),U=Object(l.a)(O,2),P=U[0],A=U[1],w=r.a.useState([]),D=Object(l.a)(w,2),j=D[0],z=D[1];function S(){v(!1),n(!1),p(!1),C(null)}return r.a.useEffect(function(){k.getUserInfo().then(function(e){A(e)}).catch(function(){console.error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a.")})},[]),r.a.useEffect(function(){k.getInitialCards().then(function(e){Array.from(e),z(e)}).catch(function(){console.error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a.")})},[]),r.a.createElement("div",{className:"root"},r.a.createElement(m,null),r.a.createElement(f.Provider,{value:P},r.a.createElement(y,{onEditProfile:function(){n(!0)},onAddPlace:function(){p(!0)},onEditAvatar:function(){v(!0)},onCardClick:function(e){C({name:e.name,link:e.link})},onClose:S,onUpdateUser:function(e,t){k.patchUserInfo(e,t).then(function(e){A(Object(s.a)({},P,{name:e.name,about:e.about})),S()})},onUpdateAvatar:function(e){k.patchAvatar(e).then(function(e){A(Object(s.a)({},P,{avatar:e.avatar})),S()})},isEditAvatarPopupOpen:h,isAddPlacePopupOpen:u,isEditProfilePopupOpen:a,card:N,cards:j,onCardLike:function(e){var t=e.likes.some(function(e){return e._id===P._id});k.changeLikeCardStatus(e._id,!t).then(function(t){var a=j.map(function(a){return a._id===e._id?t:a});z(a)})},onCardDelete:function(e){k.deleteCard(e._id).then(function(){var t=j.filter(function(t){return e._id!==t._id});z(t)})},onAddNewPlace:function(e,t){k.postNewCard(e,t).then(function(e){z([].concat(Object(i.a)(j),[e])),S()})}})),r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})},5:function(e,t,a){e.exports=a.p+"static/media/logo_white.e889e45f.svg"},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.c1d88552.chunk.js.map