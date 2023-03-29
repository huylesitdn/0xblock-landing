import React, { useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Loading = ({ backgroundLight }) => {
  const player = useRef(null);
  return (
    <Player
      ref={player} // set the ref to your class instance
      autoplay={true}
      loop={true}
      controls={true}
      src="files/loading.json"
      style={{ height: 150, width: 150 }}
    ></Player>
  );
};

export default Loading;
