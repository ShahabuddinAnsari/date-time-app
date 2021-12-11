import React from 'react';

export const Modal = ({title, onClick}) => {
    return (
        <>
        <div className='modal-main'>
            <div className='modal-header'>
                <div className='modal-title'><span>{title}</span></div>
                <div onClick={onClick}  className='modal-close'>
                    <span 
                        style={{'transform': 'rotate(45deg)', 'position': 'relative','left': '25px'}} 
                        className='modal-close-link-1'>
                    </span>
                    <span style={{'transform': 'rotate(135deg)'}} className='modal-close-link-2'></span>
                </div>
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