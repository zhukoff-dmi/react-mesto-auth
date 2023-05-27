import React from 'react';

function PopupWithForm(props) {
    return (
        <div className={`popup popup_${props.name} ${props.isOpen && `popup_opened`}`}>
            <div className="popup__container">
                <button className="popup__close-button" type="button" onClick={props.onClose}></button>
                <h2 className="popup__title">{`${props.title}`}</h2>
                <form className="popup__form popup__form-profile" name={`${props.name}`} noValidate onSubmit={props.onSubmit}>
                    {props.children}
                    <button className="popup__save-button" type="submit">{props.text}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;