// @ts-nocheck
import { Merged, useGLTF } from "@react-three/drei";
import React, { createContext, useContext, useMemo } from "react";

const context = createContext();
export function Instances({ children, ...props }) {
  // eslint-disable-next-line
  const { nodes } = useGLTF(require("@/assets/models/my-3dmap.glb"));
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
        <context.Provider value={instances}>{children}</context.Provider>
      )}
    </Merged>
  );
}

export function Model(props) {
  const instances = useContext(context);
  return (
    // eslint-disable-next-line react/no-unknown-property
    <group {...props} dispose={null}>
      {/* eslint-disable-next-line react/no-unknown-property */}
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
// eslint-disable-next-line
useGLTF.preload(require("@/assets/models/my-3dmap.glb"));
