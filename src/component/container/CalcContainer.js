import React, {useState} from 'react';
import { Modal } from '../Modal';
import StdCalculator from '../calculator/StdCalculator'

export const CalcContainer = () => {
    const [isModalOpen, setModal] = useState(false);
    const [modalTitle, setModalTitle]= useState(null);

    const toggleModal = ({title}) => {
        setModal(!isModalOpen);
        setModalTitle(title);
    }
    return (
        <>
            {
                isModalOpen && 
                <Modal title={modalTitle} onClick={toggleModal}>
                    <StdCalculator/>
                </Modal>
            }
            <a onClick={() => toggleModal({title: 'StandardCalculator'})} href='#'>Calculator</a>
        </>
    );
}