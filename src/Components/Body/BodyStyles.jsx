import styled from "styled-components";

export const BodyScroll = styled.div`
    max-width: 70%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const BodySection = styled.div`
    display: grid;
    margin: 50px;
    margin-top: 170px;
    background-color: #7289da;
    height: 200px;
    max-height: 35vh;
    box-shadow: 0px 12px 18px -6px #5c6fb4;
    align-content: center;
    border-radius: 20px;
    text-align: center;
    cursor: default;
    min-width: 100%;
    @media only screen and (max-width: 490px) {
        font-size: 13px;
        min-width: 320px;
    }
`;
export const BodySection2 = styled.div`
    display: flex;
    margin: 50px;
    margin-top: 170px;
    background-color: #7289da;
    height: 200px;
    box-shadow: 0px 12px 18px -6px #5c6fb4;
    align-content: center;
    border-radius: 20px;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    font-size: xx-large;
    font-family: arial black;  
    min-width: 100%;
    cursor: default;
    @media only screen and (max-width: 490px) {
        font-size: 20px;
        min-width: 320px;
    }
`;
export const BodySection3 = styled.div`
    display: flex;
    margin: 50px;
    margin-top: 170px;
    background: rgb(63,94,251);
    background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(255,100,132,1) 100%);
    height: 200px;
    max-height: 35vh;
    box-shadow: 0px 12px 18px -6px #5c6fb4;
    place-items: center;
    border-radius: 20px;
    justify-content: center;
    justify-content: space-evenly;
    flex-direction: column;
    min-width: 100%;
    cursor: default;
    @media only screen and (max-width: 490px) {
        min-width: 320px;
    }
`;
