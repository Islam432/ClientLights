import { SideBar } from '../SideBar/SideBar'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <div>
     {/* <main>{<SideBar/>}</main> */}
     <div>
      {  <SideBar/>}
     </div>
     <div>
      <Footer/>
     </div>
    </div>
  )
}

export default Layout