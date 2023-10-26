"use client";
import { IdTokenResult, onAuthStateChanged, User } from "firebase/auth";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "./firebase/config";

interface AuthContextType {
  token: IdTokenResult | null;
}

const AuthContext = createContext<AuthContextType>({ token: null });

export const useAuth = () => {
  return useContext(AuthContext);
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<IdTokenResult | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        user.getIdTokenResult().then((idTokenResult) => {
          setToken(idTokenResult);
        });
      } else {
        setToken(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
};

// IdTokenResult
