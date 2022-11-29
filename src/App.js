import './App.css';
import Body from './Components/Body/Body';
import DropDownItem from './Components/DropDown/DropDownItem';
import MenuIcon from './Components/Animações/Menu/MenuIcon'
import { useEffect, useState } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import {CgProfile} from 'react-icons/cg'
import { DropDownMenu, DropDownMenu2, DropDownTitle, DropDownUL, HeaderBar, HeaderContainer, HeaderTitle, HeaderTitle2, MenuContainer } from './AppStyles';

function App(props) {

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  useEffect(() => {
    Aos.init({duration: 1500})
  }, []);

  return (
    <div className='App'>
        <HeaderContainer>
          <HeaderBar data-aos='fade'>
            <HeaderTitle onClick={() => {setOpen2(!open2)}}><CgProfile style={{'width':'50px', 'height':'55px'}}/>
            </HeaderTitle>
            <HeaderTitle2 data-aos='fade'>ANIMATION PROJECT</HeaderTitle2>
            <MenuContainer onClick={() => {setOpen(!open)}}>
              <MenuIcon />
            </MenuContainer>
          </HeaderBar>
        </HeaderContainer>
        <div>
          <DropDownMenu className={`Menu ${open? 'active' : 'inactive'}`}>
            <DropDownTitle>Menu</DropDownTitle>
            <DropDownUL>
              <DropDownItem text = {'😊 Que Menu Legal!'} />
              <DropDownItem text = {'😛 Ótimas Animações!'} />
              <DropDownItem text = {'👌 Merece Nota Máxima!'} />
            </DropDownUL>
          </DropDownMenu>
        </div>
        <div>
          <DropDownMenu2 className={`Menu ${open2? 'active' : 'inactive'}`}>
            <DropDownTitle>Felipe Torres Veloso</DropDownTitle>
            <DropDownUL>
              <DropDownItem text = {'18 Anos'} />
              <DropDownItem text = {'FrontEnd Dev | JavaScript | CSS HTML'} />
            </DropDownUL>
          </DropDownMenu2>
        </div>
        <Body />
    </div>
  );
}

export default App;
