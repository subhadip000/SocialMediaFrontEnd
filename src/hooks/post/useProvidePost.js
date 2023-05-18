import { useState } from "react";
// import { useAuth } from "../../context/auth/AuthProvider";
import {
  FETCH_ALL_POSTS,
  FETCH_POST,
  POST_EDIT,
  POST_LIKE,
  POST_DELETE,
  API_URL,
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
  const [comments, setComments] = useState(null);
  const [complete, setComplete] = useState(false);
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
  const CreateComment = async (input) => {
    setLoading(true);
    try {
      const { data } = await axios.delete(
        `${API_URL}/api/comment/create`,
        input,
        config
      );
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
  const FetchComments = async (id) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${API_URL}/api/comment/comments/${id}`,
        config
      );
      setComments(data);
      // console.log(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      console.log(error?.response?.data?.message);
      setAppErr(error?.response?.data?.message);
      setServerErr(error?.message);
    }
  };
  const DeleteComments = async (id) => {
    setLoading(true);
    try {
      const { data } = await axios.put(
        `${API_URL}/api/comment/delete`,
        id,
        config
      );
      setComments(data);
      // console.log(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      console.log(error?.response?.data?.message);
      setAppErr(error?.response?.data?.message);
      setServerErr(error?.message);
    }
  };
  const UpdateComments = async (input) => {
    setLoading(true);
    try {
      const { data } = await axios.put(
        `${API_URL}/api/comment/update`,
        input,
        config
      );
      setComments(data);
      // console.log(data);
      setLoading(false);
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
    FetchComments,
    comments,
    UpdateComments,
    DeleteComments,
    CreateComment,
  };
};

export default useProvidePost;
