import React, { useEffect, useState } from "react";
import {
  auth,
  googleProvider,
  signInWithRedirect,
  signOut,
  getRedirectResult,
} from "../firebase";
import Welcome from "./Welcome";
import { User } from "firebase/auth";

const LoginRedirect: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result && result.user) {
          setUser(result.user);
        }
      } catch (error) {
        console.error("Error with redirect: ", error);
      }
    };

    checkAuth();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      await signInWithRedirect(auth, googleProvider);
    } catch (error) {
      console.error("Error starting redirect login: ", error);
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

export default LoginRedirect;
