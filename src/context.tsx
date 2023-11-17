"use client";
import { IdTokenResult, onAuthStateChanged, User } from "firebase/auth";
import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "./firebase/config";

interface AuthContextType {
  user: User | null;
  token: IdTokenResult | null;
}

const AuthContext = createContext<AuthContextType>({ user: null, token: null });

export const useAuth = () => {
  return useContext(AuthContext);
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<IdTokenResult | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: User | null) => {
      console.log("currentUser", currentUser);
      if (currentUser) {
        currentUser.getIdTokenResult().then((idTokenResult) => {
          setUser(currentUser);
          setToken(idTokenResult);
        });
      } else {
        setUser(null);
        setToken(null);
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <AuthContext.Provider value={{ user, token }}>
      {children}
    </AuthContext.Provider>
  );
};
