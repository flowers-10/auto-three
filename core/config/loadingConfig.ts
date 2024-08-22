import { NodeObject } from "../components";

export const defaultLoading: NodeObject = {
  tag: "div",
  className: "loading-page",
  style: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    "background-color": "rgba(0, 0, 0, 0.7)",
    "pointer-events": "none",
  },
  cssRules: [],
  children: [
    {
      tag: "div",
      className: "loading-bar",
      style: {
        position: "absolute",
        top: "50%",
        width: "100%",
        height: "2px",
        "background-color": "#ffffff",
        transform: "scaleX(0)",
        "transform-origin": "top left",
        transition: "transform  0.8s",
      },
    },
    {
      tag: "div",
      className: "loading-counter",
      style: {
        "font-size": "60px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,0)",
        color: "#ffffff",
      },
      children: "0%",
    },
  ],
};

const sum = 32;
export const circleLoading: NodeObject = {
  tag: "div",
  className: "loading-page",
  cssRules: Array.from({ length: sum }, (_, index) => ({
    selector: `._circle_:nth-child(${index + 1})`,
    rules: {
      transform: `rotate(${
        (360 / sum) * (index + 1)
      }deg) translate3d(120px, 0, 0)`,
      "animation-delay": `${index * (3 / sum)}s`,
    },
  })),
  keyframes: [
    {
      name: "spin",
      keyframes: [
        "from { opacity:0 }",
        "to { opacity:0.6; transform: translate3d(-4px, -4px, 670px) }",
      ],
    },
  ],
  style: {
    position: "absolute",
    top: "0",
    overflow: "hidden",
    width: "100%",
    height: "100vh",
    "background-color": "#111111",
  },
  children: [
    {
      tag: "div",
      className: "loading-bar",
      style: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        perspective: "500px",
        "background-color": "#111",
        "pointer-events": "none",
      },
      children: Array.from({ length: sum }, () => ({
        tag: "i",
        className: "_circle_",
        style: {
          display: "block",
          position: "absolute",
          width: "8px",
          height: "8px",
          "border-radius": "8px",
          opacity: "0",
          background: "rgba(255, 255, 255, 0.5)",
          "box-shadow": "0px 0px 10px rgba(255, 255, 255, 0.4)",
          "animation-name": "spin",
          "animation-duration": "3s",
          "animation-iteration-count": "infinite",
          "animation-timing-function": "ease-in-out",
        },
      })),
    },
    {
      tag: "div",
      className: "loading-counter",
      style: {
        "font-size": "60px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        color: "#ffffff",
      },
      children: "0%",
    },
  ],
};

export const traditionLoading = {};

export const loadingMap = new Map();
loadingMap.set("default", defaultLoading);
loadingMap.set("circle", circleLoading);
loadingMap.set("tradition", defaultLoading);
