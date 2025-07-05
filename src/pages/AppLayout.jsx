import Sidebar from '../components/sidebar'
import Map from '../components/Map'

import Styles from "./AppLayout.module.css";

const AppLayout = () => {
  return (
    <div className={Styles.app}>
      <Sidebar />
      <Map />
    </div>
  )
}

export default AppLayout
