import { CameraProvider } from "@/hooks/camera-context";
import { AuthProvider } from "@/lib/auth-context";
import { Stack } from "expo-router";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <CameraProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </CameraProvider>
      </SafeAreaProvider>
    </AuthProvider>
  );
}
