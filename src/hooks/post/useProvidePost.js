import { useState } from "react";
// import { useAuth } from "../../context/auth/AuthProvider";
import {
  FETCH_ALL_POSTS,
  FETCH_POST,
  POST_EDIT,
  POST_LIKE,
  POST_DELETE,
} from "../../constant/api/Api";
import axios from "axios";
import { useSelector } from "react-redux";

const useProvidePost = () => {
  // All states
  const [appErr, setAppErr] = useState("");
  const [serverErr, setServerErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [reset, setReset] = useState(false);
  const [post, setPost] = useState(null);
  const { userInfo } = useSelector((state) => state.auth);

  // Configuration
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userInfo?.token}`,
    },
  };

  // Configuration
  const configForm = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${userInfo?.token}`,
    },
  };

  const FetchPosts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${FETCH_ALL_POSTS}`, config);
      setPost(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      setAppErr(error?.response?.data?.message);
      setServerErr(error?.message);
    }
  };
  const FetchSinglePost = async (id) => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${FETCH_POST}/${id}`, config);

      setPost(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error?.response?.data?.message);
      setAppErr(error?.response?.data?.message);
      setServerErr(error?.message);
    }
  };
  const UpdatePost = async (input) => {
    setLoading(true);
    try {
      const { data } = await axios.put(POST_EDIT, input, config);
      setReset(true);
      // console.log(data);
      setPost(data);
      setLoading(false);
      setReset(false);
    } catch (error) {
      setLoading(false);
      console.log(error?.response?.data?.message);
      setAppErr(error?.response?.data?.message);
      setServerErr(error?.message);
    }
  };
  const LikePost = async (id) => {
    setLoading(true);
    try {
      const { data } = await axios.put(POST_LIKE, { postId: id }, config);
      setReset(true);
      // console.log(data);
      setPost(data);
      setLoading(false);
      setReset(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      console.log(error?.response?.data?.message);
      setAppErr(error?.response?.data?.message);
      setServerErr(error?.message);
    }
  };
  const DeletePost = async (id) => {
    setLoading(true);
    try {
      const { data } = await axios.delete(`${POST_DELETE}/${id}`, config);
      setReset(true);
      // console.log(data);
      setPost(data);
      setLoading(false);
      setReset(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      console.log(error?.response?.data?.message);
      setAppErr(error?.response?.data?.message);
      setServerErr(error?.message);
    }
  };

  return {
    loading,
    appErr,
    serverErr,
    post,
    reset,
    FetchPosts,
    FetchSinglePost,
    UpdatePost,
    LikePost,
    DeletePost,
  };
};

export default useProvidePost;
