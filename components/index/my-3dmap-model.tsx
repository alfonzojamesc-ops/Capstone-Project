// @ts-nocheck

import { Merged, useGLTF } from "@react-three/drei";
import React, { createContext, useContext, useMemo } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ChapelData001: THREE.Mesh;
    ChapelData001_1: THREE.Mesh;
    ChapelData001_2: THREE.Mesh;
    ChapelData001_3: THREE.Mesh;
    ChapelData001_4: THREE.Mesh;
    ChapelData001_5: THREE.Mesh;
    ChapelData001_6: THREE.Mesh;
    ChapelData001_7: THREE.Mesh;
    ChapelData001_8: THREE.Mesh;
    ChapelData001_9: THREE.Mesh;
    ChapelData001_10: THREE.Mesh;
    ChapelData001_11: THREE.Mesh;
    ChapelData001_12: THREE.Mesh;
    ChapelData001_13: THREE.Mesh;
    ChapelData001_14: THREE.Mesh;
    ChapelData001_15: THREE.Mesh;
    ChapelData001_16: THREE.Mesh;
  };
  materials: {
    ChapelRoofMaterial: THREE.MeshStandardMaterial;
    ChapelWallMaterial: THREE.MeshStandardMaterial;
    LeafMaterial: THREE.MeshStandardMaterial;
    TrunkMaterial: THREE.MeshStandardMaterial;
    GrassMaterial: THREE.MeshStandardMaterial;
    RoadMaterial: THREE.MeshStandardMaterial;
    GraveMaterial: THREE.MeshStandardMaterial;
    FenceMaterial: THREE.MeshStandardMaterial;
    ["GraveRoofMaterial.006"]: THREE.MeshStandardMaterial;
    CoffinMaterial: THREE.MeshStandardMaterial;
    ["GraveMaterial.001"]: THREE.MeshStandardMaterial;
    ["GraveRoofMaterial.005"]: THREE.MeshStandardMaterial;
    ["GraveRoofMaterial.003"]: THREE.MeshStandardMaterial;
    ["GraveRoofMaterial.004"]: THREE.MeshStandardMaterial;
    ["GraveRoofMaterial.002"]: THREE.MeshStandardMaterial;
    ["GraveRoofMaterial.001"]: THREE.MeshStandardMaterial;
    GraveFloorMaterial: THREE.MeshStandardMaterial;
  };
};

const context = createContext();
export function Instances({ children, ...props }) {
  const { nodes } = useGLTF(
    require("@/assets/models/my-3dmap.glb")
  ) as GLTFResult;
  const instances = useMemo(
    () => ({
      ChapelData: nodes.ChapelData001,
      ChapelData1: nodes.ChapelData001_1,
      ChapelData2: nodes.ChapelData001_2,
      ChapelData3: nodes.ChapelData001_3,
      ChapelData4: nodes.ChapelData001_4,
      ChapelData5: nodes.ChapelData001_5,
      ChapelData6: nodes.ChapelData001_6,
      ChapelData7: nodes.ChapelData001_7,
      ChapelData8: nodes.ChapelData001_8,
      ChapelData9: nodes.ChapelData001_9,
      ChapelData10: nodes.ChapelData001_10,
      ChapelData11: nodes.ChapelData001_11,
      ChapelData12: nodes.ChapelData001_12,
      ChapelData13: nodes.ChapelData001_13,
      ChapelData14: nodes.ChapelData001_14,
      ChapelData15: nodes.ChapelData001_15,
      ChapelData16: nodes.ChapelData001_16,
    }),
    [nodes]
  );
  return (
    <Merged meshes={instances} {...props}>
      {(instances) => (
        <context.Provider value={instances} children={children} />
      )}
    </Merged>
  );
}

export function Model(props: JSX.IntrinsicElements["group"]) {
  const instances = useContext(context);
  return (
    <group {...props} dispose={null}>
      <instances.ChapelData />
      <instances.ChapelData1 />
      <instances.ChapelData2 />
      <instances.ChapelData3 />
      <instances.ChapelData4 />
      <instances.ChapelData5 />
      <instances.ChapelData6 />
      <instances.ChapelData7 />
      <instances.ChapelData8 />
      <instances.ChapelData9 />
      <instances.ChapelData10 />
      <instances.ChapelData11 />
      <instances.ChapelData12 />
      <instances.ChapelData13 />
      <instances.ChapelData14 />
      <instances.ChapelData15 />
      <instances.ChapelData16 />
    </group>
  );
}

useGLTF.preload(require("@/assets/models/my-3dmap.glb"));
