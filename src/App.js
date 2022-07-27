import './App.css';
import User from './Components/User'
import { BiSearchAlt2 } from 'react-icons/bi'
import Menus from './Components/Menus';
import Logo from './Components/images/Logo.jpg'
import Activity from './Components/Activity';
import MainDashBoard from './Components/MainDashBoard';


function App() {
  return (
    <>
      <div className='dashboard'>
        <div className='header'>
          <div className='logo'>
            <img src={Logo} alt='logo' />
          </div>
          <div className='search_bar'>
            <BiSearchAlt2 className='search_icon' />
            <input placeholder='searh for projects' />
          </div>
          <div className='user'>
            <User />
          </div>
        </div>
        <div className='main'>
          <div className='menu_board'>
            <Menus />
          </div>
          <div className='dashboard_main'>
            <MainDashBoard />
          </div>
          <div className='activity_section'>
            <Activity />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
