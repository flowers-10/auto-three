import * as THREE from "three";

export type MaterialType = 'MeshBasicMaterial' | 'MeshDepthMaterial' | 'MeshLambertMaterial' | 'MeshMatcapMaterial' | 'MeshNormalMaterial' | 'MeshPhongMaterial' | 'MeshPhysicalMaterial' | 'MeshStandardMaterial' | 'MeshToonMaterial' | 'ShaderMaterial'

export type MaterialTypeOfTHREE = THREE.ShaderMaterial | THREE.MeshBasicMaterial | THREE.MeshDepthMaterial | THREE.MeshLambertMaterial | THREE.MeshMatcapMaterial | THREE.MeshNormalMaterial | THREE.MeshPhongMaterial | THREE.MeshStandardMaterial | THREE.MeshToonMaterial


export interface LabelStyle {
  show?: boolean;
  distance?: number;
  rotation?: {
    x: number;
    y: number;
    z: number;
  };
  textStyle?: any;
  formatter?: (params: Object | any[]) => string | void
}

export interface MaterialConfig {
  material?: MaterialType
  color?: string;
  opacity?: number;
  metalness?: number;
  roughness?: number;
}

export interface LineStyle {
  show?: boolean;
  color?: string;
  width?: number;
}

export interface ItemStyle {
  extrudeFaces: MaterialConfig;
  crossSection: MaterialConfig;
  lineStyle:LineStyle;
  label: LabelStyle;
  depth: number;
  bevelEnabled: boolean;
  bevelSegments: number;
  bevelSize: number;
  bevelThickness?: number;
}

export interface DataConfig  {
    name?: string;
    value?: string | number;
    itemStyle?: ItemStyle;
}

export type ChartType = 'map' | 'line' | 'bar' | 'pie';

export interface SeriesConfig {
  name: string;
  id: number | string;
  type: ChartType;
  castShadow: boolean;
  receiveShadow: boolean;
  code?: number | string;
  json: any; // Replace 'any'
  itemStyle: Partial<ItemStyle>;
  data?: DataConfig[]
}

