import Logo from './Logo';
import Styles from './Sidebar.module.css';
import AppNav from './AppNav';

const Sidebar = () => {
  return (
    <div className={Styles.sidebar}>
      <Logo />
      <AppNav />

      <p>list of city</p>

      <footer className={Styles.footer}>
        <p className={Styles.copyright}>
            &copy; Copyright{new Date().getFullYear} by 
        </p>
      </footer>
    </div>
  )
}

export default Sidebar

