import styled from "styled-components";

export const DropDownMenu = styled.div` 
  position: absolute;
  top: 100px;
  right: 20px;
  z-index: 1;
  background-color: #2c2f33;
  border-radius: 7px;
  padding: 10px 20px;
  width: 200px;
  ::before {
    content: '';
    position: absolute;
    top: -10px;
    right: 10px;
    height: 45px;
    width: 45px;
    background-color: #2c2f33;
    transform: rotate(45deg);
    border-radius: 5px;
  }
`;
export const DropDownMenu2 = styled.div` 
  position: absolute;
  top: 100px;
  left: 15px;
  z-index: 1;
  background-color: #2c2f33;
  border-radius: 7px;
  padding: 10px 20px;
  width: 300px;
  ::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 7px;
    height: 35px;
    width: 35px;
    background-color: #2c2f33;
    transform: rotate(45deg);
    border-radius: 5px;
  }
`;
export const DropDownTitle = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 18px;
  padding: 20px 0;
  font-weight: 500;
  color: white;
  line-height: 1.2rem;
`;
export const DropDownUL = styled.ul`
  padding: 10px 0;
  border-top: 1px solid white;
  :hover {
    color: red;
  }
`;
export const HeaderContainer = styled.div`
    width: 100%;
    position: absolute;
`;
export const HeaderBar = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    padding-top: 15px;
    background-color: #2c2f33;
    font-size: xx-large;
    font-weight: bold;
    font-style: italic;
    color: 	#ffffff;
    text-transform: uppercase;
`;
export const HeaderTitle = styled.div`
    display: flex;
    cursor: default;
    margin-left: 10px;
    border-radius: 20px;
    cursor: pointer;
`;
export const HeaderTitle2 = styled.div`
    display: flex;
    cursor: default;
    margin-left: 10px;
    font-size: 40px;
    font-weight: bold;
    font-style: italic;
    text-shadow: 0 3px grey, 0 5px grey, 0 7px grey;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 590px) {
        font-size: 30px;
    }
    @media only screen and (max-width: 490px) {
        font-size: 23px;
    }
`;
export const MenuContainer = styled.div`
    cursor: pointer;
    outline: 0;
    border-radius: 15px;
`;