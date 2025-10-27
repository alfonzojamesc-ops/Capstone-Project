import React, { createContext, ReactNode, useContext, useState } from "react";
import { Vector3 } from "three";

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
  children: ReactNode;
}

const CameraContext = createContext<CameraContextType | undefined>(undefined);

export const CameraProvider: React.FC<CameraProviderProps> = ({ children }) => {
  const [cameraPosition, setCameraPosition] = useState<Vector3>(
    new Vector3(-44.33, 9.71, 43.54)
  );
  const [cameraTarget, setCameraTarget] = useState<Vector3>(
    new Vector3(-29.46, 3.16, 37.05)
  );

  const changeCamera = (
    newTarget: Vector3 | number[],
    newPos?: Vector3 | number[],
    distance: number = 0.000000001
  ) => {
    const target = Array.isArray(newTarget)
      ? new Vector3(...newTarget)
      : newTarget;

    const position = newPos
      ? Array.isArray(newPos)
        ? new Vector3(...newPos)
        : newPos
      : new Vector3(
          target.x + distance,
          target.y + distance,
          target.z + distance * 2
        );

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
        changeCamera,
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
