// @ts-nocheck
import { Merged, useGLTF } from "@react-three/drei";
import React, { createContext, useContext, useMemo } from "react";

const context = createContext();
export function Instances({ children, ...props }) {
  const { nodes } = useGLTF(require("@/assets/models/3dmap_clean_2.glb"));
  const instances = useMemo(
    () => ({
      Tomb: nodes.Tomb,
      RoofSquare: nodes.RoofSquare008,
      PillarCoffinFloorSetMesh: nodes.PillarCoffinFloorSetMesh016,
      Roof: nodes.Roof009,
      Roof1: nodes.Roof008,
      RoofSquare1: nodes.RoofSquare006,
      RoofRound: nodes.RoofRound007,
      RoofRound1: nodes.RoofRound009,
      RoofRound2: nodes.RoofRound006,
      Roof2: nodes.Roof006,
      RoofRound3: nodes.RoofRound008,
      RoofSquare2: nodes.RoofSquare009,
      Roof3: nodes.Roof007,
      RoofSquare3: nodes.RoofSquare007,
      RoofHex: nodes.RoofHex004,
      PillarCoffinFloorHexSetData: nodes.PillarCoffinFloorHexSetData001,
      PillarCoffinFloorHexSetData1: nodes.PillarCoffinFloorHexSetData001_1,
      RoofHex1: nodes.RoofHex003,
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

export function Model(props) {
  const instances = useContext(context);
  const { nodes, materials } = useGLTF(
    require("@/assets/models/3dmap_clean_2.glb")
  );
  return (
    <group {...props} dispose={null}>
      <group name="Chapel" position={[-56.72532654, 3.92499971, 46.99679947]}>
        <mesh
          name="ChapelData"
          geometry={nodes.ChapelData.geometry}
          material={materials.ChapelRoofMaterial}
        />
        <mesh
          name="ChapelData_1"
          geometry={nodes.ChapelData_1.geometry}
          material={materials.ChapelWallMaterial}
        />
      </group>
      <group name="Ground" position={[0, 3.47247362, 3.30500031]}>
        <mesh
          name="GroundData"
          geometry={nodes.GroundData.geometry}
          material={materials.RoadMaterial}
        />
        <mesh
          name="GroundData_1"
          geometry={nodes.GroundData_1.geometry}
          material={materials.GrassMaterial}
        />
        <mesh
          name="GroundData_2"
          geometry={nodes.GroundData_2.geometry}
          material={materials.FenceMaterial}
        />
        <mesh
          name="GroundData_3"
          geometry={nodes.GroundData_3.geometry}
          material={materials.LeafMaterial}
        />
        <mesh
          name="GroundData_4"
          geometry={nodes.GroundData_4.geometry}
          material={materials.TrunkMaterial}
        />
      </group>
      <instances.Tomb
        name="Tomb"
        position={[106.07989502, -0.92499995, -58.37224197]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb001"
        position={[107.99667358, -0.92499995, -54.8614006]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb002"
        position={[103.44676208, -0.92499995, -56.93467331]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb003"
        position={[105.36354065, -0.92499995, -53.42383194]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb004"
        position={[107.28030396, -0.92499995, -49.91298676]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb005"
        position={[109.19706726, -0.92499995, -46.40214539]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb006"
        position={[100.81362915, -0.92499995, -55.49709702]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb007"
        position={[102.73040771, -0.92499995, -51.98625565]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb008"
        position={[104.64717102, -0.92499995, -48.47541046]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb009"
        position={[106.56393433, -0.92499995, -44.96456909]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb010"
        position={[108.48069763, -0.92499995, -41.45372772]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb011"
        position={[110.39746094, -0.92499995, -37.94288635]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb012"
        position={[112.31422424, -0.92499995, -34.43204498]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb013"
        position={[98.18051147, -0.92499995, -54.05952072]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb014"
        position={[100.09727478, -0.92499995, -50.54867935]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb015"
        position={[102.01403809, -0.92499995, -47.03783798]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb016"
        position={[103.93080139, -0.92499995, -43.52699661]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb017"
        position={[105.84757996, -0.92499995, -40.01615524]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb018"
        position={[107.76434326, -0.92499995, -36.50531387]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb019"
        position={[109.68110657, -0.92499995, -32.9944725]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb020"
        position={[111.59786987, -0.92499995, -29.48363113]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb021"
        position={[113.51463318, -0.92499995, -25.97279739]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb022"
        position={[115.43139648, -0.92499995, -22.46195412]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb023"
        position={[95.54737854, -0.92499995, -52.62194443]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb024"
        position={[97.46414185, -0.92499995, -49.11110306]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb025"
        position={[99.38090515, -0.92499995, -45.60026169]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb026"
        position={[101.29766846, -0.92499995, -42.08942032]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb027"
        position={[103.21444702, -0.92499995, -38.57857895]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb028"
        position={[105.13121033, -0.92499995, -35.06773758]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb029"
        position={[107.04797363, -0.92499995, -31.55689621]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb030"
        position={[108.96473694, -0.92499995, -28.04605484]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb031"
        position={[110.88150024, -0.92499995, -24.5352211]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb032"
        position={[112.79826355, -0.92499995, -21.02437782]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb033"
        position={[114.71502686, -0.92499995, -17.51353645]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb034"
        position={[116.63180542, -0.92499995, -14.00269413]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb035"
        position={[92.91424561, -0.92499995, -51.18437576]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb036"
        position={[94.83100891, -0.92499995, -47.67353439]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb037"
        position={[96.74777222, -0.92499995, -44.16268921]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb038"
        position={[98.66455078, -0.92499995, -40.65184784]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb039"
        position={[100.58131409, -0.92499995, -37.14100647]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb040"
        position={[102.49807739, -0.92499995, -33.6301651]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb041"
        position={[104.4148407, -0.92499995, -30.11932373]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb042"
        position={[106.331604, -0.92499995, -26.60848236]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb043"
        position={[108.24836731, -0.92499995, -23.09764862]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb044"
        position={[110.16513062, -0.92499995, -19.58680916]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb045"
        position={[112.08189392, -0.92499995, -16.07596779]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb046"
        position={[113.99867249, -0.92499995, -12.56512547]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb047"
        position={[115.91543579, -0.92499995, -9.0542841]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb048"
        position={[117.8321991, -0.92499995, -5.54344177]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb049"
        position={[94.11463928, -0.92499995, -42.72511292]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb050"
        position={[96.03141785, -0.92499995, -39.21427155]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb051"
        position={[97.94818115, -0.92499995, -35.70343018]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb052"
        position={[99.86494446, -0.92499995, -32.19258881]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb053"
        position={[101.78170776, -0.92499995, -28.68174744]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb054"
        position={[103.69847107, -0.92499995, -25.17090607]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb055"
        position={[105.61523438, -0.92499995, -21.66007233]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb056"
        position={[107.53199768, -0.92499995, -18.14923286]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb057"
        position={[109.44876099, -0.92499995, -14.63839054]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb058"
        position={[111.36553955, -0.92499995, -11.12754917]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb059"
        position={[113.28230286, -0.92499995, -7.61670876]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb060"
        position={[115.19906616, -0.92499995, -4.10586548]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb061"
        position={[117.11582947, -0.92499995, -0.59502387]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb062"
        position={[85.73121643, -0.92499995, -51.82006454]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb063"
        position={[95.31504822, -0.92499995, -34.2658577]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb064"
        position={[97.23181152, -0.92499995, -30.75501633]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb065"
        position={[99.14857483, -0.92499995, -27.24417496]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb066"
        position={[101.06533813, -0.92499995, -23.73333359]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb067"
        position={[102.98210144, -0.92499995, -20.22249985]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb068"
        position={[104.89886475, -0.92499995, -16.71165657]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb069"
        position={[106.81564331, -0.92499995, -13.20081425]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb070"
        position={[108.73240662, -0.92499995, -9.68997288]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb071"
        position={[110.64916992, -0.92499995, -6.17913246]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb072"
        position={[112.56593323, -0.92499995, -2.66828895]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb073"
        position={[114.48269653, -0.92499995, 0.84255242]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb074"
        position={[116.3994751, -0.92499995, 4.35339355]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb075"
        position={[83.0980835, -0.92499995, -50.38248825]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb076"
        position={[85.0148468, -0.92499995, -46.87164688]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb077"
        position={[86.93161011, -0.92499995, -43.36080551]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb078"
        position={[98.4322052, -0.92499995, -22.29575729]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb079"
        position={[100.34896851, -0.92499995, -18.78492355]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb080"
        position={[102.26573181, -0.92499995, -15.27407932]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb081"
        position={[104.18251038, -0.92499995, -11.76323795]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb082"
        position={[106.09927368, -0.92499995, -8.25239754]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb083"
        position={[108.01603699, -0.92499995, -4.74155617]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb084"
        position={[109.93280029, -0.92499995, -1.23071265]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb085"
        position={[111.8495636, -0.92499995, 2.28012848]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb086"
        position={[80.46495056, -0.92499995, -48.94491959]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb087"
        position={[82.3817215, -0.92499995, -45.43407822]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb088"
        position={[84.29849243, -0.92499995, -41.92323685]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb089"
        position={[86.21525574, -0.92499995, -38.41239166]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb090"
        position={[88.13201904, -0.92499995, -34.90155029]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb091"
        position={[99.63261414, -0.92499995, -13.83651066]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb092"
        position={[101.54937744, -0.92499995, -10.32566929]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb093"
        position={[103.46614075, -0.92499995, -6.81482887]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb094"
        position={[105.38290405, -0.92499995, -3.3039875]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb095"
        position={[107.29966736, -0.92499995, 0.20685601]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb096"
        position={[114.96673584, -0.92499995, 14.25022602]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb097"
        position={[116.88349915, -0.92499995, 17.76106644]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb098"
        position={[118.80026245, -0.92499995, 21.27190781]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb099"
        position={[77.83179474, -0.92499995, -47.50732803]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb100"
        position={[79.74856567, -0.92499995, -43.99648666]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb101"
        position={[81.66532898, -0.92499995, -40.48564529]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb102"
        position={[83.58209229, -0.92499995, -36.97480392]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb103"
        position={[85.49885559, -0.92499995, -33.46396255]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb104"
        position={[87.4156189, -0.92499995, -29.95312119]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb105"
        position={[89.33238983, -0.92499995, -26.44227791]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb106"
        position={[91.24916077, -0.92499995, -22.93143654]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb107"
        position={[100.83297729, -0.92499995, -5.37723732]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb108"
        position={[102.7497406, -0.92499995, -1.86639571]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb109"
        position={[112.33357239, -0.92499995, 15.68781376]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb110"
        position={[114.25033569, -0.92499995, 19.19865417]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb111"
        position={[116.16711426, -0.92499995, 22.70949554]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb112"
        position={[118.08387756, -0.92499995, 26.22033691]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb113"
        position={[120.00064087, -0.92499995, 29.73117828]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb114"
        position={[77.11543274, -0.92499995, -42.55891037]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb115"
        position={[79.03219604, -0.92499995, -39.048069]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb116"
        position={[80.94895935, -0.92499995, -35.53722763]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb117"
        position={[82.86573029, -0.92499995, -32.02638626]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb118"
        position={[84.78250122, -0.92499995, -28.51554489]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb119"
        position={[86.69926453, -0.92499995, -25.00470352]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb120"
        position={[88.61602783, -0.92499995, -21.49386215]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb121"
        position={[90.53279114, -0.92499995, -17.98302078]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb122"
        position={[92.44955444, -0.92499995, -14.47218609]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb123"
        position={[109.70045471, -0.92499995, 17.1253891]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb124"
        position={[111.61721802, -0.92499995, 20.63623047]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb125"
        position={[113.53398132, -0.92499995, 24.14707184]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb126"
        position={[115.45074463, -0.92499995, 27.65791321]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb127"
        position={[117.36750793, -0.92499995, 31.16875458]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb128"
        position={[119.2842865, -0.92499995, 34.67959976]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb129"
        position={[121.2010498, -0.92499995, 38.19044113]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb130"
        position={[78.31582642, -0.92499995, -34.09965515]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb131"
        position={[80.23259735, -0.92499995, -30.58881378]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb132"
        position={[82.14936829, -0.92499995, -27.07797241]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb133"
        position={[84.06613159, -0.92499995, -23.56712914]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb134"
        position={[85.9828949, -0.92499995, -20.05628777]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb135"
        position={[87.8996582, -0.92499995, -16.5454464]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb136"
        position={[89.81642151, -0.92499995, -13.03460979]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb137"
        position={[91.73318481, -0.92499995, -9.52377033]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb138"
        position={[93.64994812, -0.92499995, -6.01292992]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb139"
        position={[108.98408508, -0.92499995, 22.07380676]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb140"
        position={[110.90084839, -0.92499995, 25.58464813]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb141"
        position={[112.81761169, -0.92499995, 29.0954895]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb142"
        position={[114.734375, -0.92499995, 32.60633087]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb143"
        position={[116.65115356, -0.92499995, 36.11717224]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb144"
        position={[118.56791687, -0.92499995, 39.62801743]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb145"
        position={[120.48468018, -0.92499995, 43.1388588]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb146"
        position={[79.51623535, -0.92499995, -25.64039612]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb147"
        position={[81.43299866, -0.92499995, -22.12955284]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb148"
        position={[83.34976196, -0.92499995, -18.61871147]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb149"
        position={[85.26652527, -0.92499995, -15.10786915]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb150"
        position={[87.18328857, -0.92499995, -11.5970335]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb151"
        position={[89.10005188, -0.92499995, -8.08619499]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb152"
        position={[91.01681519, -0.92499995, -4.57535362]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb153"
        position={[106.35095215, -0.92499995, 23.51138115]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb154"
        position={[108.26771545, -0.92499995, 27.02222252]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb155"
        position={[110.18447876, -0.92499995, 30.5330658]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb156"
        position={[112.10124207, -0.92499995, 34.04390717]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb157"
        position={[114.01802063, -0.92499995, 37.55475235]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb158"
        position={[115.93478394, -0.92499995, 41.06559372]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb159"
        position={[117.85154724, -0.92499995, 44.57643509]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb160"
        position={[119.76831055, -0.92499995, 48.08727646]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb161"
        position={[121.68507385, -0.92499995, 51.59811783]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb162"
        position={[80.71662903, -0.92499995, -17.18113708]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb163"
        position={[82.63339233, -0.92499995, -13.67029476]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb164"
        position={[84.55015564, -0.92499995, -10.15946102]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb165"
        position={[86.46691895, -0.92499995, -6.64862061]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb166"
        position={[88.38368225, -0.92499995, -3.13777924]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb167"
        position={[105.63458252, -0.92499995, 28.45979691]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb168"
        position={[107.55134583, -0.92499995, 31.97063828]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb169"
        position={[109.46810913, -0.92499995, 35.48147964]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb170"
        position={[111.3848877, -0.92499995, 38.99232483]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb171"
        position={[113.301651, -0.92499995, 42.5031662]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb172"
        position={[115.21841431, -0.92499995, 46.01400757]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb173"
        position={[117.13517761, -0.92499995, 49.52484894]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb174"
        position={[119.05194092, -0.92499995, 53.03569031]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb175"
        position={[81.91702271, -0.92499995, -8.72188568]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb176"
        position={[83.83379364, -0.92499995, -5.21104622]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb177"
        position={[104.91821289, -0.92499995, 33.40821075]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb178"
        position={[106.8349762, -0.92499995, 36.91905594]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb179"
        position={[108.75175476, -0.92499995, 40.42989731]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb180"
        position={[110.66851807, -0.92499995, 43.94073868]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb181"
        position={[112.58528137, -0.92499995, 47.45158005]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb182"
        position={[114.50204468, -0.92499995, 50.96242142]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb183"
        position={[96.53479004, -0.92499995, 24.31326294]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb184"
        position={[106.11862183, -0.92499995, 41.8674736]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb185"
        position={[108.03538513, -0.92499995, 45.37831497]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb186"
        position={[109.95214844, -0.92499995, 48.88915634]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb187"
        position={[111.86891174, -0.92499995, 52.39999771]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb188"
        position={[115.70245361, -0.92499995, 59.42168045]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb189"
        position={[90.06812286, -0.92499995, 18.72915459]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb190"
        position={[91.9848938, -0.92499995, 22.23999596]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb191"
        position={[93.9016571, -0.92499995, 25.75083733]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb192"
        position={[95.81842041, -0.92499995, 29.2616787]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb193"
        position={[97.73518372, -0.92499995, 32.77252197]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb194"
        position={[105.4022522, -0.92499995, 46.81589127]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb195"
        position={[107.3190155, -0.92499995, 50.32673264]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb196"
        position={[109.23577881, -0.92499995, 53.83757401]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb197"
        position={[113.06932068, -0.92499995, 60.85925674]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb198"
        position={[45.26614761, -0.92499995, -57.07178116]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb199"
        position={[47.18291092, -0.92499995, -53.56093979]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb200"
        position={[83.60145569, -0.92499995, 13.14504337]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb201"
        position={[85.51822662, -0.92499995, 16.65588379]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb202"
        position={[87.43499756, -0.92499995, 20.16672707]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb203"
        position={[89.35176086, -0.92499995, 23.67756844]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb204"
        position={[91.26852417, -0.92499995, 27.18840981]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb205"
        position={[93.18528748, -0.92499995, 30.69925117]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb206"
        position={[95.10205078, -0.92499995, 34.21009064]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb207"
        position={[97.01882935, -0.92499995, 37.72093582]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb208"
        position={[104.68588257, -0.92499995, 51.7643013]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb209"
        position={[106.60266113, -0.92499995, 55.27514267]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb210"
        position={[110.43618774, -0.92499995, 62.29682541]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb211"
        position={[42.63301468, -0.92499995, -55.63420868]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb212"
        position={[44.54977798, -0.92499995, -52.12336731]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb213"
        position={[46.4665451, -0.92499995, -48.61252594]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb214"
        position={[48.38331223, -0.92499995, -45.10168457]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb215"
        position={[79.05155945, -0.92499995, 11.07177448]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb216"
        position={[80.96833038, -0.92499995, 14.58261776]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb217"
        position={[82.88510132, -0.92499995, 18.09345818]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb218"
        position={[84.80186462, -0.92499995, 21.60430145]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb219"
        position={[86.71862793, -0.92499995, 25.11514282]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb220"
        position={[88.63539124, -0.92499995, 28.62598419]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb221"
        position={[90.55215454, -0.92499995, 32.13682556]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb222"
        position={[92.46893311, -0.92499995, 35.64766693]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb223"
        position={[94.38569641, -0.92499995, 39.1585083]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb224"
        position={[96.30245972, -0.92499995, 42.66934967]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb225"
        position={[39.99988174, -0.92499995, -54.19663239]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb226"
        position={[41.91664886, -0.92499995, -50.68579102]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb227"
        position={[43.83341599, -0.92499995, -47.17494965]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb228"
        position={[45.75017929, -0.92499995, -43.66410828]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb229"
        position={[47.66694641, -0.92499995, -40.15326691]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb230"
        position={[76.41842651, -0.92499995, 12.50934887]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb231"
        position={[78.33520508, -0.92499995, 16.02019119]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb232"
        position={[80.25196838, -0.92499995, 19.53103256]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb233"
        position={[82.16873169, -0.92499995, 23.04187775]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb234"
        position={[84.085495, -0.92499995, 26.55271912]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb235"
        position={[86.0022583, -0.92499995, 30.06356049]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb236"
        position={[87.91902161, -0.92499995, 33.57440186]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb237"
        position={[89.83580017, -0.92499995, 37.08524323]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb238"
        position={[91.75256348, -0.92499995, 40.59608459]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb239"
        position={[93.66932678, -0.92499995, 44.10692596]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb240"
        position={[95.58609009, -0.92499995, 47.61777115]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb241"
        position={[97.50285339, -0.92499995, 51.12861252]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb242"
        position={[35.4499855, -0.92499995, -56.26990128]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb243"
        position={[37.36675262, -0.92499995, -52.75905991]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb244"
        position={[39.28351974, -0.92499995, -49.24821854]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb245"
        position={[41.20028305, -0.92499995, -45.73737717]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb246"
        position={[43.11704636, -0.92499995, -42.2265358]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb247"
        position={[48.86734772, -0.92499995, -31.69400787]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb248"
        position={[50.78411102, -0.92499995, -28.1831665]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb249"
        position={[52.70087814, -0.92499995, -24.67232513]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb250"
        position={[71.86853027, -0.92499995, 10.43608379]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb251"
        position={[73.78530121, -0.92499995, 13.94692516]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb252"
        position={[75.70207214, -0.92499995, 17.45776749]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb253"
        position={[77.61883545, -0.92499995, 20.96860886]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb254"
        position={[79.53559875, -0.92499995, 24.47945023]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb255"
        position={[81.45236206, -0.92499995, 27.9902916]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb256"
        position={[83.36912537, -0.92499995, 31.50113297]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb257"
        position={[85.2858963, -0.92499995, 35.01197433]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb258"
        position={[87.20266724, -0.92499995, 38.5228157]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb259"
        position={[89.11943054, -0.92499995, 42.03365707]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb260"
        position={[91.03619385, -0.92499995, 45.54449844]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb261"
        position={[92.95295715, -0.92499995, 49.05534363]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb262"
        position={[94.86972046, -0.92499995, 52.566185]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb263"
        position={[30.90008926, -0.92499995, -58.34316635]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb264"
        position={[32.81685638, -0.92499995, -54.83232498]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb265"
        position={[34.7336235, -0.92499995, -51.32148361]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb266"
        position={[36.65038681, -0.92499995, -47.81064224]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb267"
        position={[38.56715393, -0.92499995, -44.29980087]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb268"
        position={[40.48391724, -0.92499995, -40.7889595]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb269"
        position={[44.31744766, -0.92499995, -33.76727676]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb270"
        position={[46.23421478, -0.92499995, -30.25643539]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb271"
        position={[48.1509819, -0.92499995, -26.74559402]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb272"
        position={[50.06774521, -0.92499995, -23.23475266]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb273"
        position={[51.98451233, -0.92499995, -19.72390938]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb274"
        position={[69.23540497, -0.92499995, 11.87365723]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb275"
        position={[71.1521759, -0.92499995, 15.38449764]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb276"
        position={[73.06893921, -0.92499995, 18.89533997]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb277"
        position={[74.98570251, -0.92499995, 22.40618134]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb278"
        position={[76.90246582, -0.92499995, 25.91702652]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb279"
        position={[78.81922913, -0.92499995, 29.42786789]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb280"
        position={[80.73600006, -0.92499995, 32.93870926]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb281"
        position={[82.652771, -0.92499995, 36.44955063]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb282"
        position={[84.5695343, -0.92499995, 39.960392]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb283"
        position={[86.48629761, -0.92499995, 43.47123337]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb284"
        position={[88.40306091, -0.92499995, 46.98207474]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb285"
        position={[90.31983185, -0.92499995, 50.49291992]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb286"
        position={[92.23660278, -0.92499995, 54.00376129]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb287"
        position={[26.35019302, -0.92499995, -60.41643143]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb288"
        position={[28.26695633, -0.92499995, -56.90559387]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb289"
        position={[30.18372345, -0.92499995, -53.3947525]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb290"
        position={[32.10049057, -0.92499995, -49.88391113]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb291"
        position={[34.01725388, -0.92499995, -46.37306976]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb292"
        position={[35.934021, -0.92499995, -42.86222839]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb293"
        position={[39.76755142, -0.92499995, -35.84054184]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb294"
        position={[41.68431473, -0.92499995, -32.32970047]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb295"
        position={[43.60108185, -0.92499995, -28.8188591]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb296"
        position={[45.51784897, -0.92499995, -25.30801773]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb297"
        position={[47.43461227, -0.92499995, -21.79717636]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb298"
        position={[49.35137939, -0.92499995, -18.28633499]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb299"
        position={[68.51903534, -0.92499995, 16.82207108]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb300"
        position={[70.43579865, -0.92499995, 20.33291626]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb301"
        position={[72.35256958, -0.92499995, 23.84375763]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb302"
        position={[74.26933289, -0.92499995, 27.354599]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb303"
        position={[76.18609619, -0.92499995, 30.86544037]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb304"
        position={[78.10286713, -0.92499995, 34.37628174]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb305"
        position={[80.01963806, -0.92499995, 37.88712311]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb306"
        position={[81.93640137, -0.92499995, 41.39796448]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb307"
        position={[83.85316467, -0.92499995, 44.90880585]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb308"
        position={[85.76992798, -0.92499995, 48.41964722]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb309"
        position={[87.68669891, -0.92499995, 51.9304924]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb310"
        position={[21.80028915, -0.92499995, -62.48970413]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb311"
        position={[23.71706009, -0.92499995, -58.97885895]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb312"
        position={[25.63382721, -0.92499995, -55.46801758]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb313"
        position={[27.55059052, -0.92499995, -51.95717621]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb314"
        position={[29.46735764, -0.92499995, -48.44633484]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb315"
        position={[31.38412476, -0.92499995, -44.93549347]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb316"
        position={[37.1344223, -0.92499995, -34.40296936]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb317"
        position={[39.05118561, -0.92499995, -30.89212799]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb318"
        position={[40.96795273, -0.92499995, -27.38128662]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb319"
        position={[42.88471603, -0.92499995, -23.87044525]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb320"
        position={[44.80148315, -0.92499995, -20.35960388]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb321"
        position={[60.13560486, -0.92499995, 7.72712278]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb322"
        position={[67.80267334, -0.92499995, 21.77048874]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb323"
        position={[69.71943665, -0.92499995, 25.28133011]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb324"
        position={[71.63619995, -0.92499995, 28.79217529]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb325"
        position={[73.55297089, -0.92499995, 32.30301666]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb326"
        position={[75.46974182, -0.92499995, 35.81385803]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb327"
        position={[77.38650513, -0.92499995, 39.3246994]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb328"
        position={[79.30326843, -0.92499995, 42.83554077]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb329"
        position={[81.22003174, -0.92499995, 46.34638214]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb330"
        position={[83.13679504, -0.92499995, 49.85722351]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb331"
        position={[85.05357361, -0.92499995, 53.3680687]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb332"
        position={[17.25039673, -0.92499995, -64.56297302]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb333"
        position={[19.16716003, -0.92499995, -61.05212784]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb334"
        position={[21.08393097, -0.92499995, -57.54128647]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb335"
        position={[23.00069427, -0.92499995, -54.0304451]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb336"
        position={[24.9174614, -0.92499995, -50.51960373]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb337"
        position={[26.83422852, -0.92499995, -47.00876236]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb338"
        position={[32.58452225, -0.92499995, -36.47623825]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb339"
        position={[34.50128937, -0.92499995, -32.96539307]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb340"
        position={[36.41805649, -0.92499995, -29.4545517]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb341"
        position={[38.33481979, -0.92499995, -25.94371033]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb342"
        position={[40.25158691, -0.92499995, -22.43286896]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb343"
        position={[55.58570862, -0.92499995, 5.65385628]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb344"
        position={[57.50247574, -0.92499995, 9.16469765]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb345"
        position={[59.41923904, -0.92499995, 12.67553902]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb346"
        position={[65.16954041, -0.92499995, 23.20806503]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb347"
        position={[67.08630371, -0.92499995, 26.7189064]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb348"
        position={[69.00307465, -0.92499995, 30.22974777]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb349"
        position={[70.91983795, -0.92499995, 33.74058914]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb350"
        position={[72.83660889, -0.92499995, 37.25143051]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb351"
        position={[74.75337219, -0.92499995, 40.76227188]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb352"
        position={[76.6701355, -0.92499995, 44.27311325]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb353"
        position={[78.5868988, -0.92499995, 47.78395462]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb354"
        position={[80.50366211, -0.92499995, 51.29479599]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb355"
        position={[12.70049763, -0.92499995, -66.63624573]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb356"
        position={[14.61726856, -0.92499995, -63.12540054]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb357"
        position={[16.53403091, -0.92499995, -59.61455917]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb358"
        position={[18.45079803, -0.92499995, -56.10371017]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb359"
        position={[20.36756516, -0.92499995, -52.5928688]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb360"
        position={[22.28432846, -0.92499995, -49.08202744]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb361"
        position={[24.20109558, -0.92499995, -45.57118607]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb362"
        position={[29.95139313, -0.92499995, -35.03866196]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb363"
        position={[31.86816025, -0.92499995, -31.52782059]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb364"
        position={[33.78492355, -0.92499995, -28.01697922]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb365"
        position={[35.70169067, -0.92499995, -24.50613785]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb366"
        position={[37.61845398, -0.92499995, -20.99529648]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb367"
        position={[51.03581619, -0.92499995, 3.58059549]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb368"
        position={[52.9525795, -0.92499995, 7.09143019]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb369"
        position={[54.8693428, -0.92499995, 10.60227108]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb370"
        position={[56.78610992, -0.92499995, 14.11311245]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb371"
        position={[58.70287704, -0.92499995, 17.62395287]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb372"
        position={[62.53640747, -0.92499995, 24.64563751]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb373"
        position={[64.45317078, -0.92499995, 28.15647888]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb374"
        position={[66.36994171, -0.92499995, 31.66732025]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb375"
        position={[68.28670502, -0.92499995, 35.17816162]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb376"
        position={[70.20346832, -0.92499995, 38.68900681]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb377"
        position={[72.12023926, -0.92499995, 42.19984818]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb378"
        position={[74.03700256, -0.92499995, 45.71068954]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb379"
        position={[75.95376587, -0.92499995, 49.22153091]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb380"
        position={[6.23383808, -0.92499995, -72.22035217]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb381"
        position={[8.15060139, -0.92499995, -68.70950317]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb382"
        position={[10.06736851, -0.92499995, -65.19866943]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb383"
        position={[11.98413563, -0.92499995, -61.68782425]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb384"
        position={[13.90089893, -0.92499995, -58.17698288]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb385"
        position={[15.81766796, -0.92499995, -54.6661377]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb386"
        position={[17.73443222, -0.92499995, -51.15529633]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb387"
        position={[19.65119934, -0.92499995, -47.64445496]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb388"
        position={[25.40149689, -0.92499995, -37.11193085]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb389"
        position={[29.23502731, -0.92499995, -30.09024429]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb390"
        position={[31.15179443, -0.92499995, -26.57940483]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb391"
        position={[33.06855774, -0.92499995, -23.06856346]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb392"
        position={[46.48591995, -0.92499995, 1.50732815]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb393"
        position={[48.40268326, -0.92499995, 5.01816988]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb394"
        position={[50.31944656, -0.92499995, 8.529006]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb395"
        position={[52.23620987, -0.92499995, 12.03984547]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb396"
        position={[54.15297699, -0.92499995, 15.55068684]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb397"
        position={[56.06974411, -0.92499995, 19.06152725]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb398"
        position={[59.90327454, -0.92499995, 26.0832119]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb399"
        position={[61.82004166, -0.92499995, 29.59405327]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb400"
        position={[63.73680878, -0.92499995, 33.10489655]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb401"
        position={[65.65357208, -0.92499995, 36.61573792]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb402"
        position={[67.57034302, -0.92499995, 40.12657928]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb403"
        position={[69.48710632, -0.92499995, 43.63742065]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb404"
        position={[71.40386963, -0.92499995, 47.14826202]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb405"
        position={[73.32064056, -0.92499995, 50.65910339]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb406"
        position={[-0.23282528, -0.92499995, -77.80445862]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb407"
        position={[1.68393803, -0.92499995, -74.29360962]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb408"
        position={[3.60070896, -0.92499995, -70.78277588]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb409"
        position={[5.51746845, -0.92499995, -67.27192688]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb410"
        position={[7.43423939, -0.92499995, -63.76108932]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb411"
        position={[9.35100269, -0.92499995, -60.25024796]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb412"
        position={[11.267766, -0.92499995, -56.73940659]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb413"
        position={[13.18453693, -0.92499995, -53.2285614]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb414"
        position={[15.10130215, -0.92499995, -49.71772003]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb415"
        position={[20.85160065, -0.92499995, -39.18519592]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb416"
        position={[22.76836395, -0.92499995, -35.67435455]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb417"
        position={[28.5186615, -0.92499995, -25.14183044]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb418"
        position={[41.93602371, -0.92499995, -0.56593871]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb419"
        position={[43.85278702, -0.92499995, 2.9449029]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb420"
        position={[45.76955414, -0.92499995, 6.45574474]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb421"
        position={[47.68631363, -0.92499995, 9.96658039]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb422"
        position={[49.60308075, -0.92499995, 13.47742081]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb423"
        position={[51.51984787, -0.92499995, 16.98826218]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb424"
        position={[53.43661118, -0.92499995, 20.49910355]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb425"
        position={[59.18690872, -0.92499995, 31.03162766]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb426"
        position={[61.10367584, -0.92499995, 34.54247284]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb427"
        position={[63.02044296, -0.92499995, 38.05331421]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb428"
        position={[64.93721008, -0.92499995, 41.56415558]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb429"
        position={[66.85397339, -0.92499995, 45.07499695]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb430"
        position={[68.77074432, -0.92499995, 48.58583832]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb431"
        position={[-4.78272152, -0.92499995, -79.87771606]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb432"
        position={[-2.86595821, -0.92499995, -76.36688232]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb433"
        position={[-0.94919109, -0.92499995, -72.85603333]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb434"
        position={[0.96757603, -0.92499995, -69.34519958]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb435"
        position={[2.88433933, -0.92499995, -65.83435059]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb436"
        position={[4.80110645, -0.92499995, -62.32351303]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb437"
        position={[6.71787357, -0.92499995, -58.81267548]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb438"
        position={[8.63463688, -0.92499995, -55.30183411]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb439"
        position={[10.55140591, -0.92499995, -51.79098892]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb440"
        position={[16.30170441, -0.92499995, -41.25846481]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb441"
        position={[18.21846771, -0.92499995, -37.74762344]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb442"
        position={[20.13523483, -0.92499995, -34.23678207]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb443"
        position={[22.05199814, -0.92499995, -30.7259407]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb444"
        position={[39.30289078, -0.92499995, 0.87163568]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb445"
        position={[41.2196579, -0.92499995, 4.38247728]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb446"
        position={[43.13642502, -0.92499995, 7.89331961]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb447"
        position={[45.05318451, -0.92499995, 11.40415478]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb448"
        position={[46.96995163, -0.92499995, 14.91499519]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb449"
        position={[48.88671494, -0.92499995, 18.42583466]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb450"
        position={[50.80348206, -0.92499995, 21.93667603]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb451"
        position={[56.5537796, -0.92499995, 32.46920013]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb452"
        position={[58.47054672, -0.92499995, 35.98004532]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb453"
        position={[60.38731384, -0.92499995, 39.49088669]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb454"
        position={[62.30407715, -0.92499995, 43.00172806]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb455"
        position={[64.22084045, -0.92499995, 46.51256943]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb456"
        position={[66.13761139, -0.92499995, 50.0234108]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb457"
        position={[-9.33262157, -0.92499995, -81.95098877]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb458"
        position={[-7.41585445, -0.92499995, -78.44015503]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb459"
        position={[-5.49909115, -0.92499995, -74.92930603]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb460"
        position={[-3.58232403, -0.92499995, -71.41847229]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb461"
        position={[-1.66555691, -0.92499995, -67.90762329]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb462"
        position={[0.2512064, -0.92499995, -64.39678955]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb463"
        position={[2.16797352, -0.92499995, -60.88594437]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb464"
        position={[4.08474064, -0.92499995, -57.37509918]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb465"
        position={[6.00150585, -0.92499995, -53.86425781]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb466"
        position={[7.91827488, -0.92499995, -50.35341263]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb467"
        position={[13.66857243, -0.92499995, -39.82088852]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb468"
        position={[15.58533764, -0.92499995, -36.31004715]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb469"
        position={[17.5021019, -0.92499995, -32.79920578]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb470"
        position={[19.41886902, -0.92499995, -29.28836441]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb471"
        position={[53.92065048, -0.92499995, 33.90677643]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb472"
        position={[55.83741379, -0.92499995, 37.41762161]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb473"
        position={[57.75418091, -0.92499995, 40.92846298]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb474"
        position={[59.67094421, -0.92499995, 44.43930435]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb475"
        position={[61.58771133, -0.92499995, 47.95014572]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb476"
        position={[-10.04898357, -0.92499995, -77.00257874]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb477"
        position={[-8.13222027, -0.92499995, -73.49172974]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb478"
        position={[-6.21545315, -0.92499995, -69.980896]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb479"
        position={[-4.29868603, -0.92499995, -66.470047]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb480"
        position={[-2.38192272, -0.92499995, -62.95920944]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb481"
        position={[-0.4651556, -0.92499995, -59.44836807]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb482"
        position={[1.45161152, -0.92499995, -55.9375267]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb483"
        position={[3.36837482, -0.92499995, -52.42668533]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb484"
        position={[9.11867428, -0.92499995, -41.89415741]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb485"
        position={[11.0354414, -0.92499995, -38.38331604]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb486"
        position={[12.95220661, -0.92499995, -34.87247467]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb487"
        position={[14.86897182, -0.92499995, -31.3616333]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb488"
        position={[51.28751755, -0.92499995, 35.34435272]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb489"
        position={[53.20428467, -0.92499995, 38.85519409]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb490"
        position={[55.12105179, -0.92499995, 42.36603546]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb491"
        position={[57.03781509, -0.92499995, 45.87687683]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb492"
        position={[58.9545784, -0.92499995, 49.3877182]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb493"
        position={[-10.7653532, -0.92499995, -72.05415344]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb494"
        position={[-8.84858608, -0.92499995, -68.5433197]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb495"
        position={[4.56877804, -0.92499995, -43.96742249]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb496"
        position={[6.48554325, -0.92499995, -40.45658112]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb497"
        position={[8.40231037, -0.92499995, -36.94573975]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb498"
        position={[10.31907558, -0.92499995, -33.43489838]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb499"
        position={[12.2358408, -0.92499995, -29.92405701]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb500"
        position={[31.4034996, -0.92499995, 5.1843586]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb501"
        position={[33.32026291, -0.92499995, 8.69520092]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb502"
        position={[35.23703003, -0.92499995, 12.20604229]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb503"
        position={[37.15379333, -0.92499995, 15.71687794]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb504"
        position={[39.07055664, -0.92499995, 19.22771645]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb505"
        position={[40.98732376, -0.92499995, 22.73855782]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb506"
        position={[42.90408707, -0.92499995, 26.24939919]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb507"
        position={[44.82085419, -0.92499995, 29.76024055]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb508"
        position={[50.57115173, -0.92499995, 40.29277039]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb509"
        position={[52.48791885, -0.92499995, 43.80361176]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb510"
        position={[54.40468216, -0.92499995, 47.31445313]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb511"
        position={[56.32144928, -0.92499995, 50.82529449]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb512"
        position={[1.93564701, -0.92499995, -42.52985001]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb513"
        position={[3.85241032, -0.92499995, -39.01900864]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb514"
        position={[5.76917744, -0.92499995, -35.50816727]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb515"
        position={[7.68594456, -0.92499995, -31.9973259]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb516"
        position={[9.60270786, -0.92499995, -28.48648453]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb517"
        position={[26.85359955, -0.92499995, 3.11109114]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb518"
        position={[28.77036667, -0.92499995, 6.62193298]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb519"
        position={[30.68713379, -0.92499995, 10.13277531]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb520"
        position={[32.60389709, -0.92499995, 13.64361668]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb521"
        position={[34.5206604, -0.92499995, 17.15445137]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb522"
        position={[36.43742752, -0.92499995, 20.66529083]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb523"
        position={[38.35419083, -0.92499995, 24.1761322]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb524"
        position={[40.27095795, -0.92499995, 27.68697357]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb525"
        position={[42.18772125, -0.92499995, 31.19781494]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb526"
        position={[44.10448837, -0.92499995, 34.70865631]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb527"
        position={[47.93802261, -0.92499995, 41.73034286]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb528"
        position={[49.85478592, -0.92499995, 45.24118423]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb529"
        position={[51.77155304, -0.92499995, 48.7520256]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb530"
        position={[-0.69748592, -0.92499995, -41.09227371]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb531"
        position={[1.2192812, -0.92499995, -37.58143234]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb532"
        position={[3.13604832, -0.92499995, -34.07059097]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb533"
        position={[5.05281162, -0.92499995, -30.5597496]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb534"
        position={[6.96957874, -0.92499995, -27.04891014]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb535"
        position={[24.22047043, -0.92499995, 4.54866552]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb536"
        position={[26.13723755, -0.92499995, 8.05950832]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb537"
        position={[28.05400085, -0.92499995, 11.57034969]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb538"
        position={[29.97076797, -0.92499995, 15.08119106]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb539"
        position={[31.88753128, -0.92499995, 18.59202576]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb540"
        position={[33.80429459, -0.92499995, 22.10286522]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb541"
        position={[35.72106171, -0.92499995, 25.61370659]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb542"
        position={[37.63782501, -0.92499995, 29.12454796]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb543"
        position={[39.55459213, -0.92499995, 32.63539124]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb544"
        position={[41.47135925, -0.92499995, 36.1462326]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb545"
        position={[-1.41385174, -0.92499995, -36.14385986]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb546"
        position={[0.50291538, -0.92499995, -32.63301849]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb547"
        position={[2.4196825, -0.92499995, -29.12217712]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb548"
        position={[4.33644581, -0.92499995, -25.61133575]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb549"
        position={[6.25321293, -0.92499995, -22.10049438]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb550"
        position={[23.50410461, -0.92499995, 9.49708271]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb551"
        position={[25.42087173, -0.92499995, 13.00792408]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb552"
        position={[27.33763504, -0.92499995, 16.5187645]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb553"
        position={[29.25439835, -0.92499995, 20.02960014]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb554"
        position={[31.17116547, -0.92499995, 23.54043961]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb555"
        position={[33.08792877, -0.92499995, 27.05128098]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb556"
        position={[35.00469589, -0.92499995, 30.56212234]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb557"
        position={[36.9214592, -0.92499995, 34.07296371]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb558"
        position={[38.83822632, -0.92499995, 37.5838089]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb559"
        position={[40.75499344, -0.92499995, 41.09465027]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb560"
        position={[-4.04698086, -0.92499995, -34.70628357]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb561"
        position={[-2.13021755, -0.92499995, -31.1954422]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb562"
        position={[-0.21345043, -0.92499995, -27.68460083]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb563"
        position={[1.70331669, -0.92499995, -24.17376137]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb564"
        position={[3.62007999, -0.92499995, -20.66292]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb565"
        position={[5.53684711, -0.92499995, -17.15207672]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb566"
        position={[7.45361233, -0.92499995, -13.6412344]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb567"
        position={[22.7877388, -0.92499995, 14.44549847]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb568"
        position={[24.70450592, -0.92499995, 17.95633888]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb569"
        position={[26.62126541, -0.92499995, 21.46717453]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb570"
        position={[28.53803253, -0.92499995, 24.97801399]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb571"
        position={[30.45479584, -0.92499995, 28.48885536]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb572"
        position={[32.37156296, -0.92499995, 31.99969482]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb573"
        position={[34.28833008, -0.92499995, 35.51053619]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb574"
        position={[36.2050972, -0.92499995, 39.02138138]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb575"
        position={[38.1218605, -0.92499995, 42.53222275]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb576"
        position={[40.03862762, -0.92499995, 46.04306793]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb577"
        position={[41.95539474, -0.92499995, 49.5539093]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb578"
        position={[43.87215805, -0.92499995, 53.06475067]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb579"
        position={[-6.68011379, -0.92499995, -33.26871109]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb580"
        position={[-4.76334667, -0.92499995, -29.75786972]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb581"
        position={[-2.84657955, -0.92499995, -26.24702835]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb582"
        position={[-0.92981625, -0.92499995, -22.73618698]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb583"
        position={[0.98694706, -0.92499995, -19.22534561]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb584"
        position={[2.90371799, -0.92499995, -15.71450138]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb585"
        position={[4.8204813, -0.92499995, -12.20366001]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb586"
        position={[6.73724842, -0.92499995, -8.6928196]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb587"
        position={[20.15460968, -0.92499995, 15.88307285]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb588"
        position={[22.07137299, -0.92499995, 19.39391327]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb589"
        position={[23.98813629, -0.92499995, 22.90474701]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb590"
        position={[25.9048996, -0.92499995, 26.41558838]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb591"
        position={[27.82166672, -0.92499995, 29.92642975]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb592"
        position={[29.73843384, -0.92499995, 33.43727112]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb593"
        position={[31.65519714, -0.92499995, 36.94811249]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb594"
        position={[33.57196426, -0.92499995, 40.45895767]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb595"
        position={[35.48873138, -0.92499995, 43.96979904]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb596"
        position={[37.4054985, -0.92499995, 47.48064041]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb597"
        position={[39.32226181, -0.92499995, 50.99148178]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb598"
        position={[41.23902512, -0.92499995, 54.50232315]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb599"
        position={[-9.31324673, -0.92499995, -31.8311348]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb600"
        position={[-7.39647579, -0.92499995, -28.32029343]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb601"
        position={[-5.47971249, -0.92499995, -24.80945396]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb602"
        position={[-3.56294918, -0.92499995, -21.29861259]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb603"
        position={[-1.64618206, -0.92499995, -17.78777122]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb604"
        position={[0.27058506, -0.92499995, -14.27692699]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb605"
        position={[2.18734837, -0.92499995, -10.76608562]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb606"
        position={[4.10411549, -0.92499995, -7.25524521]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb607"
        position={[6.02088261, -0.92499995, -3.74440384]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb608"
        position={[19.43824387, -0.92499995, 20.83148766]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb609"
        position={[21.35500336, -0.92499995, 24.3423233]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb610"
        position={[23.27177048, -0.92499995, 27.85316277]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb611"
        position={[25.18853378, -0.92499995, 31.36400223]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb612"
        position={[27.1053009, -0.92499995, 34.87484741]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb613"
        position={[29.02206802, -0.92499995, 38.38568497]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb614"
        position={[30.93883514, -0.92499995, 41.89653015]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb615"
        position={[32.85559845, -0.92499995, 45.40737152]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb616"
        position={[-10.02960873, -0.92499995, -26.88272095]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb617"
        position={[-8.11284542, -0.92499995, -23.37187958]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb618"
        position={[-6.1960783, -0.92499995, -19.86103821]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb619"
        position={[-4.27931118, -0.92499995, -16.35019684]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb620"
        position={[-2.36254787, -0.92499995, -12.83935261]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb621"
        position={[-0.44578075, -0.92499995, -9.32851124]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb622"
        position={[1.47098637, -0.92499995, -5.81767082]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb623"
        position={[3.38774967, -0.92499995, -2.30682921]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb624"
        position={[5.30451679, -0.92499995, 1.20401204]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb625"
        position={[18.72187424, -0.92499995, 25.77989578]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb626"
        position={[20.63863754, -0.92499995, 29.29073715]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb627"
        position={[22.55540466, -0.92499995, 32.80157852]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb628"
        position={[24.47217178, -0.92499995, 36.31241989]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb629"
        position={[26.38893509, -0.92499995, 39.82326126]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb630"
        position={[28.30570221, -0.92499995, 43.33410263]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb631"
        position={[30.22246933, -0.92499995, 46.844944]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb632"
        position={[-12.66274166, -0.92499995, -25.44514656]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb633"
        position={[-10.74597454, -0.92499995, -21.93430519]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb634"
        position={[-8.82920742, -0.92499995, -18.42346382]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb635"
        position={[-6.91244411, -0.92499995, -14.9126215]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb636"
        position={[-4.99567699, -0.92499995, -11.40177822]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb637"
        position={[-3.07890987, -0.92499995, -7.89093781]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb638"
        position={[-1.16214657, -0.92499995, -4.38009644]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb639"
        position={[0.75462055, -0.92499995, -0.86925483]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb640"
        position={[2.67138767, -0.92499995, 2.6415863]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb641"
        position={[16.0887413, -0.92499995, 27.21747208]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb642"
        position={[18.00550842, -0.92499995, 30.72831154]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb643"
        position={[19.92227173, -0.92499995, 34.239151]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb644"
        position={[21.83903885, -0.92499995, 37.74999619]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb645"
        position={[-15.29587078, -0.92499995, -24.00757217]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb646"
        position={[-13.37910366, -0.92499995, -20.4967308]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb647"
        position={[-11.46234035, -0.92499995, -16.98588943]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb648"
        position={[-9.54557705, -0.92499995, -13.47504711]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb649"
        position={[-7.62880611, -0.92499995, -9.96420383]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb650"
        position={[-5.71204281, -0.92499995, -6.45336342]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb651"
        position={[-3.79527569, -0.92499995, -2.94252181]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb652"
        position={[-1.87851238, -0.92499995, 0.56831956]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb653"
        position={[0.03825474, -0.92499995, 4.07916069]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb654"
        position={[13.45561123, -0.92499995, 28.65504456]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb655"
        position={[15.37237644, -0.92499995, 32.16588593]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb656"
        position={[17.28914261, -0.92499995, 35.67672729]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb657"
        position={[19.20590973, -0.92499995, 39.18756866]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb658"
        position={[10.8224802, -0.92499995, 30.09262085]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb659"
        position={[12.73924541, -0.92499995, 33.60346222]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb660"
        position={[14.65601063, -0.92499995, 37.11429977]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb661"
        position={[16.57277679, -0.92499995, 40.62514114]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb662"
        position={[-23.19526672, -0.92499995, -19.69484901]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb663"
        position={[-21.2784996, -0.92499995, -16.18400764]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb664"
        position={[-19.36173248, -0.92499995, -12.67316532]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb665"
        position={[-17.44496918, -0.92499995, -9.16232395]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb666"
        position={[-15.5282011, -0.92499995, -5.65148163]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb667"
        position={[-13.61143398, -0.92499995, -2.14064002]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb668"
        position={[-11.69467068, -0.92499995, 1.37020123]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb669"
        position={[-9.77790356, -0.92499995, 4.88104248]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb670"
        position={[-7.86113644, -0.92499995, 8.3918848]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb671"
        position={[-5.94437313, -0.92499995, 11.90272617]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb672"
        position={[-25.82839966, -0.92499995, -18.25727463]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb673"
        position={[-23.91163254, -0.92499995, -14.7464323]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb674"
        position={[-21.99486542, -0.92499995, -11.23559093]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb675"
        position={[-20.07810211, -0.92499995, -7.72475052]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb676"
        position={[-18.16133499, -0.92499995, -4.21390724]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb677"
        position={[-16.24456787, -0.92499995, -0.70306563]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb678"
        position={[-14.32780361, -0.92499995, 2.8077755]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb679"
        position={[-12.41103649, -0.92499995, 6.31861687]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb680"
        position={[-10.49426937, -0.92499995, 9.82945919]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb681"
        position={[-8.57750607, -0.92499995, 13.34030247]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb682"
        position={[1.00632191, -0.92499995, 30.89450836]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb683"
        position={[2.92308521, -0.92499995, 34.4053421]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb684"
        position={[4.83985043, -0.92499995, 37.91618347]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb685"
        position={[6.75661564, -0.92499995, 41.42702484]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb686"
        position={[8.67338276, -0.92499995, 44.93786621]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb687"
        position={[-30.3782959, -0.92499995, -20.33054161]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb688"
        position={[-28.46152496, -0.92499995, -16.81970024]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb689"
        position={[-26.54476166, -0.92499995, -13.30885792]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb690"
        position={[-24.62799835, -0.92499995, -9.79801655]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb691"
        position={[-22.71123123, -0.92499995, -6.28717613]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb692"
        position={[-20.79446411, -0.92499995, -2.77633262]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb693"
        position={[-18.87770081, -0.92499995, 0.73450875]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb694"
        position={[-16.96093369, -0.92499995, 4.24534988]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb695"
        position={[-15.04416561, -0.92499995, 7.75619173]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb696"
        position={[-13.12740231, -0.92499995, 11.26703358]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb697"
        position={[-11.21063519, -0.92499995, 14.77787495]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb698"
        position={[-1.62680721, -0.92499995, 32.33208466]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb699"
        position={[0.28995609, -0.92499995, 35.8429184]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb700"
        position={[2.20672321, -0.92499995, 39.35375595]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb701"
        position={[4.12348652, -0.92499995, 42.86459732]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb702"
        position={[6.04025364, -0.92499995, 46.37543869]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb703"
        position={[-33.01142883, -0.92499995, -18.89296722]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb704"
        position={[-31.0946579, -0.92499995, -15.3821249]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb705"
        position={[-29.17789459, -0.92499995, -11.87128353]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb706"
        position={[-27.26113129, -0.92499995, -8.36044312]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb707"
        position={[-25.34436417, -0.92499995, -4.84960175]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb708"
        position={[-23.42759705, -0.92499995, -1.33875823]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb709"
        position={[-21.51083374, -0.92499995, 2.1720829]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb710"
        position={[-19.59406662, -0.92499995, 5.68292427]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb711"
        position={[-17.6772995, -0.92499995, 9.19376659]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb712"
        position={[-15.76053524, -0.92499995, 12.70460796]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb713"
        position={[-13.84376812, -0.92499995, 16.21545029]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb714"
        position={[-4.25994015, -0.92499995, 33.76965714]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb715"
        position={[-2.34317684, -0.92499995, 37.28049088]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb716"
        position={[-0.42640972, -0.92499995, 40.79133224]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb717"
        position={[1.49035358, -0.92499995, 44.30217361]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb718"
        position={[3.4071207, -0.92499995, 47.81301498]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb719"
        position={[-39.47808838, -0.92499995, -24.47707367]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb720"
        position={[-37.56131744, -0.92499995, -20.9662323]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb721"
        position={[-35.64455414, -0.92499995, -17.45539284]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb722"
        position={[-33.72779083, -0.92499995, -13.94455051]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb723"
        position={[-31.81102753, -0.92499995, -10.43370914]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb724"
        position={[-29.89425659, -0.92499995, -6.92286873]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb725"
        position={[-27.97749329, -0.92499995, -3.41202736]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb726"
        position={[-26.06072617, -0.92499995, 0.09881616]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb727"
        position={[-24.14395905, -0.92499995, 3.60965729]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb728"
        position={[-22.22719574, -0.92499995, 7.12049913]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb729"
        position={[-20.31042862, -0.92499995, 10.63134098]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb730"
        position={[-18.3936615, -0.92499995, 14.14218235]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb731"
        position={[-16.47689819, -0.92499995, 17.65302277]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb732"
        position={[-6.89306927, -0.92499995, 35.20722961]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb733"
        position={[-4.97630596, -0.92499995, 38.71806717]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb734"
        position={[-3.05953884, -0.92499995, 42.22890854]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb735"
        position={[-1.14277554, -0.92499995, 45.73974991]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb736"
        position={[0.77399158, -0.92499995, 49.25059128]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb737"
        position={[-42.11122131, -0.92499995, -23.03950119]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb738"
        position={[-40.19445038, -0.92499995, -19.52865982]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb739"
        position={[-38.27768707, -0.92499995, -16.01781845]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb740"
        position={[-36.36092377, -0.92499995, -12.50697613]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb741"
        position={[-34.44416046, -0.92499995, -8.99613476]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb742"
        position={[-32.52738953, -0.92499995, -5.48529434]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb743"
        position={[-30.61062622, -0.92499995, -1.97445273]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb744"
        position={[-28.69385529, -0.92499995, 1.53639042]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb745"
        position={[-26.77709198, -0.92499995, 5.04723167]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb746"
        position={[-24.86032867, -0.92499995, 8.558074]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb747"
        position={[-22.94356155, -0.92499995, 12.06891537]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb748"
        position={[-21.02679443, -0.92499995, 15.57975674]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb749"
        position={[-19.11003113, -0.92499995, 19.09059906]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb750"
        position={[-9.5262022, -0.92499995, 36.64480591]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb751"
        position={[-7.6094389, -0.92499995, 40.15563965]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb752"
        position={[-5.69267178, -0.92499995, 43.66648102]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb753"
        position={[-3.77590847, -0.92499995, 47.17732239]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb754"
        position={[-1.85914135, -0.92499995, 50.68816376]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb755"
        position={[-40.91082001, -0.92499995, -14.58024502]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb756"
        position={[-38.9940567, -0.92499995, -11.06940365]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb757"
        position={[-37.0772934, -0.92499995, -7.55856323]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb758"
        position={[-35.16052246, -0.92499995, -4.04772186]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb759"
        position={[-33.24375916, -0.92499995, -0.53688025]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb760"
        position={[-31.32698822, -0.92499995, 2.97396469]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb761"
        position={[-29.41022491, -0.92499995, 6.48480606]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb762"
        position={[-27.49346161, -0.92499995, 9.99564838]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb763"
        position={[-25.57669449, -0.92499995, 13.50648975]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb764"
        position={[-23.65992737, -0.92499995, 17.01733017]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb765"
        position={[-21.74316406, -0.92499995, 20.52817154]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb766"
        position={[-12.15933514, -0.92499995, 38.08237839]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb767"
        position={[-10.24257183, -0.92499995, 41.59321594]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb768"
        position={[-8.32580471, -0.92499995, 45.1040535]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb769"
        position={[-6.4090414, -0.92499995, 48.61489487]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb770"
        position={[-4.49227428, -0.92499995, 52.12573624]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb771"
        position={[-41.62718201, -0.92499995, -9.63182735]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb772"
        position={[-39.7104187, -0.92499995, -6.12098694]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb773"
        position={[-37.7936554, -0.92499995, -2.61014533]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb774"
        position={[-35.87688446, -0.92499995, 0.90069604]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb775"
        position={[-33.96012115, -0.92499995, 4.41153717]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb776"
        position={[-32.04335785, -0.92499995, 7.92237902]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb777"
        position={[-30.12658691, -0.92499995, 11.43322086]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb778"
        position={[-28.20982361, -0.92499995, 14.94406223]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb779"
        position={[-26.2930603, -0.92499995, 18.45490456]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb780"
        position={[-24.37629318, -0.92499995, 21.96574783]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb781"
        position={[-14.79246426, -0.92499995, 39.51995468]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb782"
        position={[-12.87570095, -0.92499995, 43.03078842]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb783"
        position={[-10.95893383, -0.92499995, 46.54162979]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb784"
        position={[-9.04217052, -0.92499995, 50.05247116]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb785"
        position={[-7.1254034, -0.92499995, 53.56331253]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb786"
        position={[-42.34354401, -0.92499995, -4.68341446]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb787"
        position={[-40.4267807, -0.92499995, -1.17257285]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb788"
        position={[-38.5100174, -0.92499995, 2.33826828]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb789"
        position={[-36.59325409, -0.92499995, 5.84911346]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb790"
        position={[-34.67648315, -0.92499995, 9.35995579]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb791"
        position={[-32.75971985, -0.92499995, 12.87079716]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb792"
        position={[-30.84295654, -0.92499995, 16.38163757]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb793"
        position={[-28.92618561, -0.92499995, 19.89247894]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb794"
        position={[-27.0094223, -0.92499995, 23.40332031]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb795"
        position={[-17.42559433, -0.92499995, 40.95752716]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb796"
        position={[-15.50883007, -0.92499995, 44.4683609]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb797"
        position={[-13.59206295, -0.92499995, 47.97920227]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb798"
        position={[-11.67529964, -0.92499995, 51.49004364]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb799"
        position={[-9.75853252, -0.92499995, 55.00088501]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb800"
        position={[-43.05991364, -0.92499995, 0.26499963]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb801"
        position={[-41.14315033, -0.92499995, 3.77584076]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb802"
        position={[-39.22637939, -0.92499995, 7.28668261]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb803"
        position={[-37.30961609, -0.92499995, 10.79752445]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb804"
        position={[-35.39284515, -0.92499995, 14.30836582]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb805"
        position={[-33.47608185, -0.92499995, 17.81920624]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb806"
        position={[-31.55931854, -0.92499995, 21.33004761]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb807"
        position={[-29.64254761, -0.92499995, 24.84089279]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb808"
        position={[-20.05872345, -0.92499995, 42.39509964]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb809"
        position={[-18.14196014, -0.92499995, 45.90593338]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb810"
        position={[-16.22519302, -0.92499995, 49.41677475]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb811"
        position={[-14.30842876, -0.92499995, 52.92761612]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb812"
        position={[-12.39166164, -0.92499995, 56.43845749]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb813"
        position={[-50.95930481, -0.92499995, 4.57772446]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb814"
        position={[-49.0425415, -0.92499995, 8.08856678]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb815"
        position={[-47.12577057, -0.92499995, 11.59941196]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb816"
        position={[-45.20900726, -0.92499995, 15.11025333]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb817"
        position={[-43.29224396, -0.92499995, 18.62109375]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb818"
        position={[-41.37548065, -0.92499995, 22.13193512]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb819"
        position={[-39.45870972, -0.92499995, 25.64277649]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb820"
        position={[-27.95811462, -0.92499995, 46.70782471]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb821"
        position={[-26.04135513, -0.92499995, 50.21865845]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb822"
        position={[-24.12458801, -0.92499995, 53.72949982]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb823"
        position={[-22.20782471, -0.92499995, 57.24034119]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb824"
        position={[-20.29105759, -0.92499995, 60.75118256]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb825"
        position={[-53.59243774, -0.92499995, 6.01529694]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb826"
        position={[-51.67567444, -0.92499995, 9.52613926]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb827"
        position={[-49.7589035, -0.92499995, 13.03698063]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb828"
        position={[-47.8421402, -0.92499995, 16.54782104]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb829"
        position={[-45.92537689, -0.92499995, 20.05866241]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb830"
        position={[-44.00861359, -0.92499995, 23.56950378]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb831"
        position={[-42.09184265, -0.92499995, 27.08034515]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb832"
        position={[-30.59124756, -0.92499995, 48.14539719]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb833"
        position={[-28.67448425, -0.92499995, 51.65623093]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb834"
        position={[-26.75772095, -0.92499995, 55.16707611]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb835"
        position={[-24.84095764, -0.92499995, 58.67791748]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb836"
        position={[-22.92419052, -0.92499995, 62.18875885]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb837"
        position={[-21.0074234, -0.92499995, 65.69960022]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb838"
        position={[-56.22557068, -0.92499995, 7.45287371]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb839"
        position={[-54.30880737, -0.92499995, 10.96371555]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb840"
        position={[-52.39203644, -0.92499995, 14.47455692]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb841"
        position={[-50.47527313, -0.92499995, 17.98539734]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb842"
        position={[-48.55850983, -0.92499995, 21.49623871]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb843"
        position={[-46.64174652, -0.92499995, 25.00708008]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb844"
        position={[-33.22438049, -0.92499995, 49.58297348]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb845"
        position={[-31.30761719, -0.92499995, 53.09380722]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb846"
        position={[-29.39085388, -0.92499995, 56.6046524]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb847"
        position={[-27.47409058, -0.92499995, 60.11549377]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb848"
        position={[-25.55732346, -0.92499995, 63.62633133]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb849"
        position={[-23.64055634, -0.92499995, 67.13717651]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb850"
        position={[-21.72379303, -0.92499995, 70.64801025]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb851"
        position={[-19.80702591, -0.92499995, 74.15885925]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb852"
        position={[-17.89025879, -0.92499995, 77.66969299]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb853"
        position={[-58.85869217, -0.92499995, 8.89044666]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb854"
        position={[-56.94193268, -0.92499995, 12.40128803]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb855"
        position={[-55.02516937, -0.92499995, 15.91213322]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb856"
        position={[-53.10839844, -0.92499995, 19.42297363]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb857"
        position={[-51.19163513, -0.92499995, 22.933815]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb858"
        position={[-33.94074249, -0.92499995, 54.5313797]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb859"
        position={[-32.02397919, -0.92499995, 58.04222107]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb860"
        position={[-30.10721588, -0.92499995, 61.55306244]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb861"
        position={[-28.19045258, -0.92499995, 65.06390381]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb862"
        position={[-26.27368164, -0.92499995, 68.57474518]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb863"
        position={[-24.35691833, -0.92499995, 72.08558655]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb864"
        position={[-22.44015121, -0.92499995, 75.59643555]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb865"
        position={[-20.52338409, -0.92499995, 79.10726929]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb866"
        position={[-18.60662079, -0.92499995, 82.61811829]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb867"
        position={[-61.4918251, -0.92499995, 10.32802296]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb868"
        position={[-59.5750618, -0.92499995, 13.83886433]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb869"
        position={[-57.65829849, -0.92499995, 17.34970856]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb870"
        position={[-55.74153137, -0.92499995, 20.86054993]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb871"
        position={[-36.57387543, -0.92499995, 55.96895599]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb872"
        position={[-34.65711212, -0.92499995, 59.47979736]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb873"
        position={[-32.74034882, -0.92499995, 62.99063873]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb874"
        position={[-30.82358551, -0.92499995, 66.5014801]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb875"
        position={[-28.90681458, -0.92499995, 70.01231384]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb876"
        position={[-26.99005127, -0.92499995, 73.52316284]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb877"
        position={[-25.07328415, -0.92499995, 77.03401184]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb878"
        position={[-23.15651703, -0.92499995, 80.54484558]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb879"
        position={[-21.23975372, -0.92499995, 84.05569458]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb880"
        position={[-64.12495422, -0.92499995, 11.76559544]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb881"
        position={[-62.20819473, -0.92499995, 15.27643681]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb882"
        position={[-60.29143143, -0.92499995, 18.78727722]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb883"
        position={[-58.37466812, -0.92499995, 22.29811859]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb884"
        position={[-37.29024506, -0.92499995, 60.91737366]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb885"
        position={[-35.37348175, -0.92499995, 64.4282074]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb886"
        position={[-33.45671844, -0.92499995, 67.9390564]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb887"
        position={[-31.53994751, -0.92499995, 71.44989014]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb888"
        position={[-29.6231842, -0.92499995, 74.96073914]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb889"
        position={[-27.70641327, -0.92499995, 78.47157288]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb890"
        position={[-25.78964996, -0.92499995, 81.98242188]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb891"
        position={[-23.87288666, -0.92499995, 85.49325562]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb892"
        position={[-21.95611954, -0.92499995, 89.00410461]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb893"
        position={[-66.75808716, -0.92499995, 13.20317173]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb894"
        position={[-64.84132385, -0.92499995, 16.71401215]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb895"
        position={[-62.92456436, -0.92499995, 20.22485352]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb896"
        position={[-61.00780106, -0.92499995, 23.73569489]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb897"
        position={[-39.92337799, -0.92499995, 62.35494995]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb898"
        position={[-38.00661469, -0.92499995, 65.86578369]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb899"
        position={[-36.08985138, -0.92499995, 69.37663269]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb900"
        position={[-34.17308044, -0.92499995, 72.88746643]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb901"
        position={[-32.25631714, -0.92499995, 76.39831543]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb902"
        position={[-30.3395462, -0.92499995, 79.90914917]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb903"
        position={[-28.4227829, -0.92499995, 83.41999817]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb904"
        position={[-26.50601959, -0.92499995, 86.93083191]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb905"
        position={[-24.58925247, -0.92499995, 90.44168091]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb906"
        position={[-69.39122009, -0.92499995, 14.64074421]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb907"
        position={[-67.47445679, -0.92499995, 18.15158463]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb908"
        position={[-65.55767822, -0.92499995, 21.66242981]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb909"
        position={[-63.64091873, -0.92499995, 25.17327118]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb910"
        position={[-42.5565033, -0.92499995, 63.7925148]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb911"
        position={[-40.63973999, -0.92499995, 67.30335999]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb912"
        position={[-38.72296906, -0.92499995, 70.81419373]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb913"
        position={[-36.80620575, -0.92499995, 74.32504272]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb914"
        position={[-34.88944244, -0.92499995, 77.83589172]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb915"
        position={[-32.97267914, -0.92499995, 81.34672546]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb916"
        position={[-31.0559082, -0.92499995, 84.85757446]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb917"
        position={[-29.1391449, -0.92499995, 88.3684082]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb918"
        position={[-27.22237778, -0.92499995, 91.8792572]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb919"
        position={[-73.94111633, -0.92499995, 12.56747913]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb920"
        position={[-72.02435303, -0.92499995, 16.07831955]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb921"
        position={[-70.10758972, -0.92499995, 19.58916092]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb922"
        position={[-68.19081116, -0.92499995, 23.1000061]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb923"
        position={[-66.27404785, -0.92499995, 26.61084747]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb924"
        position={[-45.18963623, -0.92499995, 65.23009491]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb925"
        position={[-43.27287292, -0.92499995, 68.74093628]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb926"
        position={[-41.35610199, -0.92499995, 72.25177002]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb927"
        position={[-29.8555069, -0.92499995, 93.3168335]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb928"
        position={[-86.15808105, -0.92499995, -3.54916]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb929"
        position={[-84.24131775, -0.92499995, -0.03831458]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb930"
        position={[-82.32453918, -0.92499995, 3.47252655]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb931"
        position={[-80.40777588, -0.92499995, 6.98336792]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb932"
        position={[-78.49101257, -0.92499995, 10.49421024]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb933"
        position={[-76.57424927, -0.92499995, 14.00505161]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb934"
        position={[-74.65748596, -0.92499995, 17.51589203]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb935"
        position={[-72.74072266, -0.92499995, 21.0267334]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb936"
        position={[-70.82394409, -0.92499995, 24.53757477]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb937"
        position={[-68.90718079, -0.92499995, 28.04841614]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb938"
        position={[-32.48863983, -0.92499995, 94.75439453]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb939"
        position={[-88.79121399, -0.92499995, -2.11158347]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb940"
        position={[-86.87445068, -0.92499995, 1.39926159]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb941"
        position={[-84.95767212, -0.92499995, 4.91010284]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb942"
        position={[-83.04090881, -0.92499995, 8.42094517]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb943"
        position={[-81.12414551, -0.92499995, 11.93178654]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb944"
        position={[-79.2073822, -0.92499995, 15.44262791]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb945"
        position={[-77.2906189, -0.92499995, 18.95346832]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb946"
        position={[-75.37385559, -0.92499995, 22.46430969]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb947"
        position={[-73.45707703, -0.92499995, 25.97515106]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb948"
        position={[-71.54031372, -0.92499995, 29.48599243]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb949"
        position={[-50.4559021, -0.92499995, 68.10523987]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb950"
        position={[-48.53913879, -0.92499995, 71.61608887]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb951"
        position={[-46.62236786, -0.92499995, 75.12692261]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb952"
        position={[-35.12177277, -0.92499995, 96.19197083]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb953"
        position={[-91.42433167, -0.92499995, -0.67401099]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb954"
        position={[-89.50756836, -0.92499995, 2.83683395]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb955"
        position={[-87.59080505, -0.92499995, 6.34767532]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb956"
        position={[-85.67404175, -0.92499995, 9.85851765]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb957"
        position={[-83.75727844, -0.92499995, 13.36935902]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb958"
        position={[-81.84049988, -0.92499995, 16.88019943]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb959"
        position={[-79.92373657, -0.92499995, 20.3910408]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb960"
        position={[-78.00697327, -0.92499995, 23.90188217]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb961"
        position={[-76.09020996, -0.92499995, 27.41272736]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb962"
        position={[-74.17344666, -0.92499995, 30.92356873]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb963"
        position={[-53.0890274, -0.92499995, 69.54281616]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb964"
        position={[-51.1722641, -0.92499995, 73.0536499]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb965"
        position={[-49.25550079, -0.92499995, 76.5644989]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb966"
        position={[-37.7549057, -0.92499995, 97.62954712]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb967"
        position={[-94.0574646, -0.92499995, 0.7635653]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb968"
        position={[-92.14070129, -0.92499995, 4.27441025]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb969"
        position={[-90.22393799, -0.92499995, 7.78525209]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb970"
        position={[-88.30717468, -0.92499995, 11.29609394]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb971"
        position={[-86.39041138, -0.92499995, 14.80693531]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb972"
        position={[-84.47363281, -0.92499995, 18.31777573]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb973"
        position={[-82.55686951, -0.92499995, 21.8286171]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb974"
        position={[-80.6401062, -0.92499995, 25.33945847]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb975"
        position={[-78.7233429, -0.92499995, 28.85030365]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb976"
        position={[-76.80657959, -0.92499995, 32.36114502]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb977"
        position={[-55.72216034, -0.92499995, 70.98039246]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb978"
        position={[-53.80539703, -0.92499995, 74.4912262]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb979"
        position={[-51.88863373, -0.92499995, 78.0020752]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb980"
        position={[-40.38803864, -0.92499995, 99.06712341]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb981"
        position={[-96.69059753, -0.92499995, 2.20113754]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb982"
        position={[-94.77383423, -0.92499995, 5.71198273]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb983"
        position={[-92.85707092, -0.92499995, 9.22282505]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb984"
        position={[-90.94030762, -0.92499995, 12.73366642]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb985"
        position={[-89.02354431, -0.92499995, 16.24450684]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb986"
        position={[-87.10676575, -0.92499995, 19.75534821]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb987"
        position={[-85.19000244, -0.92499995, 23.26618958]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb988"
        position={[-83.27323914, -0.92499995, 26.77703094]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb989"
        position={[-81.35647583, -0.92499995, 30.28787231]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb990"
        position={[-79.43971252, -0.92499995, 33.79871368]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb991"
        position={[-60.27205276, -0.92499995, 68.90711975]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb992"
        position={[-58.35528946, -0.92499995, 72.41796875]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb993"
        position={[-56.43852997, -0.92499995, 75.92880249]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb994"
        position={[-54.52176666, -0.92499995, 79.43965149]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb995"
        position={[-43.02117157, -0.92499995, 100.50469971]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb996"
        position={[-99.32373047, -0.92499995, 3.63871002]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb997"
        position={[-97.40696716, -0.92499995, 7.1495595]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb998"
        position={[-95.49020386, -0.92499995, 10.66040134]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb999"
        position={[-93.57344055, -0.92499995, 14.17124271]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb1000"
        position={[-91.65667725, -0.92499995, 17.68208313]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb1001"
        position={[-89.73989868, -0.92499995, 21.1929245]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb1002"
        position={[-87.82313538, -0.92499995, 24.70376587]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb1003"
        position={[-85.90637207, -0.92499995, 28.21460724]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb1004"
        position={[-83.98960876, -0.92499995, 31.72544861]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb1005"
        position={[-82.07284546, -0.92499995, 35.23628998]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb1006"
        position={[-62.9051857, -0.92499995, 70.34469604]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb1007"
        position={[-60.98842239, -0.92499995, 73.85554504]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb1008"
        position={[-59.07165909, -0.92499995, 77.36637878]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb1009"
        position={[-45.6543045, -0.92499995, 101.942276]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb1010"
        position={[122.88548279, -0.92499995, 60.05737305]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb1011"
        position={[120.25234985, -0.92499995, 61.49494553]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb1012"
        position={[117.61921692, -0.92499995, 62.93252182]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb1013"
        position={[114.98608398, -0.92499995, 64.37010193]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb1014"
        position={[122.16911316, -0.92499995, 65.00578308]}
        rotation={[0, 0.49973326, 0]}
      />
      <instances.Tomb
        name="Tomb1015"
        position={[119.53598022, -0.92499995, 66.44335938]}
        rotation={[0, 0.49973326, 0]}
      />
      <group
        name="Mausoleum"
        position={[-150.82911682, 1.29999995, 43.37404251]}
        rotation={[0, -0.71099486, 0]}
      >
        <instances.RoofSquare
          name="RoofSquare008"
          position={[2.39680099, 3.9000001, -64.11560059]}
          scale={[6, 0.5, 4]}
        />
        <group name="PillarCoffinFloorSet2013" position={[14.49937916, 0, 0]}>
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016"
            position={[-12.10257721, 1.29999995, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015"
            position={[-12.10257721, -1.30000007, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum001"
        position={[-145.81254578, 1.29999995, 38.4920311]}
        rotation={[0, -0.71099486, 0]}
      >
        <instances.RoofSquare
          name="RoofSquare008_1"
          position={[2.39680099, 3.9000001, -64.11560059]}
          scale={[6, 0.5, 4]}
        />
        <group name="PillarCoffinFloorSet2013_1" position={[14.49938297, 0, 0]}>
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_1"
            position={[-12.10258484, 1.29999995, -64.11560822]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_1"
            position={[-12.10258484, -1.30000007, -64.11560822]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum002"
        position={[-135.32806396, 0, 53.73936081]}
        rotation={[0, -0.71099471, 0]}
      >
        <instances.Roof
          name="Roof009"
          position={[-14.99999619, 2.5999999, -74.42279053]}
          scale={[6, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh012"
          position={[-14.99999619, 0, -74.42279053]}
          scale={[6, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum005"
        position={[-156.82243347, 1.30000043, -14.4973917]}
        rotation={[Math.PI, -1.41264775, Math.PI]}
      >
        <instances.Roof1
          name="Roof008"
          position={[-12.10258007, 3.89999962, -64.11560059]}
          scale={[6.00000048, 1, 4]}
        />
        <group name="PillarCoffinFloorSet2014" position={[0, 0, -0.00000763]}>
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_2"
            position={[-12.10258102, 1.29999995, -64.11560822]}
            scale={[6.00000048, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_2"
            position={[-12.10258102, -1.30000007, -64.11560822]}
            scale={[6.00000048, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum012"
        position={[-168.22105408, 2.46928167, -28.32629204]}
        rotation={[Math.PI, -1.41264775, Math.PI]}
      >
        <instances.RoofSquare1
          name="RoofSquare006"
          position={[0.37374917, 2.73071861, -84.52281189]}
          scale={[6.00000048, 0.5, 4]}
        />
        <group
          name="PillarCoffinFloorSet2010"
          position={[12.47632694, -1.16928113, -20.40721893]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_3"
            position={[-12.10258007, 1.29999983, -64.11560059]}
            scale={[6.00000048, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_3"
            position={[-12.10258007, -1.30000007, -64.11560059]}
            scale={[6.00000048, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum022"
        position={[-120.49749756, 1.29999995, -60.17032242]}
        rotation={[Math.PI, -0.73366925, Math.PI]}
      >
        <instances.RoofSquare
          name="RoofSquare008_2"
          position={[2.39679718, 3.9000001, -64.11560059]}
          scale={[6, 0.5, 4]}
        />
        <group
          name="PillarCoffinFloorSet2013_2"
          position={[14.49938107, 0, -0.00000763]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_4"
            position={[-12.10258389, 1.30000019, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_4"
            position={[-12.10258389, -1.29999983, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum023"
        position={[-127.05433655, 1.30000043, -44.87068558]}
        rotation={[Math.PI, -0.73366901, Math.PI]}
      >
        <instances.Roof1
          name="Roof008_1"
          position={[-12.10257912, 3.89999962, -64.11560059]}
          scale={[5.99999952, 1, 3.99999976]}
        />
        <group name="PillarCoffinFloorSet2014_1" position={[0, 0, -0.00000763]}>
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_5"
            position={[-12.10258675, 1.29999995, -64.11559296]}
            scale={[5.99999952, 0.1, 3.99999976]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_5"
            position={[-12.10258675, -1.30000007, -64.11559296]}
            scale={[5.99999952, 0.1, 3.99999976]}
          />
        </group>
      </group>
      <group
        name="Mausoleum024"
        position={[-131.99012756, 2.46928167, 42.99013138]}
        rotation={[0, -1.02331734, 0]}
      >
        <instances.RoofSquare1
          name="RoofSquare006_1"
          position={[0.3737464, 2.73071861, -84.52280426]}
          scale={[6, 0.5, 3.99999976]}
        />
        <group
          name="PillarCoffinFloorSet2010_1"
          position={[12.47632504, -1.16928113, -20.4072113]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_6"
            position={[-12.10258102, 1.29999983, -64.11560059]}
            scale={[6, 0.1, 3.99999976]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_6"
            position={[-12.10258102, -1.30000007, -64.11560059]}
            scale={[6, 0.1, 3.99999976]}
          />
        </group>
      </group>
      <group
        name="Mausoleum025"
        position={[-141.07733154, 1.16928148, 34.48971939]}
        rotation={[0, -1.02331924, 0]}
      >
        <instances.RoofRound
          name="RoofRound007"
          position={[12.9769516, 1.43071842, -94.8299942]}
          scale={[6, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh009"
          position={[12.9769516, -1.16928136, -94.8299942]}
          scale={[6, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum026"
        position={[-64.75326538, 0, 64.25983429]}
        rotation={[0, 0.04301081, 0]}
      >
        <instances.RoofRound1
          name="RoofRound009"
          position={[15.00000095, 2.5999999, -74.4227829]}
          scale={[6, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh013"
          position={[15.00000095, 0, -74.4227829]}
          scale={[6, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum027"
        position={[-65.16783142, 2.46928215, 67.4076767]}
        rotation={[0, 0.04301069, 0]}
      >
        <instances.RoofRound2
          name="RoofRound006"
          position={[16.16469955, 2.73071814, -84.52281952]}
          scale={[6.00000048, 1, 4]}
        />
        <group
          name="PillarCoffinFloorSet2009"
          position={[28.26727486, -1.1692816, -20.40720367]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_7"
            position={[-12.10258102, 1.29999971, -64.11560059]}
            scale={[6.00000048, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_7"
            position={[-12.10258102, -1.30000019, -64.11560059]}
            scale={[6.00000048, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum028"
        position={[25.38616562, 2.46928215, 8.17090893]}
        rotation={[0, 1.02170605, 0]}
      >
        <instances.Roof2
          name="Roof006"
          position={[-14.12562752, 2.73071814, -84.52280426]}
          scale={[6, 1, 3.99999976]}
        />
        <group
          name="PillarCoffinFloorSet2011"
          position={[-2.02305412, -1.1692816, -20.4072113]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_8"
            position={[-12.1025753, 1.30000007, -64.11558533]}
            scale={[6, 0.1, 3.99999976]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_8"
            position={[-12.1025753, -1.29999983, -64.11558533]}
            scale={[6, 0.1, 3.99999976]}
          />
        </group>
      </group>
      <group
        name="Mausoleum029"
        position={[-6.27126598, 1.29999995, 7.44979715]}
        rotation={[0, 1.02170597, 0]}
      >
        <instances.RoofSquare
          name="RoofSquare008_3"
          position={[2.39680099, 3.9000001, -64.11560822]}
          scale={[6, 0.5, 4]}
        />
        <group
          name="PillarCoffinFloorSet2013_3"
          position={[14.49937916, 0, -0.00000763]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_9"
            position={[-12.10258484, 1.29999995, -64.11561584]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_9"
            position={[-12.10258484, -1.30000007, -64.11561584]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum030"
        position={[-129.97517395, 0, -50.99853516]}
        rotation={[0, -1.5513991, 0]}
      >
        <instances.RoofRound1
          name="RoofRound009_1"
          position={[14.99999809, 2.5999999, -74.4227829]}
          scale={[6.00000048, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh013_1"
          position={[14.99999809, 0, -74.4227829]}
          scale={[6.00000048, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum031"
        position={[-132.5247345, 2.46928215, -21.20271301]}
        rotation={[0, -1.55139513, 0]}
      >
        <instances.Roof2
          name="Roof006_1"
          position={[-14.12563229, 2.73071814, -84.52281189]}
          scale={[6, 1, 4]}
        />
        <group
          name="PillarCoffinFloorSet2011_1"
          position={[-2.02305508, -1.1692816, -20.4072113]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_10"
            position={[-12.10257912, 1.29999971, -64.11560822]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_10"
            position={[-12.10257912, -1.30000019, -64.11560822]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum032"
        position={[-125.33689117, 2.46928167, -45.73078918]}
        rotation={[Math.PI, -1.45897124, Math.PI]}
      >
        <instances.RoofSquare1
          name="RoofSquare006_2"
          position={[0.37374687, 2.73071861, -84.52280426]}
          scale={[5.99999952, 0.5, 3.99999976]}
        />
        <group
          name="PillarCoffinFloorSet2010_2"
          position={[12.47632599, -1.16928113, -20.4072113]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_11"
            position={[-12.10257721, 1.29999995, -64.11559296]}
            scale={[5.99999952, 0.1, 3.99999976]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_11"
            position={[-12.10257721, -1.29999995, -64.11559296]}
            scale={[5.99999952, 0.1, 3.99999976]}
          />
        </group>
      </group>
      <group
        name="Mausoleum033"
        position={[-96.20852661, 1.30000043, -59.76677704]}
        rotation={[Math.PI, -1.45897124, Math.PI]}
      >
        <instances.RoofRound3
          name="RoofRound008"
          position={[18.18774796, 3.89999962, -64.11559296]}
          scale={[5.99999952, 1, 3.99999976]}
        />
        <group name="PillarCoffinFloorSet2012" position={[30.29032516, 0, 0]}>
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_12"
            position={[-12.10257816, 1.29999995, -64.11559296]}
            scale={[5.99999952, 0.1, 3.99999976]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_12"
            position={[-12.10257816, -1.30000007, -64.11559296]}
            scale={[5.99999952, 0.1, 3.99999976]}
          />
        </group>
      </group>
      <group
        name="Mausoleum034"
        position={[-109.85322571, 2.46928215, -58.64447784]}
        rotation={[Math.PI, -1.45896796, Math.PI]}
      >
        <instances.RoofRound2
          name="RoofRound006_1"
          position={[16.16469955, 2.73071814, -84.52281189]}
          scale={[6, 1, 4]}
        />
        <group
          name="PillarCoffinFloorSet2009_1"
          position={[28.26727867, -1.1692816, -20.4072113]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_13"
            position={[-12.10257912, 1.29999983, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_13"
            position={[-12.10257912, -1.30000007, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum003"
        position={[-71.67347717, 0, 18.10105896]}
        rotation={[0, -0.72096749, 0]}
      >
        <instances.RoofSquare2
          name="RoofSquare009"
          position={[0, 2.5999999, -74.4227829]}
          scale={[6, 0.5, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh014"
          position={[0, 0, -74.4227829]}
          scale={[6, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum035"
        position={[-77.87598419, 0, 3.36764526]}
        rotation={[0, -0.72096749, 0]}
      >
        <instances.RoofRound1
          name="RoofRound009_2"
          position={[14.99999619, 2.5999999, -74.4227829]}
          scale={[6, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh013_2"
          position={[14.99999619, 0, -74.4227829]}
          scale={[6, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum036"
        position={[-63.02121735, 1.16928148, 35.802948]}
        rotation={[0, -0.72096779, 0]}
      >
        <instances.Roof3
          name="Roof007"
          position={[-17.0230484, 1.43071842, -94.8299942]}
          scale={[6, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh011"
          position={[-17.0230484, -1.16928136, -94.8299942]}
          scale={[6, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum037"
        position={[54.95890427, 2.46928215, 2.30698204]}
        rotation={[0, 0.70939785, 0]}
      >
        <instances.Roof2
          name="Roof006_2"
          position={[-14.12562943, 2.73071814, -84.52281189]}
          scale={[6.00000048, 1, 4]}
        />
        <group
          name="PillarCoffinFloorSet2011_2"
          position={[-2.02305889, -1.1692816, -20.40721893]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_14"
            position={[-12.10257721, 1.29999971, -64.11560059]}
            scale={[6.00000048, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_14"
            position={[-12.10257721, -1.30000019, -64.11560059]}
            scale={[6.00000048, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum038"
        position={[37.03334045, 1.16928148, 22.09014893]}
        rotation={[0, 0.70939785, 0]}
      >
        <instances.RoofRound
          name="RoofRound007_1"
          position={[12.97694397, 1.43071842, -94.83000183]}
          scale={[6.00000048, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh009_1"
          position={[12.97694397, -1.16928136, -94.83000183]}
          scale={[6.00000048, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum039"
        position={[35.80698395, 2.46928167, 0.36866438]}
        rotation={[0, 0.70939788, 0]}
      >
        <instances.RoofSquare1
          name="RoofSquare006_3"
          position={[0.37375259, 2.73071861, -84.52279663]}
          scale={[6, 0.5, 3.99999952]}
        />
        <group
          name="PillarCoffinFloorSet2010_3"
          position={[12.47632694, -1.16928113, -20.40720367]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_15"
            position={[-12.10256958, 1.29999983, -64.11560059]}
            scale={[6, 0.1, 3.99999952]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_15"
            position={[-12.10256958, -1.30000007, -64.11560059]}
            scale={[6, 0.1, 3.99999952]}
          />
        </group>
      </group>
      <group
        name="Mausoleum040"
        position={[28.88288879, 1.16928148, 10.7072649]}
        rotation={[0, 0.70939785, 0]}
      >
        <instances.RoofRound
          name="RoofRound007_2"
          position={[12.97694206, 1.43071842, -94.8299942]}
          scale={[6.00000048, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh009_2"
          position={[12.97694206, -1.16928136, -94.8299942]}
          scale={[6.00000048, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum041"
        position={[-36.15192795, 1.29999995, -12.86837864]}
        rotation={[0, -0.14780846, 0]}
      >
        <instances.RoofSquare
          name="RoofSquare008_4"
          position={[2.39679813, 3.9000001, -64.11560059]}
          scale={[6.00000048, 0.5, 4]}
        />
        <group name="PillarCoffinFloorSet2013_4" position={[14.49937725, 0, 0]}>
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_16"
            position={[-12.10258198, 1.29999995, -64.11560059]}
            scale={[6.00000048, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_16"
            position={[-12.10258198, -1.30000007, -64.11560059]}
            scale={[6.00000048, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum004"
        position={[-33.66381836, 0, -9.12689972]}
        rotation={[0, -0.14780836, 0]}
      >
        <instances.RoofSquare2
          name="RoofSquare009_1"
          position={[-0.00000381, 2.5999999, -74.42279053]}
          scale={[6.00000048, 0.5, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh014_1"
          position={[-0.00000381, 0, -74.42279053]}
          scale={[6.00000048, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum042"
        position={[-48.49994278, 1.30000043, -28.80649757]}
        rotation={[0, -0.14780846, 0]}
      >
        <instances.RoofRound3
          name="RoofRound008_1"
          position={[18.18775368, 3.89999962, -64.11560059]}
          scale={[6.00000048, 1, 4]}
        />
        <group name="PillarCoffinFloorSet2012_1" position={[30.29032898, 0, 0]}>
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_17"
            position={[-12.10257912, 1.29999995, -64.11558533]}
            scale={[6.00000048, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_17"
            position={[-12.10257912, -1.30000007, -64.11558533]}
            scale={[6.00000048, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum043"
        position={[-65.10237122, 0, -147.213974]}
        rotation={[Math.PI, -1.06530996, Math.PI]}
      >
        <instances.RoofRound1
          name="RoofRound009_3"
          position={[15.00000191, 2.5999999, -74.4227829]}
          scale={[6.00000048, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh013_3"
          position={[15.00000191, 0, -74.4227829]}
          scale={[6.00000048, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum044"
        position={[-67.5723114, 2.46928215, -149.20901489]}
        rotation={[Math.PI, -1.06530996, Math.PI]}
      >
        <instances.RoofRound2
          name="RoofRound006_2"
          position={[16.16469765, 2.73071814, -84.52281189]}
          scale={[6.00000048, 1, 4]}
        />
        <group
          name="PillarCoffinFloorSet2009_2"
          position={[28.26727676, -1.1692816, -20.40721893]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_18"
            position={[-12.10257721, 1.29999971, -64.11559296]}
            scale={[6.00000048, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_18"
            position={[-12.10257721, -1.30000019, -64.11559296]}
            scale={[6.00000048, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum045"
        position={[-53.49640274, 0, -139.38444519]}
        rotation={[Math.PI, -1.06530996, Math.PI]}
      >
        <instances.RoofRound1
          name="RoofRound009_4"
          position={[15, 2.5999999, -74.4227829]}
          scale={[6.00000048, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh013_4"
          position={[15, 0, -74.4227829]}
          scale={[6.00000048, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum006"
        position={[-73.79161072, 1.16928148, -130.45739746]}
        rotation={[Math.PI, -1.06530996, Math.PI]}
      >
        <instances.RoofSquare3
          name="RoofSquare007"
          position={[-2.0230484, 1.43071842, -94.82998657]}
          scale={[6.00000048, 0.5, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh010"
          position={[-2.0230484, -1.16928136, -94.82998657]}
          scale={[6.00000048, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum046"
        position={[-57.80983734, 2.46928167, -123.64862823]}
        rotation={[Math.PI, -1.06530966, Math.PI]}
      >
        <instances.RoofSquare1
          name="RoofSquare006_4"
          position={[0.37375641, 2.73071861, -84.52281189]}
          scale={[6, 0.5, 4]}
        />
        <group
          name="PillarCoffinFloorSet2010_4"
          position={[12.47633457, -1.16928113, -20.4072113]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_19"
            position={[-12.10258484, 1.29999983, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_19"
            position={[-12.10258484, -1.30000007, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum007"
        position={[-43.35094452, 0, -114.51607513]}
        rotation={[Math.PI, -1.06530996, Math.PI]}
      >
        <instances.RoofSquare2
          name="RoofSquare009_2"
          position={[0, 2.5999999, -74.4227829]}
          scale={[6.00000048, 0.5, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh014_2"
          position={[0, 0, -74.4227829]}
          scale={[6.00000048, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum047"
        position={[-44.8114624, 0, -97.47718811]}
        rotation={[Math.PI, -1.06531034, Math.PI]}
      >
        <instances.Roof
          name="Roof009_1"
          position={[-14.99999619, 2.5999999, -74.4227829]}
          scale={[6.00000048, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh012_1"
          position={[-14.99999619, 0, -74.4227829]}
          scale={[6.00000048, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum048"
        position={[-48.43706131, 2.46928215, -51.60883331]}
        rotation={[0, -1.47411369, 0]}
      >
        <instances.Roof2
          name="Roof006_3"
          position={[-14.12561989, 2.73071814, -84.52280426]}
          scale={[5.99999952, 1, 4]}
        />
        <group
          name="PillarCoffinFloorSet2011_3"
          position={[-2.02304554, -1.1692816, -20.4072113]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_20"
            position={[-12.10257339, 1.29999983, -64.11559296]}
            scale={[5.99999952, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_20"
            position={[-12.10257339, -1.30000007, -64.11559296]}
            scale={[5.99999952, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum049"
        position={[-44.36133194, 2.46928215, -81.81851196]}
        rotation={[0, -1.47411369, 0]}
      >
        <instances.RoofRound2
          name="RoofRound006_3"
          position={[16.16469574, 2.73071814, -84.52281189]}
          scale={[5.99999952, 1, 4]}
        />
        <group
          name="PillarCoffinFloorSet2009_3"
          position={[28.26728439, -1.1692816, -20.4072113]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_21"
            position={[-12.1025753, 1.29999983, -64.11558533]}
            scale={[5.99999952, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_21"
            position={[-12.1025753, -1.30000007, -64.11558533]}
            scale={[5.99999952, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum050"
        position={[-28.73808861, 0, -81.95642853]}
        rotation={[0, -1.47412156, 0]}
      >
        <instances.RoofRound1
          name="RoofRound009_5"
          position={[15.00000954, 2.5999999, -74.4227829]}
          scale={[6.00000048, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh013_5"
          position={[15.00000954, 0, -74.4227829]}
          scale={[6.00000048, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum008"
        position={[25.90861511, 1.16928148, -162.29327393]}
        rotation={[Math.PI, -0.27077665, Math.PI]}
      >
        <instances.RoofSquare3
          name="RoofSquare007_1"
          position={[-2.02305317, 1.43071842, -94.8299942]}
          scale={[6, 0.5, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh010_1"
          position={[-2.02305317, -1.16928136, -94.8299942]}
          scale={[6, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum051"
        position={[47.46298599, 2.46928215, -150.34310913]}
        rotation={[Math.PI, -0.27077665, Math.PI]}
      >
        <instances.RoofRound2
          name="RoofRound006_4"
          position={[16.16470337, 2.73071814, -84.52281189]}
          scale={[6, 1, 4]}
        />
        <group
          name="PillarCoffinFloorSet2009_4"
          position={[28.26728058, -1.1692816, -20.4072113]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_22"
            position={[-12.10257912, 1.29999983, -64.11558533]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_22"
            position={[-12.10257912, -1.30000007, -64.11558533]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum052"
        position={[48.7353363, 2.46928215, -143.4597168]}
        rotation={[Math.PI, -0.27077665, Math.PI]}
      >
        <instances.RoofRound2
          name="RoofRound006_5"
          position={[16.16470718, 2.73071814, -84.52280426]}
          scale={[6, 1, 4]}
        />
        <group
          name="PillarCoffinFloorSet2009_5"
          position={[28.26728821, -1.1692816, -20.40720367]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_23"
            position={[-12.1025753, 1.29999983, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_23"
            position={[-12.1025753, -1.30000007, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum053"
        position={[22.68006897, 0, -118.50836182]}
        rotation={[Math.PI, -0.27077665, Math.PI]}
      >
        <instances.Roof
          name="Roof009_2"
          position={[-15, 2.5999999, -74.4227829]}
          scale={[6, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh012_2"
          position={[-15, 0, -74.4227829]}
          scale={[6, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum054"
        position={[51.28002167, 2.46928215, -129.69293213]}
        rotation={[Math.PI, -0.27077678, Math.PI]}
      >
        <instances.RoofRound2
          name="RoofRound006_6"
          position={[16.16469955, 2.73071814, -84.52280426]}
          scale={[5.99999952, 1, 3.99999976]}
        />
        <group
          name="PillarCoffinFloorSet2009_6"
          position={[28.26728058, -1.1692816, -20.4072113]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_24"
            position={[-12.10257912, 1.29999983, -64.11559296]}
            scale={[5.99999952, 0.1, 3.99999976]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_24"
            position={[-12.10257912, -1.30000007, -64.11559296]}
            scale={[5.99999952, 0.1, 3.99999976]}
          />
        </group>
      </group>
      <group
        name="Mausoleum055"
        position={[25.22477913, 0, -104.74157715]}
        rotation={[Math.PI, -0.27077647, Math.PI]}
      >
        <instances.Roof
          name="Roof009_3"
          position={[-14.99999905, 2.5999999, -74.42279053]}
          scale={[5.99999952, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh012_3"
          position={[-14.99999905, 0, -74.42279053]}
          scale={[5.99999952, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum056"
        position={[61.2326088, 1.30000043, -96.80361176]}
        rotation={[Math.PI, -0.27077647, Math.PI]}
      >
        <instances.RoofRound3
          name="RoofRound008_2"
          position={[18.18776321, 3.89999962, -64.11560059]}
          scale={[5.99999952, 1, 4]}
        />
        <group
          name="PillarCoffinFloorSet2012_2"
          position={[30.2903347, 0, -0.00000724]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_25"
            position={[-12.10258102, 1.29999995, -64.11560059]}
            scale={[5.99999952, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_25"
            position={[-12.10258102, -1.30000007, -64.11560059]}
            scale={[5.99999952, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum009"
        position={[34.81503677, 1.16928148, -114.10949707]}
        rotation={[Math.PI, -0.27077696, Math.PI]}
      >
        <instances.RoofSquare3
          name="RoofSquare007_2"
          position={[-2.0230484, 1.43071842, -94.8299942]}
          scale={[6, 0.5, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh010_2"
          position={[-2.0230484, -1.16928136, -94.8299942]}
          scale={[6, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum057"
        position={[41.15379333, 2.46928167, -97.93556213]}
        rotation={[Math.PI, -0.27077731, Math.PI]}
      >
        <instances.RoofSquare1
          name="RoofSquare006_5"
          position={[0.37374115, 2.73071861, -84.52281189]}
          scale={[6.00000048, 0.5, 4]}
        />
        <group
          name="PillarCoffinFloorSet2010_5"
          position={[12.47631931, -1.16928113, -20.4072113]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_26"
            position={[-12.10257721, 1.29999983, -64.11559296]}
            scale={[6.00000048, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_26"
            position={[-12.10257721, -1.30000007, -64.11559296]}
            scale={[6.00000048, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum058"
        position={[83.9577713, 1.16928148, 81.46897125]}
        rotation={[0, 0.26376587, 0]}
      >
        <instances.RoofRound
          name="RoofRound007_3"
          position={[12.97694588, 1.43071842, -94.8299942]}
          scale={[6, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh009_3"
          position={[12.97694588, -1.16928136, -94.8299942]}
          scale={[6, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum059"
        position={[104.42253113, 0, 47.58131027]}
        rotation={[0, 0.26376565, 0]}
      >
        <instances.Roof
          name="Roof009_4"
          position={[-14.99999809, 2.5999999, -74.42279053]}
          scale={[6, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh012_4"
          position={[-14.99999809, 0, -74.42279053]}
          scale={[6, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum010"
        position={[88.71724701, 0, 44.59992981]}
        rotation={[0, 0.26376565, 0]}
      >
        <instances.RoofSquare2
          name="RoofSquare009_3"
          position={[-0.00000572, 2.5999999, -74.42279053]}
          scale={[6, 0.5, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh014_3"
          position={[-0.00000572, 0, -74.42279053]}
          scale={[6, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum060"
        position={[89.765625, 2.46928167, 47.55594635]}
        rotation={[0, 0.26376565, 0]}
      >
        <instances.RoofSquare1
          name="RoofSquare006_6"
          position={[0.37373924, 2.73071861, -84.52281189]}
          scale={[6, 0.5, 4]}
        />
        <group
          name="PillarCoffinFloorSet2010_6"
          position={[12.47631741, -1.16928113, -20.4072113]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_27"
            position={[-12.1025753, 1.29999983, -64.11560822]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_27"
            position={[-12.10257339, -1.30000007, -64.11560822]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum061"
        position={[95.26587677, 1.30000055, 17.70956802]}
        rotation={[0, 0.26376565, 0]}
      >
        <instances.Roof1
          name="Roof008_2"
          position={[-12.10258675, 3.89999962, -64.11560059]}
          scale={[6, 1, 4]}
        />
        <group name="PillarCoffinFloorSet2014_2" position={[-0.00000858, 0, 0]}>
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_28"
            position={[-12.10258007, 1.29999959, -64.11559296]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_28"
            position={[-12.10258007, -1.30000019, -64.11559296]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum011"
        position={[85.04506683, 0, 23.92349243]}
        rotation={[0, 0.26376565, 0]}
      >
        <instances.RoofSquare2
          name="RoofSquare009_4"
          position={[-0.00000381, 2.5999999, -74.4227829]}
          scale={[6, 0.5, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh014_4"
          position={[-0.00000381, 0, -74.4227829]}
          scale={[6, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum062"
        position={[98.30221558, 0, 13.12058163]}
        rotation={[0, 0.26376539, 0]}
      >
        <instances.Roof
          name="Roof009_5"
          position={[-15.00000381, 2.5999999, -74.4227829]}
          scale={[6, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh012_5"
          position={[-15.00000381, 0, -74.4227829]}
          scale={[6, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum063"
        position={[62.35097122, 1.30000055, 4.93035889]}
        rotation={[0, 0.26376587, 0]}
      >
        <instances.RoofRound3
          name="RoofRound008_3"
          position={[18.18775177, 3.89999962, -64.11560059]}
          scale={[6, 1, 4]}
        />
        <group
          name="PillarCoffinFloorSet2012_3"
          position={[30.29032898, 0, 0.00000763]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_29"
            position={[-12.10257721, 1.29999971, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_29"
            position={[-12.10257721, -1.30000007, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum064"
        position={[76.37171936, 1.30000007, -6.07876635]}
        rotation={[0, 0.26376565, 0]}
      >
        <instances.RoofSquare
          name="RoofSquare008_5"
          position={[2.39679718, 3.9000001, -64.11560822]}
          scale={[6, 0.5, 4]}
        />
        <group
          name="PillarCoffinFloorSet2013_5"
          position={[14.49937153, 0, 0.00000763]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_30"
            position={[-12.10257721, 1.29999948, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_30"
            position={[-12.10257721, -1.30000031, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum065"
        position={[9.69677067, 1.30000007, -84.74702454]}
        rotation={[Math.PI, -1.35101022, Math.PI]}
      >
        <instances.RoofSquare
          name="RoofSquare008_6"
          position={[2.39680481, 3.9000001, -64.11560059]}
          scale={[6, 0.5, 4]}
        />
        <group
          name="PillarCoffinFloorSet2013_6"
          position={[14.49938297, 0, -0.00000763]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_31"
            position={[-12.10256958, 1.30000007, -64.11560822]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_31"
            position={[-12.10257339, -1.29999995, -64.11560822]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum066"
        position={[-0.54677963, 2.46928239, -100.51228333]}
        rotation={[Math.PI, -1.3510103, Math.PI]}
      >
        <instances.RoofRound2
          name="RoofRound006_7"
          position={[16.16470146, 2.73071814, -84.52281189]}
          scale={[6, 1, 4]}
        />
        <group
          name="PillarCoffinFloorSet2009_7"
          position={[28.26728058, -1.1692816, -20.4072113]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_32"
            position={[-12.1025753, 1.29999971, -64.11559296]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_32"
            position={[-12.1025753, -1.30000019, -64.11559296]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum067"
        position={[5.16618109, 2.46928167, -37.07625198]}
        rotation={[0, -1.23532949, 0]}
      >
        <instances.RoofSquare1
          name="RoofSquare006_7"
          position={[0.37374878, 2.73071861, -84.52281189]}
          scale={[6, 0.5, 4]}
        />
        <group
          name="PillarCoffinFloorSet2010_7"
          position={[12.47633076, -1.16928113, -20.40723419]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_33"
            position={[-12.10256958, 1.29999971, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_33"
            position={[-12.10256958, -1.30000019, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum068"
        position={[35.32990646, 1.30000043, -33.72832489]}
        rotation={[0, -1.23532949, 0]}
      >
        <instances.Roof1
          name="Roof008_3"
          position={[-12.10256958, 3.89999962, -64.11560059]}
          scale={[6.00000048, 1, 4]}
        />
        <group
          name="PillarCoffinFloorSet2014_3"
          position={[0.00000286, 0, 0.00000802]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_34"
            position={[-12.10257339, 1.29999971, -64.11560059]}
            scale={[6.00000048, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_34"
            position={[-12.10257339, -1.30000031, -64.11560059]}
            scale={[6.00000048, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum069"
        position={[32.14476776, 1.30000043, -64.04475403]}
        rotation={[0, -1.23532809, 0]}
      >
        <instances.RoofRound3
          name="RoofRound008_4"
          position={[18.18775558, 3.89999962, -64.11560059]}
          scale={[6, 1, 3.99999976]}
        />
        <group
          name="PillarCoffinFloorSet2012_4"
          position={[30.29032898, 0, -0.00000763]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_35"
            position={[-12.10257053, 1.29999995, -64.11558533]}
            scale={[6, 0.1, 3.99999976]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_35"
            position={[-12.10257053, -1.30000007, -64.11558533]}
            scale={[6, 0.1, 3.99999976]}
          />
        </group>
      </group>
      <group
        name="Mausoleum070"
        position={[70.84199524, 1.29999995, -17.00645256]}
        rotation={[0, -0.50196002, 0]}
      >
        <instances.RoofSquare
          name="RoofSquare008_7"
          position={[2.39680099, 3.9000001, -64.11560059]}
          scale={[6, 0.5, 4]}
        />
        <group
          name="PillarCoffinFloorSet2013_7"
          position={[14.49937916, 0, 0.00000763]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_36"
            position={[-12.10257721, 1.29999995, -64.11561584]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_36"
            position={[-12.10257721, -1.30000007, -64.11561584]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum071"
        position={[82.16594696, 0, -135.50408936]}
        rotation={[Math.PI, -0.267418, Math.PI]}
      >
        <instances.Roof
          name="Roof009_6"
          position={[-15.00000668, 2.5999999, -74.4227829]}
          scale={[6, 1, 3.99999976]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh012_6"
          position={[-15.00000668, 0, -74.4227829]}
          scale={[6, 0.1, 3.99999976]}
        />
      </group>
      <group
        name="Mausoleum013"
        position={[97.88201141, 0, -132.58009338]}
        rotation={[Math.PI, -0.26741809, Math.PI]}
      >
        <instances.RoofSquare2
          name="RoofSquare009_5"
          position={[0.00001407, 2.5999999, -74.4227829]}
          scale={[6, 0.5, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh014_5"
          position={[0.00001407, 0, -74.4227829]}
          scale={[6, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum072"
        position={[115.22288513, 0, -129.74385071]}
        rotation={[Math.PI, -0.24530546, Math.PI]}
      >
        <instances.RoofRound1
          name="RoofRound009_6"
          position={[15.00000763, 2.5999999, -74.42277527]}
          scale={[5.99999905, 1, 3.99999976]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh013_6"
          position={[15.00000763, 0, -74.42277527]}
          scale={[5.99999905, 0.1, 3.99999976]}
        />
      </group>
      <group
        name="Mausoleum073"
        position={[85.6129303, 2.46928215, -125.55467224]}
        rotation={[Math.PI, -0.24530621, Math.PI]}
      >
        <instances.Roof2
          name="Roof006_4"
          position={[-14.1256237, 2.73071814, -84.52281189]}
          scale={[6, 1, 4]}
        />
        <group
          name="PillarCoffinFloorSet2011_4"
          position={[-2.02305698, -1.1692816, -20.4072113]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_37"
            position={[-12.10257721, 1.29999983, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_37"
            position={[-12.10257721, -1.30000007, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum074"
        position={[81.39572906, 1.16928148, -127.93609619]}
        rotation={[Math.PI, -0.24530622, Math.PI]}
      >
        <instances.Roof3
          name="Roof007_1"
          position={[-17.0230484, 1.43071842, -94.82998657]}
          scale={[6, 1, 3.99999976]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh011_1"
          position={[-17.0230484, -1.16928136, -94.82998657]}
          scale={[6, 0.1, 3.99999976]}
        />
      </group>
      <group
        name="Mausoleum075"
        position={[107.41179657, 0, -107.67488098]}
        rotation={[Math.PI, -0.39676096, Math.PI]}
      >
        <instances.RoofRound1
          name="RoofRound009_7"
          position={[14.99999714, 2.5999999, -74.42277527]}
          scale={[6, 1, 3.99999976]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh013_7"
          position={[14.99999714, 0, -74.42277527]}
          scale={[6, 0.1, 3.99999976]}
        />
      </group>
      <group
        name="Mausoleum076"
        position={[101.89779663, 1.29999995, -86.62911224]}
        rotation={[Math.PI, -0.39676182, Math.PI]}
      >
        <instances.RoofSquare
          name="RoofSquare008_8"
          position={[2.39679813, 3.9000001, -64.11560059]}
          scale={[6, 0.5, 4]}
        />
        <group name="PillarCoffinFloorSet2013_8" position={[14.49936771, 0, 0]}>
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_38"
            position={[-12.10258865, 1.29999995, -64.11559296]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_38"
            position={[-12.10258865, -1.30000007, -64.11559296]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum077"
        position={[74.24478149, 1.16928148, -100.78414917]}
        rotation={[Math.PI, -0.39676012, Math.PI]}
      >
        <instances.Roof3
          name="Roof007_2"
          position={[-17.02305222, 1.43071842, -94.8299942]}
          scale={[6.00000048, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh011_2"
          position={[-17.02305222, -1.16928136, -94.8299942]}
          scale={[6.00000048, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum078"
        position={[118.50170898, 1.29999995, -76.51390076]}
        rotation={[Math.PI, -0.17924535, Math.PI]}
      >
        <instances.RoofSquare
          name="RoofSquare008_9"
          position={[2.39679909, 3.9000001, -64.11559296]}
          scale={[6, 0.5, 4]}
        />
        <group name="PillarCoffinFloorSet2013_9" position={[14.49938297, 0, 0]}>
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_39"
            position={[-12.10257339, 1.29999995, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_39"
            position={[-12.10257339, -1.30000007, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum079"
        position={[94.55483246, 1.16928148, -96.30301666]}
        rotation={[Math.PI, -0.17924559, Math.PI]}
      >
        <instances.Roof3
          name="Roof007_3"
          position={[-17.02304268, 1.43071842, -94.8299942]}
          scale={[6.00000048, 1, 4.00000048]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh011_3"
          position={[-17.02304268, -1.16928136, -94.8299942]}
          scale={[6.00000048, 0.1, 4.00000048]}
        />
      </group>
      <group
        name="Mausoleum080"
        position={[130.34107971, 0, -74.96115112]}
        rotation={[Math.PI, -0.17924524, Math.PI]}
      >
        <instances.RoofRound1
          name="RoofRound009_8"
          position={[14.99999809, 2.5999999, -74.42277527]}
          scale={[5.99999952, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh013_8"
          position={[14.99999809, 0, -74.42277527]}
          scale={[5.99999952, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum081"
        position={[125.34989929, 1.16928148, -87.70986176]}
        rotation={[Math.PI, -0.17924573, Math.PI]}
      >
        <instances.RoofRound
          name="RoofRound007_4"
          position={[12.9769516, 1.43071842, -94.8299942]}
          scale={[6, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh009_4"
          position={[12.9769516, -1.16928136, -94.8299942]}
          scale={[6, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum082"
        position={[101.15705872, 2.46928215, -65.76489258]}
        rotation={[Math.PI, -0.17924549, Math.PI]}
      >
        <instances.Roof2
          name="Roof006_5"
          position={[-14.12563133, 2.73071814, -84.52281952]}
          scale={[6, 1, 4]}
        />
        <group
          name="PillarCoffinFloorSet2011_5"
          position={[-2.02304935, -1.1692816, -20.4072113]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_40"
            position={[-12.10259056, 1.29999983, -64.11560822]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_40"
            position={[-12.10259056, -1.30000007, -64.11560822]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum083"
        position={[102.73535156, 0, -48.69996262]}
        rotation={[Math.PI, -0.17924426, Math.PI]}
      >
        <instances.Roof
          name="Roof009_7"
          position={[-15.00000572, 2.5999999, -74.42276764]}
          scale={[5.99999952, 1, 3.99999976]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh012_7"
          position={[-15.00000572, 0, -74.42276764]}
          scale={[5.99999952, 0.1, 3.99999976]}
        />
      </group>
      <group
        name="Mausoleum084"
        position={[103.33260345, 0, -41.71242523]}
        rotation={[Math.PI, -0.17984337, Math.PI]}
      >
        <instances.Roof
          name="Roof009_8"
          position={[-15.00000572, 2.5999999, -74.42279053]}
          scale={[6, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh012_8"
          position={[-15.00000572, 0, -74.42279053]}
          scale={[6, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum014"
        position={[113.09194946, 1.16928148, -57.14128876]}
        rotation={[Math.PI, -0.17984321, Math.PI]}
      >
        <instances.RoofSquare3
          name="RoofSquare007_3"
          position={[-2.02305984, 1.43071842, -94.8299942]}
          scale={[6.00000048, 0.5, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh010_3"
          position={[-2.02305984, -1.16928136, -94.8299942]}
          scale={[6.00000048, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum085"
        position={[139.11280823, 1.30000043, -23.56696129]}
        rotation={[Math.PI, -0.17984382, Math.PI]}
      >
        <instances.RoofRound3
          name="RoofRound008_5"
          position={[18.1877594, 3.89999962, -64.11560059]}
          scale={[6, 1, 4]}
        />
        <group
          name="PillarCoffinFloorSet2012_5"
          position={[30.29034424, 0, 0.00000763]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_41"
            position={[-12.10258293, 1.29999971, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_41"
            position={[-12.10258293, -1.30000031, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum086"
        position={[134.77479553, 0, -26.167202]}
        rotation={[Math.PI, -0.17984382, Math.PI]}
      >
        <instances.RoofRound1
          name="RoofRound009_9"
          position={[15.00000191, 2.5999999, -74.42279053]}
          scale={[6, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh013_9"
          position={[15.00000191, 0, -74.42279053]}
          scale={[6, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum087"
        position={[104.95432281, 2.46928215, -23.92398071]}
        rotation={[Math.PI, -0.17984337, Math.PI]}
      >
        <instances.Roof2
          name="Roof006_6"
          position={[-14.1256218, 2.73071814, -84.52281189]}
          scale={[6, 1, 4]}
        />
        <group
          name="PillarCoffinFloorSet2011_6"
          position={[-2.02305317, -1.1692816, -20.4072113]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_42"
            position={[-12.10258865, 1.29999983, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_42"
            position={[-12.10258865, -1.30000007, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum088"
        position={[105.16181183, 1.30000043, 5.63747835]}
        rotation={[Math.PI, -0.29031863, Math.PI]}
      >
        <instances.Roof1
          name="Roof008_4"
          position={[-12.10258484, 3.89999962, -64.11560059]}
          scale={[5.99999952, 1, 4]}
        />
        <group
          name="PillarCoffinFloorSet2014_4"
          position={[0.00000286, 0, 0.00000724]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_43"
            position={[-12.10258484, 1.29999995, -64.11559296]}
            scale={[5.99999952, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_43"
            position={[-12.10258484, -1.30000007, -64.11559296]}
            scale={[5.99999952, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum089"
        position={[100.8418045, 0, 3.44821692]}
        rotation={[Math.PI, -0.29031776, Math.PI]}
      >
        <instances.Roof
          name="Roof009_9"
          position={[-15, 2.5999999, -74.42279053]}
          scale={[5.99999952, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh012_9"
          position={[-15, 0, -74.42279053]}
          scale={[5.99999952, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum090"
        position={[216.27642822, 1.16928148, 96.89836884]}
        rotation={[0, 1.20079484, 0]}
      >
        <instances.Roof3
          name="Roof007_4"
          position={[-17.02305222, 1.43071842, -94.83000183]}
          scale={[5.99999952, 1, 3.99999976]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh011_4"
          position={[-17.02305222, -1.16928136, -94.83000183]}
          scale={[5.99999952, 0.1, 3.99999976]}
        />
      </group>
      <group
        name="Mausoleum091"
        position={[168.62918091, 1.30000043, 115.5243988]}
        rotation={[0, 1.20079529, 0]}
      >
        <instances.RoofRound3
          name="RoofRound008_6"
          position={[18.18774605, 3.89999962, -64.11560822]}
          scale={[6, 1, 4]}
        />
        <group
          name="PillarCoffinFloorSet2012_6"
          position={[30.29032707, 0, -0.00000802]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_44"
            position={[-12.10257626, 1.29999995, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_44"
            position={[-12.10257626, -1.30000007, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum092"
        position={[187.8184967, 2.46928167, 103.20081329]}
        rotation={[0, 1.20079068, 0]}
      >
        <instances.RoofSquare1
          name="RoofSquare006_8"
          position={[0.37374306, 2.73071861, -84.52281189]}
          scale={[6, 0.5, 4]}
        />
        <group
          name="PillarCoffinFloorSet2010_8"
          position={[12.47632599, -1.16928113, -20.4072113]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_45"
            position={[-12.10258198, 1.29999983, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_45"
            position={[-12.10258198, -1.30000007, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum093"
        position={[164.99079895, 1.29999995, 84.76948547]}
        rotation={[0, 1.37644103, 0]}
      >
        <instances.RoofSquare
          name="RoofSquare008_10"
          position={[2.39680004, 3.9000001, -64.11560059]}
          scale={[6, 0.5, 4]}
        />
        <group
          name="PillarCoffinFloorSet2013_10"
          position={[14.4993782, 0, -0.00000763]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_46"
            position={[-12.10257912, 1.29999971, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_46"
            position={[-12.10257912, -1.30000031, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum094"
        position={[165.94699097, 0, 97.17575836]}
        rotation={[0, 1.37644103, 0]}
      >
        <instances.RoofRound1
          name="RoofRound009_10"
          position={[15, 2.5999999, -74.42279053]}
          scale={[6, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh013_10"
          position={[15, 0, -74.42279053]}
          scale={[6, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum095"
        position={[151.54516602, 1.29999995, 80.86888123]}
        rotation={[0, 1.37644103, 0]}
      >
        <instances.RoofSquare
          name="RoofSquare008_11"
          position={[2.39680862, 3.9000001, -64.11559296]}
          scale={[6.00000048, 0.5, 4]}
        />
        <group
          name="PillarCoffinFloorSet2013_11"
          position={[14.49938393, 0, 0.00000763]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_47"
            position={[-12.10258102, 1.29999995, -64.11560059]}
            scale={[6.00000048, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_47"
            position={[-12.10258102, -1.30000007, -64.11560059]}
            scale={[6.00000048, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum096"
        position={[152.50135803, 0, 93.27514648]}
        rotation={[0, 1.37644103, 0]}
      >
        <instances.RoofRound1
          name="RoofRound009_11"
          position={[14.99999809, 2.5999999, -74.42279053]}
          scale={[6, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh013_11"
          position={[14.99999809, 0, -74.42279053]}
          scale={[6, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum015"
        position={[169.08926392, 1.16928148, 78.56362915]}
        rotation={[0, 1.37644103, 0]}
      >
        <instances.RoofSquare3
          name="RoofSquare007_4"
          position={[-2.02305365, 1.43071842, -94.8299942]}
          scale={[6.00000048, 0.5, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh010_4"
          position={[-2.02305365, -1.16928136, -94.8299942]}
          scale={[6.00000048, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum016"
        position={[162.36643982, 1.16928148, 76.6133194]}
        rotation={[0, 1.37644103, 0]}
      >
        <instances.RoofSquare3
          name="RoofSquare007_5"
          position={[-2.02305365, 1.43071842, -94.83000183]}
          scale={[6.00000048, 0.5, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh010_5"
          position={[-2.02305365, -1.16928136, -94.83000183]}
          scale={[6.00000048, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum097"
        position={[132.09059143, 2.46928215, 10.46011639]}
        rotation={[-Math.PI, 1.11761286, -Math.PI]}
      >
        <instances.Roof2
          name="Roof006_7"
          position={[-14.12562275, 2.73071814, -84.52281189]}
          scale={[6, 1, 4]}
        />
        <group
          name="PillarCoffinFloorSet2011_7"
          position={[-2.02305889, -1.1692816, -20.40721893]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_48"
            position={[-12.10258102, 1.29999971, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_48"
            position={[-12.10258102, -1.30000019, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum098"
        position={[133.55036926, 1.16928148, 5.84224033]}
        rotation={[-Math.PI, 1.11761286, -Math.PI]}
      >
        <instances.Roof3
          name="Roof007_5"
          position={[-17.02305984, 1.43071842, -94.83000183]}
          scale={[6, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh011_5"
          position={[-17.02305984, -1.16928136, -94.83000183]}
          scale={[6, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum099"
        position={[114.81429291, 1.30000043, 53.44634247]}
        rotation={[-Math.PI, 1.11761286, -Math.PI]}
      >
        <instances.RoofRound3
          name="RoofRound008_7"
          position={[18.18775368, 3.89999962, -64.11560059]}
          scale={[6, 1, 4]}
        />
        <group
          name="PillarCoffinFloorSet2012_7"
          position={[30.29033279, 0, -0.00000763]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_49"
            position={[-12.10258102, 1.29999971, -64.11560822]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_49"
            position={[-12.10258102, -1.30000031, -64.11560822]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum017"
        position={[110.68612671, 0, 34.82204056]}
        rotation={[-Math.PI, 1.11761318, -Math.PI]}
      >
        <instances.RoofSquare2
          name="RoofSquare009_6"
          position={[0, 2.5999999, -74.4227829]}
          scale={[6, 0.5, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh014_6"
          position={[0, 0, -74.4227829]}
          scale={[6, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum100"
        position={[104.96998596, 1.16928148, 133.20248413]}
        rotation={[0, 0.92682825, 0]}
      >
        <instances.RoofRound
          name="RoofRound007_5"
          position={[12.97694778, 1.43071842, -94.8299942]}
          scale={[6, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh009_5"
          position={[12.97694778, -1.16928136, -94.8299942]}
          scale={[6, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum018"
        position={[91.23391724, 0, 105.89428711]}
        rotation={[0, 0.92682825, 0]}
      >
        <instances.RoofSquare2
          name="RoofSquare009_7"
          position={[0, 2.5999999, -74.42279053]}
          scale={[6, 0.5, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh014_7"
          position={[0, 0, -74.42279053]}
          scale={[6, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum101"
        position={[85.05007935, 1.30000043, 85.34913635]}
        rotation={[0, 0.92682816, 0]}
      >
        <instances.Roof1
          name="Roof008_5"
          position={[-12.10257912, 3.89999962, -64.11560822]}
          scale={[6, 1, 4]}
        />
        <group name="PillarCoffinFloorSet2014_5" position={[0, 0, -0.00000763]}>
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_50"
            position={[-12.10257721, 1.29999971, -64.11560822]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_50"
            position={[-12.10257721, -1.30000031, -64.11560822]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum102"
        position={[86.006073, 1.30000043, 37.26433945]}
        rotation={[-Math.PI, 1.06074164, -Math.PI]}
      >
        <instances.RoofRound3
          name="RoofRound008_8"
          position={[18.18774986, 3.89999962, -64.11559296]}
          scale={[5.99999952, 1, 3.99999976]}
        />
        <group
          name="PillarCoffinFloorSet2012_8"
          position={[30.29032516, 0, -0.00000724]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_51"
            position={[-12.10257339, 1.29999995, -64.11560059]}
            scale={[5.99999952, 0.1, 3.99999976]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_51"
            position={[-12.10257339, -1.30000007, -64.11560059]}
            scale={[5.99999952, 0.1, 3.99999976]}
          />
        </group>
      </group>
      <group
        name="Mausoleum103"
        position={[79.62033844, 1.30000043, 40.13181686]}
        rotation={[-Math.PI, 1.06074164, -Math.PI]}
      >
        <instances.RoofRound3
          name="RoofRound008_9"
          position={[18.18775749, 3.89999962, -64.11559296]}
          scale={[5.99999952, 1, 3.99999976]}
        />
        <group name="PillarCoffinFloorSet2012_9" position={[30.29032516, 0, 0]}>
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_52"
            position={[-12.10258102, 1.29999995, -64.11560059]}
            scale={[5.99999952, 0.1, 3.99999976]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_52"
            position={[-12.10258102, -1.30000007, -64.11560059]}
            scale={[5.99999952, 0.1, 3.99999976]}
          />
        </group>
      </group>
      <group
        name="Mausoleum104"
        position={[75.26811218, 2.46928215, 4.83548069]}
        rotation={[-Math.PI, 1.06074126, -Math.PI]}
      >
        <instances.Roof2
          name="Roof006_8"
          position={[-14.12562943, 2.73071814, -84.52281189]}
          scale={[6, 1, 4]}
        />
        <group
          name="PillarCoffinFloorSet2011_8"
          position={[-2.02304935, -1.1692816, -20.40721893]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_53"
            position={[-12.10257721, 1.29999971, -64.11559296]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_53"
            position={[-12.10257721, -1.30000019, -64.11559296]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum019"
        position={[83.78643799, 1.16928148, 13.23290443]}
        rotation={[-Math.PI, 1.06074164, -Math.PI]}
      >
        <instances.RoofSquare3
          name="RoofSquare007_6"
          position={[-2.02305222, 1.43071842, -94.8299942]}
          scale={[6, 0.5, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh010_6"
          position={[-2.02305222, -1.16928136, -94.8299942]}
          scale={[6, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum020"
        position={[77.40068817, 1.16928148, 16.10030556]}
        rotation={[-Math.PI, 1.06074096, -Math.PI]}
      >
        <instances.RoofSquare3
          name="RoofSquare007_7"
          position={[-2.02305222, 1.43071842, -94.83000183]}
          scale={[6.00000048, 0.5, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh010_7"
          position={[-2.02305222, -1.16928136, -94.83000183]}
          scale={[6.00000048, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum105"
        position={[-43.77282333, 0, -0.21441317]}
        rotation={[Math.PI, -0.26712388, Math.PI]}
      >
        <instances.Roof
          name="Roof009_10"
          position={[-15.00000191, 2.5999999, -74.42277527]}
          scale={[5.99999952, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh012_10"
          position={[-15.00000191, 0, -74.42277527]}
          scale={[5.99999952, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum106"
        position={[-49.86355972, 1.16928148, -12.47586441]}
        rotation={[Math.PI, -0.26712367, Math.PI]}
      >
        <instances.Roof3
          name="Roof007_6"
          position={[-17.02305222, 1.43071842, -94.8299942]}
          scale={[5.99999952, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh011_6"
          position={[-17.02305222, -1.16928136, -94.8299942]}
          scale={[5.99999952, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum107"
        position={[-41.27842712, 0, 13.56158066]}
        rotation={[Math.PI, -0.26712388, Math.PI]}
      >
        <instances.Roof
          name="Roof009_11"
          position={[-14.99999809, 2.5999999, -74.4227829]}
          scale={[5.99999952, 1, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh012_11"
          position={[-14.99999809, 0, -74.4227829]}
          scale={[5.99999952, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum108"
        position={[-27.98424721, 2.46928167, 5.51642036]}
        rotation={[Math.PI, -0.26712394, Math.PI]}
      >
        <instances.RoofSquare1
          name="RoofSquare006_9"
          position={[0.37374783, 2.73071861, -84.52280426]}
          scale={[6, 0.5, 4]}
        />
        <group
          name="PillarCoffinFloorSet2010_9"
          position={[12.47632885, -1.16928113, -20.4072113]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_54"
            position={[-12.10258102, 1.29999983, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_54"
            position={[-12.10258102, -1.30000007, -64.11560059]}
            scale={[6, 0.1, 4]}
          />
        </group>
      </group>
      <group
        name="Mausoleum109"
        position={[56.58310318, 2.46928167, 40.05274963]}
        rotation={[-Math.PI, 0.88431155, -Math.PI]}
      >
        <instances.RoofSquare1
          name="RoofSquare006_10"
          position={[0.37375641, 2.73071861, -84.52279663]}
          scale={[6, 0.5, 3.99999976]}
        />
        <group
          name="PillarCoffinFloorSet2010_10"
          position={[12.47632217, -1.16928113, -20.40721893]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_55"
            position={[-12.10257721, 1.29999995, -64.11560059]}
            scale={[6, 0.1, 3.99999976]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_55"
            position={[-12.10257721, -1.29999995, -64.11560059]}
            scale={[6, 0.1, 3.99999976]}
          />
        </group>
      </group>
      <group
        name="Mausoleum110"
        position={[66.76036072, 1.16928148, 47.21189499]}
        rotation={[-Math.PI, 0.88431155, -Math.PI]}
      >
        <instances.RoofRound
          name="RoofRound007_6"
          position={[12.97694397, 1.43071842, -94.8299942]}
          scale={[6, 1, 3.99999976]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh009_6"
          position={[12.97694397, -1.16928136, -94.8299942]}
          scale={[6, 0.1, 3.99999976]}
        />
      </group>
      <group
        name="Mausoleum021"
        position={[51.46972656, 1.16928148, 39.55349731]}
        rotation={[-Math.PI, 0.88431215, -Math.PI]}
      >
        <instances.RoofSquare3
          name="RoofSquare007_8"
          position={[-2.02305984, 1.43071842, -94.83000946]}
          scale={[6.00000048, 0.5, 4]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh010_8"
          position={[-2.02305984, -1.16928136, -94.83000946]}
          scale={[6.00000048, 0.1, 4]}
        />
      </group>
      <group
        name="Mausoleum111"
        position={[34.7395134, 1.30000043, 78.59732819]}
        rotation={[-Math.PI, 0.88431155, -Math.PI]}
      >
        <instances.RoofRound3
          name="RoofRound008_10"
          position={[18.18774796, 3.89999962, -64.11560059]}
          scale={[6, 1, 3.99999976]}
        />
        <group
          name="PillarCoffinFloorSet2012_10"
          position={[30.29033661, 0, 0]}
        >
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh016_56"
            position={[-12.10258102, 1.29999995, -64.11560059]}
            scale={[6, 0.1, 3.99999976]}
          />
          <instances.PillarCoffinFloorSetMesh
            name="PillarCoffinFloorSetMesh015_56"
            position={[-12.10258102, -1.30000007, -64.11560059]}
            scale={[6, 0.1, 3.99999976]}
          />
        </group>
      </group>
      <group
        name="Mausoleum112"
        position={[49.41041183, 1.16928148, 59.04317093]}
        rotation={[-Math.PI, 0.88431155, -Math.PI]}
      >
        <instances.RoofRound
          name="RoofRound007_7"
          position={[12.97693634, 1.43071842, -94.82998657]}
          scale={[6, 1, 3.99999976]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh009_7"
          position={[12.97694397, -1.16928136, -94.8299942]}
          scale={[6, 0.1, 3.99999976]}
        />
      </group>
      <group
        name="Mausoleum113"
        position={[10.11018658, 0, 54.28190613]}
        rotation={[-Math.PI, 0.88431275, -Math.PI]}
      >
        <instances.Roof
          name="Roof009_12"
          position={[-14.99998856, 2.5999999, -74.42276764]}
          scale={[5.99999952, 1, 3.99999952]}
        />
        <instances.PillarCoffinFloorSetMesh
          name="PillarCoffinFloorSetMesh012_12"
          position={[-14.99998856, 0, -74.42276764]}
          scale={[5.99999952, 0.1, 3.99999952]}
        />
      </group>
      <group name="Mausoleum114" position={[-48.40533829, 0, 140.05604553]}>
        <instances.RoofHex
          name="RoofHex004"
          position={[0, 3.3499999, -46.72359085]}
        />
        <group
          name="PillarCoffinFloorHexSet003"
          position={[0, 0.1, -46.72359085]}
          scale={[2, 1, 1]}
        >
          <instances.PillarCoffinFloorHexSetData name="PillarCoffinFloorHexSetData001" />
          <instances.PillarCoffinFloorHexSetData1 name="PillarCoffinFloorHexSetData001_1" />
        </group>
      </group>
      <group name="Mausoleum115" position={[-82.33437347, 0, 49.47972107]}>
        <instances.RoofHex1
          name="RoofHex003"
          position={[13.92922592, 3.34999967, -46.87104797]}
        />
        <group
          name="PillarCoffinFloorHexSet002"
          position={[13.92922592, 0.09999976, -46.87104797]}
          scale={[2, 1, 1]}
        >
          <instances.PillarCoffinFloorHexSetData name="PillarCoffinFloorHexSetData001" />
          <instances.PillarCoffinFloorHexSetData1 name="PillarCoffinFloorHexSetData001_1" />
        </group>
      </group>
      <group name="Mausoleum116" position={[-31.61021805, 0, -51.67875671]}>
        <instances.RoofHex1
          name="RoofHex003_1"
          position={[13.92922497, 3.34999967, -46.87104797]}
        />
        <group
          name="PillarCoffinFloorHexSet002_1"
          position={[13.92922497, 0.09999976, -46.87104797]}
          scale={[2, 1, 1]}
        >
          <instances.PillarCoffinFloorHexSetData name="PillarCoffinFloorHexSetData001" />
          <instances.PillarCoffinFloorHexSetData1 name="PillarCoffinFloorHexSetData001_1" />
        </group>
      </group>
      <group name="Mausoleum117" position={[132.17266846, 0, 127.30255127]}>
        <instances.RoofHex
          name="RoofHex004_1"
          position={[0, 3.3499999, -46.72359085]}
        />
        <group
          name="PillarCoffinFloorHexSet003_1"
          position={[0, 0.1, -46.72359085]}
          scale={[2, 1, 1]}
        >
          <instances.PillarCoffinFloorHexSetData name="PillarCoffinFloorHexSetData001" />
          <instances.PillarCoffinFloorHexSetData1 name="PillarCoffinFloorHexSetData001_1" />
        </group>
      </group>
      <group name="Mausoleum118" position={[111.30331421, 0, -31.82639694]}>
        <instances.RoofHex
          name="RoofHex004_2"
          position={[0, 3.3499999, -46.72358704]}
        />
        <group
          name="PillarCoffinFloorHexSet003_2"
          position={[0, 0.1, -46.72358704]}
          scale={[2, 1, 1]}
        >
          <instances.PillarCoffinFloorHexSetData name="PillarCoffinFloorHexSetData001" />
          <instances.PillarCoffinFloorHexSetData1 name="PillarCoffinFloorHexSetData001_1" />
        </group>
      </group>
      <group name="Mausoleum119" position={[-64.34719849, 0, 10.49205017]}>
        <instances.RoofHex
          name="RoofHex004_3"
          position={[0, 3.3499999, -46.72359085]}
        />
        <group
          name="PillarCoffinFloorHexSet003_3"
          position={[0, 0.1, -46.72359085]}
          scale={[2, 1, 1]}
        >
          <instances.PillarCoffinFloorHexSetData name="PillarCoffinFloorHexSetData001" />
          <instances.PillarCoffinFloorHexSetData1 name="PillarCoffinFloorHexSetData001_1" />
        </group>
      </group>
      <mesh
        name="StartPoint"
        geometry={nodes.StartPoint.geometry}
        material={materials.NavMeshMaterial}
        position={[-43.92726898, 2.42748761, 41.71225357]}
      />
      <mesh
        name="NavMesh"
        geometry={nodes.NavMesh.geometry}
        material={materials.NavMeshMaterial}
        position={[13.27684593, 2.01804256, 7.23625851]}
        scale={[35.07999802, 1, 1.84000492]}
      />
    </group>
  );
}

useGLTF.preload(require("@/assets/models/3dmap_clean_2.glb"));
