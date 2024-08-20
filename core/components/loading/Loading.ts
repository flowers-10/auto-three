import * as THREE from "three";
import { gsap } from "gsap";
import { ThreeInstance } from "../../base/ThreeInstance";
import BaseThree from "../../base/BaseThree";

export default class LoadingManager extends BaseThree {
  public loadingManager: THREE.LoadingManager;
  constructor(instance: ThreeInstance) {
    super(instance);
    this.createLoading();
    this.loadingManager = new THREE.LoadingManager(
      // Loaded
      () => {
        this.endLoading();
      },
      // Progress
      (_, loaded, total) => {
        this.endLoadingBar(loaded, total);
      },
      () => {
        console.error("Loading error");
      }
    );
  }
  createLoading() {
    const element = document.querySelector(".loading-page");
    if (element) return;
    const loadingPage = document.createElement("div");
    loadingPage.className = "loading-page";
    loadingPage.style.position = "fixed";
    loadingPage.style.top = "0";
    loadingPage.style.left = "0";
    loadingPage.style.width = "100%";
    loadingPage.style.height = "100vh";
    loadingPage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    loadingPage.style.pointerEvents = "none";
    document.body.appendChild(loadingPage);
    const loadingBar = document.createElement("div");
    loadingBar.className = "loading-bar";
    loadingPage.appendChild(loadingBar);
    loadingBar.style.position = "absolute";
    loadingBar.style.top = "50%";
    loadingBar.style.width = "100%";
    loadingBar.style.height = "2px";
    loadingBar.style.background = "#ffffff";
    loadingBar.style.transform = "scaleX(0)";
    loadingBar.style.transformOrigin = "top left";
    loadingBar.style.transition = "transform  0.5s";
  }
  endLoading() {
    const loadingBarElement = document.querySelector(
      ".loading-bar"
    ) as HTMLDivElement;
    const element = document.querySelector(".loading-page") as HTMLDivElement;
    if (element) {
      gsap.set(element.style, { opacity: 1 });
      gsap.to(element.style, {
        duration: 5,
        opacity: 0,
        ease: "power1.inOut",
      });

      window.setTimeout(() => {
        loadingBarElement.style.transform = "scaleX(0)";
        loadingBarElement.style.transformOrigin = "100% 0";
        loadingBarElement.style.transition = "transform 1.5s ease-in-out";
      }, 500);
    }
  }
  endLoadingBar(loaded: number, total: number) {
    const loadingBarElement = document.querySelector(
      ".loading-bar"
    ) as HTMLDivElement;
    const progressRatio = loaded / total;
    loadingBarElement.style.transform = `scaleX(${progressRatio})`;
  }

  resize() {}
  update() {}
  dispose() {}
}
