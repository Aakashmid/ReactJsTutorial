import './rightbar.css'

export default function rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b className="">Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFrientList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarProfileOnline"></span>
              <span className="rightbarUsername">John Fischer</span>
            </div>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarProfileOnline"></span>
              <span className="rightbarUsername">John Fischer</span>
            </div>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarProfileOnline"></span>
              <span className="rightbarUsername">John Fischer</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
