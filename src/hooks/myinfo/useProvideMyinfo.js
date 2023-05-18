import { useState } from "react";
import { useAuth } from "../../context/auth/AuthProvider";
import {
  MY_FOLLOWER,
  MY_FOLLOWING,
  MY_POST,
  MY_PROFILE,
  PROFILE_PHOTO_UPDATE,
  PROFILE_UPDATE,
} from "../../constant/api/Api";
import axios from "axios";

const useProvideMyinfo = () => {
  // All states
  const [user, setUser] = useState();
  const [followers, setFollowers] = useState();
  const [following, setFollowing] = useState();
  const [appErr, setAppErr] = useState("");
  const [serverErr, setServerErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [reset, setReset] = useState(false);
  const [post, setPost] = useState(null);
  const { token } = useAuth();

  // Configuration
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  // Configuration
  const configForm = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };

  const MyInfo = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(MY_PROFILE, config);
      setUser(data);
      setLoading(false);
    } catch (error) {
      // console.log(error?.response?.data?.message);
      setLoading(false);
      setAppErr(error?.response?.data?.message);
      setServerErr(error?.message);
    }
  };
  const MyPost = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(MY_POST, config);
      setPost(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setAppErr(error?.response?.data?.message);
      setServerErr(error?.message);
    }
  };
  const MyFollowingList = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(MY_FOLLOWING, {}, config);
      setFollowing(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setAppErr(error?.response?.data?.message);
      setServerErr(error?.message);
    }
  };
  const MyFollowerList = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(MY_FOLLOWER, {}, config);
      setFollowers(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setAppErr(error?.response?.data?.message);
      setServerErr(error?.message);
    }
  };
  const MyInfoUpdate = async (input) => {
    setLoading(true);
    try {
      const { data } = await axios.post(PROFILE_UPDATE, input, config);
      setReset(true);
      setUser(data);
      setLoading(false);
      setReset(false);
    } catch (error) {
      setLoading(false);
      setAppErr(error?.response?.data?.message);
      setServerErr(error?.message);
    }
  };
  const MyPhotoUpdate = async (input) => {
    const formData = new FormData();
    formData.append("image", {
      name: "_profile",
      type: "image/jpg",
      uri: input.uri,
    });

    setLoading(true);
    try {
      const { data } = await axios.put(
        PROFILE_PHOTO_UPDATE,
        formData,
        configForm
      );
      setReset(true);
      setUser(data);
      setLoading(false);
      setReset(false);
    } catch (error) {
      setLoading(false);
      setAppErr(error?.response?.data?.message);
      setServerErr(error?.message);
    }
  };

  return {
    loading,
    user,
    appErr,
    serverErr,
    MyInfo,
    MyInfoUpdate,
    reset,
    MyPhotoUpdate,
    MyPost,
    post,
    MyFollowingList,
    MyFollowerList,
    followers,
    following,
  };
};

export default useProvideMyinfo;
