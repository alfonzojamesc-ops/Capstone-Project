import React, { createContext, ReactNode, useContext, useState } from "react";
import { Vector3 } from "three";

interface CameraContextType {
  cameraPosition: Vector3;
  cameraTarget: Vector3;
  setCameraPosition: (position: Vector3) => void;
  setCameraTarget: (target: Vector3) => void;
  setCamera: (
    target: Vector3 | number[],
    position?: Vector3 | number[],
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

  const setCamera = (
    target: Vector3 | number[],
    position?: Vector3 | number[],
    distance: number = 0
  ) => {
    const targetVector = Array.isArray(target)
      ? new Vector3(...target)
      : target.clone();

    const positionVector = position
      ? Array.isArray(position)
        ? new Vector3(...position)
        : position.clone()
      : targetVector.clone().add(new Vector3(distance, distance, distance * 2));

    setCameraPosition(positionVector);
    setCameraTarget(targetVector);
  };

  return (
    <CameraContext.Provider
      value={{
        cameraPosition,
        cameraTarget,
        setCameraPosition,
        setCameraTarget,
        setCamera,
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
