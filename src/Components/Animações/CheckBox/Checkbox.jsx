import React, { useState } from 'react'
import styled from 'styled-components';
import Lottie from 'react-lottie'
import animationData from './checkbox.json'

const ButtonWrapper = styled.button`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #7289da;
    cursor: pointer;
    border-radius: 100%;
`;
const CheckBoxContainer = styled.div`
    pointer-events: none;
`;

const Checkbox = () => {
        const [isLiked, setIsLiked] = useState(false);
        const [animationState, setAnimationState] = useState({
            isStopped: true, isPaused: false, direction: -1
        });

    const defaultOptions = {
        loop: false,
        autoplay: false, 
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

  return (
    <div>
        <ButtonWrapper onClick={() => {
            const reverseAnimation = -1
            const normalAnimation = 1

            setAnimationState({
                ...animationState,
                isStopped: false,
                direction: animationState.direction === normalAnimation
                ? reverseAnimation : normalAnimation
            })
            setIsLiked(!isLiked)
        }}>
        <CheckBoxContainer>
            <Lottie options={defaultOptions}
                height={200}
                width={200}
                direction={animationState.direction}
                isStopped={animationState.isStopped}
                isPaused={animationState.isPaused}/>
        </CheckBoxContainer>
        </ButtonWrapper>
    </div>
  )
}

export default Checkbox