// app/login.tsx
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useAuth } from "../lib/auth-context";

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin() {
    const ok = await login(username, password);
    if (!ok) {
      setError("Invalid credentials");
      return;
    }
    router.replace("/admin/dashboard");
  }

  return (
    <View style={{ padding: 20 }}>
      <Text>Login</Text>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{ borderWidth: 1, marginVertical: 8, padding: 8 }}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, marginVertical: 8, padding: 8 }}
      />

      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
