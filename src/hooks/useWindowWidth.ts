import { useState, useEffect } from "react";

function getWindowWidth() {
  const { innerWidth } = window;
  return {
    innerWidth,
  };
}

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    function onResize() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return windowWidth;
}
