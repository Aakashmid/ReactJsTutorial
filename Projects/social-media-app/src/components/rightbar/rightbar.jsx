import './rightbar.css'
import { users } from '../dummydata'
export default function rightbar({ profile }) {

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b className="">Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFrientList">
          {users.map((u) => {
            return (
              <li key={u.id} className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                  <img src={u.profilePhoto} alt="" className="rightbarProfileImg" />
                  <span className="rightbarProfileOnline"></span>
                  <span className="rightbarUsername">{u.username}</span>
                </div>
              </li>
            )
          })}
        </ul>
      </>
    )
  }

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Informations</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City :</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From :</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship :</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City :</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
        </div>

        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          {users.map((user) => {
            return <>
              <div className="rightbarFollowing">
                <img src={user.profilePhoto} alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">{user.username}</span>
              </div>
            </>
          })}
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}

      </div>
    </div>
  )
}
