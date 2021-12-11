import React, {useState} from 'react';
import { DigitalClock } from '../time/DitigalClock';
import { Modal } from '../Modal';

export const TimeContainer = () => {

    const [isModalOpen, setModal] = useState(false);
    const [modalTitle, setModalTitle]= useState(null);

    const toggleModal = ({title}) => {
        setModal(!isModalOpen);
        setModalTitle(title);
    }

    return (
        <>
            <p>Time</p>

            {
                isModalOpen && <Modal title={modalTitle} onClick={toggleModal}/>
            }

            <DigitalClock />
            <div className="timer-stopWatch">
                <p onClick={() => toggleModal({title: 'Timer'})} className="time-container-timer">Timer</p>
                <p onClick={() => toggleModal({title: 'Stope Watch'})} className="time-container-stopWatch">Stop watch</p>
            </div>
        </>
    );
}