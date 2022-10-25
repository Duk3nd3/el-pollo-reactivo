import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { doc, getDoc, setDoc } from "firebase/firestore";

import { auth, db } from "../firebase";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("chequeando usuario");
      if (currentUser) {
        // console.log("hay user");
        getUser(currentUser.uid);
      } else {
        // console.log("no hay user");
        setUser(null);
      }
    });
    return () => unsubuscribe();
  }, []);

  // Guarda los datos de autenticacion del usuario
  const signup = async (usuario) => {
    const idUsuario = await createUserWithEmailAndPassword(
      auth,
      usuario.email,
      usuario.password
    ).then((userCredential) => {
      // console.log(userCredential);
      return userCredential.user.uid;
    });
    logout();
    // guarda los datos del usuario en la base de datos, coleccion usuarios
    const docRef = doc(db, `usuarios/${idUsuario}`);
    setDoc(docRef, {
      nombre: usuario.nombre,
      email: usuario.email,
      direccion: usuario.direccion,
    });
  };

  const login = async (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  // Retorna los datos del usuario logueado de la base de datos, coleccion usuarios
  const getUser = async (id) => {
    const docRef = doc(db, `usuarios/${id}`);
    const docSnap = await getDoc(docRef);
    setUser(docSnap.data());
  };

  return (
    <authContext.Provider value={{ signup, login, logout, user }}>
      {children}
    </authContext.Provider>
  );
}
