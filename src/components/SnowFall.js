import React, { useEffect, useState } from 'react';
import { ContentMenu } from './ContentMenu';
import { Snow } from './Snow';
import { Modal } from './Modal';
import { FirePit } from './FirePit';
import '../css/styles.css'

export const SnowFall = () => {
    const [showVisualEffects, setShowVisualEffects] = useState(false);
    const [modalAnswered, setModalAnswered] = useState(false);
    const [content, setContent] = useState()

    const answerModal = () => {
        setModalAnswered(true);
    }

    const updateVisualEffects = (answer) => {
        setShowVisualEffects(answer);
    }

    useEffect(() => {
        if (modalAnswered) {
            setContent((
                <>
                    <ContentMenu visuals={showVisualEffects} />
                    <Snow visuals={showVisualEffects} canStart={modalAnswered}/>
                    <FirePit visuals={showVisualEffects} />
                </>
            ))
        }
    }, [modalAnswered, showVisualEffects])

    // render the rest when the modal is answered, just show modal initially
    return (
        <div id='frame'>
            <div id='snowingFrame'>
                {!modalAnswered && <Modal 
                                      question={`would you like full visual effects?`} 
                                      answerModal={answerModal} 
                                      updateQuestionAnswer={updateVisualEffects}/>}
                {modalAnswered && content }
            </div>
        </div>
    )
}
