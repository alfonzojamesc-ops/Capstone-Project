import { parseCoords } from "@/scripts/change-camera";
import React, { createContext, ReactNode, useContext, useState } from "react";
import { Vector3 } from "three"; // Correct import from 'three'

interface CameraContextType {
  cameraPosition: Vector3;
  cameraTarget: Vector3;
  setCameraPosition: (position: Vector3) => void;
  setCameraTarget: (target: Vector3) => void;
  changeCamera: (
    newTarget: Vector3 | number[],
    newPos?: Vector3 | number[],
    distance?: number
  ) => void;
}

interface CameraProviderProps {
  children: ReactNode; // This is where the `children` prop type is added
}

const CameraContext = createContext<CameraContextType | undefined>(undefined);

export const CameraProvider: React.FC<CameraProviderProps> = ({ children }) => {
  const [cameraPosition, setCameraPosition] = useState<Vector3>(
    new Vector3(-44.33, 9.71, 43.54)
  );
  const [cameraTarget, setCameraTarget] = useState<Vector3>(
    new Vector3(-29.46, 3.16, 37.05)
  );

  // The changeCamera function which will set the new camera position and target
  const changeCamera = (
    newTarget: Vector3 | number[],
    newPos?: Vector3 | number[],
    distance: number = 1
  ) => {
    const { target, position } = parseCoords(newTarget, newPos, distance);
    setCameraPosition(position);
    setCameraTarget(target);
  };

  return (
    <CameraContext.Provider
      value={{
        cameraPosition,
        cameraTarget,
        setCameraPosition,
        setCameraTarget,
        changeCamera, // Expose the changeCamera function
      }}
    >
      {children}
    </CameraContext.Provider>
  );
};

export const useCamera = (): CameraContextType => {
  const context = useContext(CameraContext);
  if (!context) {
    throw new Error("useCamera must be used within a CameraProvider");
  }
  return context;
};
