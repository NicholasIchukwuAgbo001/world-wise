import Logo from './Logo';
import Styles from './Sidebar.module.css';
import AppNav from './AppNav';
import { Outlet } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className={Styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />

      <footer className={Styles.footer}>
        <p className={Styles.copyright}>
            &copy; Copyright{new Date().getFullYear} by 
        </p>
      </footer>
    </div>
  )
}

export default Sidebar

