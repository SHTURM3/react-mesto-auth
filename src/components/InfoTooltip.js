import React from "react";


function InfoTooltip(props) {
    return(
        <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className={`popup__container popup__container_${props.name}`}>
                <button className={`popup__close-btn popup__close-btn_${props.name}`} onClick={props.onClose}></button>
                <img src={props.image} className={`popup__img popup__img_${props.name}`} />
                <h2 className={`popup__title popup__title_${props.name}`}>
                    {props.title}
                </h2>
            </div>
        </div>
    );
}

export default InfoTooltip;