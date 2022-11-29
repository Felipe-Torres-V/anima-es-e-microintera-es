import React, { useState } from 'react'
import styled from 'styled-components';
import Lottie from 'react-lottie'
import animationData from './Menu.json'

const ButtonWrapper = styled.button`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 0;
    padding-bottom: 20px;
    cursor: pointer;
    border-radius: 15px;
    width: 65px;
    padding-top: 15px;
`;
const MenuContainer = styled.div`
    pointer-events: none;
`;

const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);
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
            setIsOpen(!isOpen)
        }}>
            <MenuContainer>
                <Lottie options={defaultOptions}
                    height={90}
                    width={90}
                    direction={animationState.direction}
                    isStopped={animationState.isStopped}
                    isPaused={animationState.isPaused}/>
            </MenuContainer>
        </ButtonWrapper>
    </div>
  )
}

export default Menu