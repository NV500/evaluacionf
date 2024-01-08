import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

function LoginGoogle({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="mb-4">Inicia sesión con Google para Continuar</p>
      <button
        onClick={signInWithGoogle}
        className="flex items-center justify-center p-4 bg-gray-500 text-white rounded-full"
      >
        <VpnKeyIcon className="w-6 h-6 mr-2" />
        Inicia sesión con Google
      </button>
    </div>
  );
}

export default LoginGoogle;