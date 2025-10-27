import React, { createContext, ReactNode, useContext, useState } from "react";
import { Vector3 } from "three";

interface CameraContextType {
  demandedCameraPosition: Vector3;
  demandedCameraTarget: Vector3;
  demandCameraPosition: (position: Vector3) => void;
  demandCameraTarget: (target: Vector3) => void;
  demandCamera: (
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
  const [demandedCameraPosition, demandCameraPosition] = useState<Vector3>(
    new Vector3(-45.155, 6.192, 42.063)
  );
  const [demandedCameraTarget, demandCameraTarget] = useState<Vector3>(
    new Vector3(-32.853, 0, 36.792)
  );

  const setCamera = (
    target: Vector3 | number[],
    position?: Vector3 | number[],
    distance: number = 1.5
  ) => {
    const offset = new Vector3(distance * 0, distance * 2, -(distance * 6));

    const targetVector = Array.isArray(target)
      ? new Vector3(...target)
      : target;

    const positionVector = (
      position
        ? Array.isArray(position)
          ? new Vector3(...position)
          : position
        : targetVector
    ).add(offset);

    demandCameraPosition(positionVector);
    demandCameraTarget(targetVector);
  };

  return (
    <CameraContext.Provider
      value={{
        demandedCameraPosition: demandedCameraPosition,
        demandedCameraTarget: demandedCameraTarget,
        demandCameraPosition: demandCameraPosition,
        demandCameraTarget: demandCameraTarget,
        demandCamera: setCamera,
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
