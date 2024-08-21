import { ThreeInstance } from "./ThreeInstance";
interface BaseThreeInterface {
  resize(): void;
  update(): void;
  dispose(): void;
}

export default class BaseThree implements BaseThreeInterface {
  protected sizes;
  protected scene;
  protected canvas;
  protected camera;
  protected _camera;
  protected time;
  protected mouse;
  protected eventOffset;
  constructor(protected _instance: ThreeInstance) {
    this.sizes = _instance.sizes;
    this.scene = _instance.scene;
    this.camera = _instance.camera;
    this._camera = _instance.camera?.instance || null;
    this.time = _instance.time;
    this.mouse = _instance.mousemove?.mouse;
    this.eventOffset = _instance.mousemove?.eventOffset;
    this.canvas = _instance._canvas;
  }
  resize(): void {}
  update(): void {}
  dispose(): void {}
}
