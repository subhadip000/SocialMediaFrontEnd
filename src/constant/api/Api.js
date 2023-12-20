// import { API_URL } from "@env";
export const API_URL =
  "https://social-media-backend-server-production.up.railway.app";
// "http://socia-env.eba-fq6zfx3w.ap-south-1.elasticbeanstalk.com";
// const API_URL = "http://127.0.0.1:4000";

// Auth API
export const REGISTER = `${API_URL}/api/register`;
export const LOGIN = `${API_URL}/api/user/login`;
export const CHANGE_PASS = `${API_URL}/api/user/change-password`;
export const FORGET_PASS = `${API_URL}/api/user/forget-password`;
export const NEW_PASS = `${API_URL}/api/user/new-password`;

//My API
export const MY_PROFILE = `${API_URL}/api/user/profile`;
export const MY_POST = `${API_URL}/api/user/profile/my-post`;
export const MY_FOLLOWER = `${API_URL}/api/user/profile/my-followers`;
export const MY_FOLLOWING = `${API_URL}/api/user/profile/my-following`;
export const PROFILE_UPDATE = `${API_URL}/api/user/update`;
export const PROFILE_PHOTO_UPDATE = `${API_URL}/api/user/avatar-update`;
export const FOLLOW = `${API_URL}/api/user/follow`;
export const UNFOLLOW = `${API_URL}/api/user/unfollow`;
export const INACTIVE = `${API_URL}/api/user/inactive`;
export const UPDATE_PASSWORD = `${API_URL}/api/user/update-password`;
export const DELETE_ACCOUNT = `${API_URL}/api/user/delete`;

//Post Api
export const POST_CREATE = `${API_URL}/api/post/create`;
export const POST_LIKE = `${API_URL}/api/post/like`;
export const FETCH_POSTS = `${API_URL}/api/post`;
export const FETCH_ALL_POSTS = `${API_URL}/api/post/all-post`;
export const FETCH_POST = `${API_URL}/api/post`;
export const POST_EDIT = `${API_URL}/api/post/update`;
export const POST_DELETE = `${API_URL}/api/post/delete`;

//User Api
export const FETCH_USERS = `${API_URL}/api/user`;
export const FETCH_USER = `${API_URL}/api/user`;

//Other
export const VERIFIED = `${API_URL}/api/user/verified`;
export const EMAIL_VERIFY = `${API_URL}/api/user/verify-email`;

//Admin
export const BLOCK = `${API_URL}/api/user/block`;
export const UNBLOCK = `${API_URL}/api/user/unblock`;
