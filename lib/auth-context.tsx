// lib/auth-context.tsx
import { superAdmin } from "@/app/admin/(tabs)/admins";
import { db } from "@/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { createContext, ReactNode, useContext, useState } from "react";

type User = { username: string } | null;

type AuthContextType = {
  user: User;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => false,
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);

  async function login(username: string, password: string) {
    if (username === superAdmin.username && password === superAdmin.password) {
      setUser({ username });
      return true;
    }

    const q = query(
      collection(db, "admins"),
      where("username", "==", username),
      where("password", "==", password)
    );

    const snap = await getDocs(q);
    if (snap.empty) return false;

    setUser({ username });
    return true;
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
