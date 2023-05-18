import React, { createContext, useContext } from "react";
import useProvideMyinfo from "../../hooks/myinfo/useProvideMyinfo";
const MyInfoContext = createContext();

const MyInfoProvider = ({ children }) => {
  const myInfo = useProvideMyinfo();
  return (
    <MyInfoContext.Provider value={myInfo}>{children}</MyInfoContext.Provider>
  );
};

export default MyInfoProvider;

export const useMyInfo = () => {
  return useContext(MyInfoContext);
};
