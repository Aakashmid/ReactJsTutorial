import Topbar from "../../components/topbar/Topbar"
import Sidebar from '../../components/sidebar/sidebar'
import Feed from '../../components/feed/feed'
import Rightbar from '../../components/rightbar/rightbar'

import './profile.css'

export default function Profile() {
    return (
        <div>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="assets/post/3.jpeg" alt="" className="profileCoverImg" />
                            <img src="assets/person/3.jpeg" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h2 className="profileInfoName">Gal Gaddot</h2>
                            <p className="profileInfoDesc">I am a Python - Django Developer</p>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </div>
    )
}
