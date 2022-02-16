import React from 'react';
import closeIcon from '../../images/close.svg';
import './ModalEdit.css';

interface ModalProps{
    title:string;
    isOpen:boolean;
    onClose:()=>void;
}

export const ModalEdit:React.FC<ModalProps>=({title,isOpen,onClose,children})=>{
    const overlayRef = React.useRef(null);

    const handleOverlayClick = (e:React.MouseEvent<HTMLElement, MouseEvent>)=>{
        if(e.target===overlayRef.current){
            onClose();
        }
    }

    // return(null)

    return isOpen?(
        <div className={'modal'}>
            <div className={'modal__overlay'} onClick={handleOverlayClick}/>
            <div className={'modal__box'}>
                <button className={'modal__close-btn'} onClick={onClose}>
                    <img className={'modal_close-img'} src={closeIcon} alt={'close modal'} />
                </button>
                <div className={'modal__title'}>
                    {title}
                </div>
                <div className={'modal__content'}>
                    {children}
                </div>
            </div>
        </div>
    ):null;
};