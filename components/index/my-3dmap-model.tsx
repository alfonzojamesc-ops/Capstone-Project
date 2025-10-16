// @ts-nocheck
import { useGLTF } from "@react-three/drei";
import React from "react";
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

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    require("@/assets/models/my-3dmap-transformed-native.glb")
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group position={[-154.216, -3.22, -117.324]} scale={0.019}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={materials.ChapelRoofMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_1.geometry}
          material={materials.ChapelWallMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_2.geometry}
          material={materials.LeafMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_3.geometry}
          material={materials.TrunkMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_4.geometry}
          material={materials.GrassMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_5.geometry}
          material={materials.RoadMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_6.geometry}
          material={materials.GraveMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_7.geometry}
          material={materials.FenceMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_8.geometry}
          material={materials["GraveRoofMaterial.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_9.geometry}
          material={materials["GraveMaterial.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_10.geometry}
          material={materials["GraveRoofMaterial.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_11.geometry}
          material={materials["GraveRoofMaterial.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_12.geometry}
          material={materials["GraveRoofMaterial.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_13.geometry}
          material={materials["GraveRoofMaterial.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_14.geometry}
          material={materials["GraveRoofMaterial.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_15.geometry}
          material={materials.GraveFloorMaterial}
        />
      </group>
    </group>
  );
}

useGLTF.preload(require("@/assets/models/my-3dmap-transformed-native.glb"));
