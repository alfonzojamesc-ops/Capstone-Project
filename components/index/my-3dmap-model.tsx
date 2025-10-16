// @ts-nocheck
import { Merged, useGLTF } from "@react-three/drei";
import React, { createContext, useContext, useMemo } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh;
    mesh_0_1: THREE.Mesh;
    mesh_0_2: THREE.Mesh;
    mesh_0_3: THREE.Mesh;
    mesh_0_4: THREE.Mesh;
    mesh_0_5: THREE.Mesh;
    mesh_0_6: THREE.Mesh;
    mesh_0_7: THREE.Mesh;
    mesh_0_8: THREE.Mesh;
    mesh_0_9: THREE.Mesh;
    mesh_0_10: THREE.Mesh;
    mesh_0_11: THREE.Mesh;
    mesh_0_12: THREE.Mesh;
    mesh_0_13: THREE.Mesh;
    mesh_0_14: THREE.Mesh;
    mesh_0_15: THREE.Mesh;
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
    require("@/assets/models/my-3dmap-transformed-native.glb")
  ) as GLTFResult;
  const instances = useMemo(
    () => ({
      Mesh: nodes.mesh_0,
      Mesh1: nodes.mesh_0_1,
      Mesh2: nodes.mesh_0_2,
      Mesh3: nodes.mesh_0_3,
      Mesh4: nodes.mesh_0_4,
      Mesh5: nodes.mesh_0_5,
      Mesh6: nodes.mesh_0_6,
      Mesh7: nodes.mesh_0_7,
      Mesh8: nodes.mesh_0_8,
      Mesh9: nodes.mesh_0_9,
      Mesh10: nodes.mesh_0_10,
      Mesh11: nodes.mesh_0_11,
      Mesh12: nodes.mesh_0_12,
      Mesh13: nodes.mesh_0_13,
      Mesh14: nodes.mesh_0_14,
      Mesh15: nodes.mesh_0_15,
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
      <group position={[-154.216, -3.22, -117.324]} scale={0.019}>
        <instances.Mesh />
        <instances.Mesh1 />
        <instances.Mesh2 />
        <instances.Mesh3 />
        <instances.Mesh4 />
        <instances.Mesh5 />
        <instances.Mesh6 />
        <instances.Mesh7 />
        <instances.Mesh8 />
        <instances.Mesh9 />
        <instances.Mesh10 />
        <instances.Mesh11 />
        <instances.Mesh12 />
        <instances.Mesh13 />
        <instances.Mesh14 />
        <instances.Mesh15 />
      </group>
    </group>
  );
}

useGLTF.preload(require("@/assets/models/my-3dmap-transformed-native.glb"));
