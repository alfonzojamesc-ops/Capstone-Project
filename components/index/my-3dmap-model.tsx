// @ts-nocheck

import { useGLTF } from "@react-three/drei";
import React from "react";
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

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    require("@/assets/models/my-3dmap.glb")
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ChapelData001.geometry}
        material={materials.ChapelRoofMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ChapelData001_1.geometry}
        material={materials.ChapelWallMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ChapelData001_2.geometry}
        material={materials.LeafMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ChapelData001_3.geometry}
        material={materials.TrunkMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ChapelData001_4.geometry}
        material={materials.GrassMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ChapelData001_5.geometry}
        material={materials.RoadMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ChapelData001_6.geometry}
        material={materials.GraveMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ChapelData001_7.geometry}
        material={materials.FenceMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ChapelData001_8.geometry}
        material={materials["GraveRoofMaterial.006"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ChapelData001_9.geometry}
        material={materials.CoffinMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ChapelData001_10.geometry}
        material={materials["GraveMaterial.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ChapelData001_11.geometry}
        material={materials["GraveRoofMaterial.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ChapelData001_12.geometry}
        material={materials["GraveRoofMaterial.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ChapelData001_13.geometry}
        material={materials["GraveRoofMaterial.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ChapelData001_14.geometry}
        material={materials["GraveRoofMaterial.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ChapelData001_15.geometry}
        material={materials["GraveRoofMaterial.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ChapelData001_16.geometry}
        material={materials.GraveFloorMaterial}
      />
    </group>
  );
}

useGLTF.preload(require("@/assets/models/my-3dmap.glb"));
