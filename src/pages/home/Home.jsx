import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";
import HomeFeed from "../../components/feed/HomeFeed";
import useProvidePost from "../../hooks/post/useProvidePost";

const Home = () => {
  const dispatch = useDispatch();
  const { post, FetchPosts } = useProvidePost();
  const { processing } = useSelector((state) => state.post);
  useEffect(() => {
    FetchPosts();
    console.log("refressing");
  }, [dispatch, processing]);

  // console.log("home",post);

  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <HomeFeed post={post} isStory={true} />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
