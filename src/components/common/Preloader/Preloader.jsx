import React from "react";
import preloader from "./Preloader.gif";

let Preloader = () => {
  return (
    <div>
      <img src={preloader} alt="preloading" />
    </div>
  );
};

export default Preloader;
