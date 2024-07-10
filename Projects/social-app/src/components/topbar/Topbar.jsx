import './topbar.css'
import { Search,Person,Chat,Notifications } from '@mui/icons-material'
export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">SocialApp</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search />
                    <input type="text" placeholder='Search for friend,post or video' className="searchInput" />
                </div>

            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <div className="topbarlink">Homepage</div>
                    <div className="topbarlink">Timeline</div>
                </div>
                <div className="topbarIconItem">
                    <Person/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Chat/>
                    <span className="topbarIconChat">2</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications/>
                    <span className="topbarIconNotification">3</span>
                </div>
                <img src="/assets/person/1.jpeg" alt="" />
            </div>
        </div>
    )
}
