import axios from "axios";
import { useState } from "react";

const useProvidePost = () => {
  const [id, setId] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [post, setPost] = useState(null);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const configToken = {
    headers: {
      Authorization: `Bearer ${userInfo?.token}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const fetchAllPostId = async () => {
    setLoading(true);
    try {
      // console.log(configToken);
      const { data } = await axios.get(
        "https://social-media-backend-server-production.up.railway.app/api/post/all-post",
        configToken
      );
      // console.log(data);
      setId(data);
      setLoading(false);
    } catch (error) {
      // cons/ole.log(error);
      setError(error);
      setLoading(false);
    }
  };
  const fetchSinglePost = async (id) => {
    setLoading(true);
    try {
      // console.log(configToken);
      const { data } = await axios.get(
        `https://social-media-backend-server-production.up.railway.app/api/post/${id}`,
        configToken
      );
      console.log(data);
      setPost(data);
      setLoading(false);
    } catch (error) {
      // cons/ole.log(error);
      setError(error);
      setLoading(false);
    }
  };
  const createComment = async (input) => {
    setLoading(true);
    try {
      // console.log(configToken);
      const { data } = await axios.post(
        `https://social-media-backend-server-production.up.railway.app/api/comment/create`,
        input,
        configToken
      );
      console.log(data);
      setPost(data);
      setLoading(false);
    } catch (error) {
      // cons/ole.log(error);
      setError(error);
      setLoading(false);
    }
  };

  return {
    id,
    loading,
    error,
    post,
    fetchAllPostId,
    fetchSinglePost,
    createComment,
  };
};

export default useProvidePost;
