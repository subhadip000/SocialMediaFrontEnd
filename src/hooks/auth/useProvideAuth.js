// import axios from "axios";
// import { LOGIN } from "../../constant/api/Api";
// import { useEffect, useState } from "react";
// // import AsyncStorage from "@react-native-async-storage/async-storage";

// // Configuration
// const config = {
//   headers: {
//     "Content-Type": "application/json",
//   },
// };

// const useProvideAuth = () => {
//   // All states
//   const [token, setToken] = useState();
//   const [appErr, setAppErr] = useState("");
//   const [serverErr, setServerErr] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     // Get token
//     const getToken = async () => {
//       setIsLoading(true);
//       try {
//         const token = await AsyncStorage.getItem("token");
//         setToken(token);
//         setIsLoading(false);
//       } catch (error) {
//         setIsLoading(false);
//       }
//     };
//     getToken();
//   }, []);

//   // Sign in function
//   const signIn = async (input) => {
//     setLoading(true);
//     try {
//       const { data } = await axios.post(LOGIN, input, config);
//       setToken(data.token);
//       await AsyncStorage.setItem("token", data.token);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       setAppErr(error?.response?.data?.message);
//       setServerErr(error?.message);
//     }
//   };

//   // Get token
//   const signOut = async () => {
//     setLoading(true);
//     try {
//       await AsyncStorage.removeItem("token");
//       setToken(null);
//       setIsLsetLoadingoading(false);
//     } catch (error) {
//       setLoading(false);
//     }
//   };

//   return {
//     signIn,
//     loading,
//     serverErr,
//     appErr,
//     token,
//     isLoading,
//     signOut,
//   };
// };

// export default useProvideAuth;
