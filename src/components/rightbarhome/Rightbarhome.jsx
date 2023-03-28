import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAction } from "../../redux/slices/UserSlice";

import "./Rightbarhome.css";

const Rightbarhome = () => {
  const dispatch = useDispatch();
  //data from store
  const user = useSelector((state) => state?.user);
  const { userList, myInfo } = user;
  // console.log(myInfo?.id);
  useEffect(() => {
    dispatch(fetchUsersAction());
  }, [dispatch]);
  let loginUser = myInfo?.id;
  let newArray = userList?.filter((e)=>e.id!==loginUser);

  return (
    <div className="rightbarhome">
      <span className="rightbarTitle">Connect With</span>
      <div>
        {newArray?.map((user) => (
          <form className="rightbarUserList" key={user.id}>
            <div className="UserDiv">
              <a href="/profile/userId">
                <img
                  src={user.profilePhoto}
                  alt=""
                  className="PopupProfileImg"
                />
              </a>
              <span className="PopupUsername">{user.firstName} {user.lastName}</span>
            </div>
            <button className="followBtn">Follow</button>
          </form>
        ))}
      </div>
    </div>
  );
};

export default Rightbarhome;