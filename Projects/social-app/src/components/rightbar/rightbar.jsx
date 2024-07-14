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
        <div className="">this profile</div>
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
