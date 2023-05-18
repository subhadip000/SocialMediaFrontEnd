import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { FetchPostAction } from "../../redux/slices/PostSlice";
import "./Home.css";
import HomeFeed from "../../components/feed/HomeFeed";

const Home = () => {
  const dispatch = useDispatch();
  const { Post, processing } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(FetchPostAction());
    console.log("refressing");
  }, [dispatch, processing]);

  // console.log("home",post);

  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <HomeFeed post={Post} isStory={true} />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
