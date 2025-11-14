// app/admin/_layout.tsx
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect, useState } from "react";
import { useAuth } from "../../lib/auth-context";

export default function AdminLayout() {
  const { user } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (segments.length > 0) {
      setReady(true);
    }
  }, [segments]);

  useEffect(() => {
    if (!ready) return;

    if (!user) {
      router.replace("/login");
    }
  }, [ready, user]);

  if (!ready) return null;
  if (!user) return null;

  return <Stack />;
}
