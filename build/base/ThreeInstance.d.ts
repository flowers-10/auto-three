import { ConfigType } from '../types/ConfigType';
import { default as Mousemove } from '../base/Mousemove';
import { default as Time } from '../base/Time';
import { default as Sizes } from '../base/Sizes';
import { default as Resources } from './Resources';
import { default as Loading } from '../components/loading/Loading';
import { default as Camera } from '../components/cameras/Camera';
import { default as Renderer } from '../components/renderers/Renderer';
import { default as Light } from '../components/lights/Light';
import { default as Raycaster } from '../components/Raycaster';
import * as THREE from "three";
declare class ThreeInstance {
    time: Time;
    light: Light;
    scene: THREE.Scene;
    sizes: Sizes;
    camera: Camera;
    _config: ConfigType;
    config: any;
    _canvas: HTMLCanvasElement;
    loading: Loading;
    renderer: Renderer;
    mousemove: Mousemove;
    resources: Resources;
    raycaster: Raycaster;
    constructor(canvas?: HTMLCanvasElement, config?: ConfigType);
    resize(): void;
    update(): void;
    clearGroup(group: any): void;
    dispose(): void;
}
export { ThreeInstance };
