import Topbar from "../../components/topbar/Topbar"
import Sidebar from '../../components/sidebar/sidebar'
import Feed from '../../components/feed/feed'
import Rightbar from '../../components/rightbar/rightbar'
import './home.css'
export default function home() {
  return (
    <div>
      <Topbar/>
      <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar home/>
      </div>
    </div>
    
  )
}

