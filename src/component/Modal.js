import React from 'react';

export const Modal = ({title, onClick}) => {
    return (
        <>
        <div className='modal-main'>
            <div className='modal-header'>
                <div className='modal-title'><span>{title}</span></div>
                <div onClick={onClick} className='modal-close'><span>Close</span></div>
            </div>
            <div className='modal-content'>
                <p>lkajsfdljaskfdjklsajf</p>
                <p>lkajsfdljaskfdjklsajf</p>
                <p>lkajsfdljaskfdjklsajf</p>
                <p>lkajsfdljaskfdjklsajf</p>
                <p>lkajsfdljaskfdjklsajf</p>
            </div>
        </div>
        </>
    );
}