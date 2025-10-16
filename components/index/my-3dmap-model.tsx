// @ts-nocheck
import { Merged, useGLTF } from "@react-three/drei";
import React from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ChapelData001: THREE.Mesh;
    ChapelData001_1: THREE.Mesh;
    ChapelData001_2: THREE.Mesh;
    ChapelData001_3: THREE.Mesh;
  };
  materials: {
    PaletteMaterial001: THREE.MeshStandardMaterial;
    PaletteMaterial004: THREE.MeshStandardMaterial;
    PaletteMaterial002: THREE.MeshStandardMaterial;
    PaletteMaterial003: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

const context = React.createContext({} as ContextType);

export function Instances({
  children,
  ...props
}: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF(
    require("@/public/assets/models/my-3dmap.glb")
  ) as GLTFResult;
  const instances = React.useMemo(
    () => ({
      ChapelData: nodes.ChapelData001,
      ChapelData1: nodes.ChapelData001_1,
      ChapelData2: nodes.ChapelData001_2,
      ChapelData3: nodes.ChapelData001_3,
    }),
    [nodes]
  );
  return (
    <Merged meshes={instances} {...props}>
      {(instances: ContextType) => (
        <context.Provider value={instances} children={children} />
      )}
    </Merged>
  );
}

export function Model(props: JSX.IntrinsicElements["group"]) {
  const instances = React.useContext(context);
  return (
    <group {...props} dispose={null}>
      <instances.ChapelData />
      <instances.ChapelData1 />
      <instances.ChapelData2 />
      <instances.ChapelData3 />
    </group>
  );
}

useGLTF.preload(require("@/public/assets/models/my-3dmap.glb"));
