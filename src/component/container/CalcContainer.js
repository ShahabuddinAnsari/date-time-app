import React, {useState} from 'react';
import { Modal } from '../Modal';
import StdCalculator from '../calculator/standardCalculator/StdCalculator';
import { HeightConverter } from '../calculator/unitConverter/HeightConverter';

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
                <Modal title={modalTitle} onClick={toggleModal} classNameProps={modalTitle === "Standard Calculator" ? "calcModalCustomStyel" : ""}>
                    {
                        (modalTitle === "Standard Calculator") &&
                        <StdCalculator/>
                    }
                    {
                        (modalTitle === "Height Converter") &&
                        <HeightConverter/>
                    }
                </Modal>
            }
            <div className='calcContainerContent'>
                <a onClick={() => toggleModal({title: 'Standard Calculator'})} href='#'>StandardCalculator</a>
                <a onClick={() => toggleModal({title: 'Height Converter'})} href='#'>Height Converter</a>
            </div>
        </>
    );
}