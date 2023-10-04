// Login.tsx
import React, { useState } from "react";
import { User, signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import Welcome from "./Welcome";

const Login: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  if (user) {
    return (
      <div>
        <Welcome name={user.displayName || "Usuário"} />
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={handleGoogleLogin}>Login com Google</button>
    </div>
  );
};

export default Login;
