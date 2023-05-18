import { createContext, useState } from "react";
import React from "react";
export const MediaContext = createContext();

const MediaProvider = ({ children }) => {
  const [media, setMedia] = useState();
  const [albums, setAlbums] = useState();
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  // console.log("Context");
  return (
    <MediaContext.Provider
      value={{
        media,
        setMedia,
        albums,
        selectedAlbum,
        setSelectedAlbum,
        setAlbums,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};

export default MediaProvider;
