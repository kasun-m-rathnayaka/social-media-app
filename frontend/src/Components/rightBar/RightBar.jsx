import React from "react";
import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Sugessted for you</span>
          <div className="user">
            <div className="userInfo">
              <img src="/assests/person.png" />
              <span>Sandun</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/assests/person2.png" />
              <span>Charith</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Laterst Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="/assests/person3.png" />
              <span>Imasha</span>
              <p>has a job oppotunity for you</p>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/assests/person.png" />
              <span>Shehani</span>
              <p>has given you a 3 star reviwe</p>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/assests/person2.png" />
              <span>Shehani</span>
              <p>has updated her proposal</p>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/assests/person3.png" />
              <span>Imasha</span>
              <p>has a job oppotunity for you</p>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/assests/person.png" />
              <span>Shehani</span>
              <p>has given you a 3 star reviwe</p>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Online friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="/assests/person.png" />
              <div className="online" />
              <span>Shehani</span>
              <p>is live</p>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/assests/person2.png" />
              <div className="online" />
              <span>Kasun</span>
              <p>is live</p>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/assests/person3.png" />
              <div className="online" />
              <span>Kavindu</span>
              <p>is live</p>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/assests/person.png" />
              <div className="online" />
              <span>Shehani</span>
              <p>is live</p>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/assests/person2.png" />
              <div className="online" />
              <span>Kasun</span>
              <p>is live</p>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/assests/person3.png" />
              <div className="online" />
              <span>Kavindu</span>
              <p>is live</p>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/assests/person.png" />
              <div className="online" />
              <span>Shehani</span>
              <p>is live</p>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/assests/person2.png" />
              <div className="online" />
              <span>Kasun</span>
              <p>is live</p>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/assests/person3.png" />
              <div className="online" />
              <span>Kavindu</span>
              <p>is live</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
