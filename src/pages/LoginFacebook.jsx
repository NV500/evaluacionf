import React from "react";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import LockOpenIcon from "@mui/icons-material/LockOpen";

function LoginFacebook({ setUserAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const authInstance = getAuth();
      await signInWithEmailAndPassword(authInstance, email, password);

      // El usuario ha iniciado sesión correctamente
      console.log("User logged in");
      localStorage.setItem("isAuth", true);
      setUserAuth(true);
      navigate("/");
      // Puedes redirigir al usuario o realizar acciones adicionales después del inicio de sesión
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        onSubmit={handleLogin}
        className="w-96 p-6 bg-white rounded-md shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center p-4 bg-gray-500 text-white rounded-full"
        >
          <LockOpenIcon className="w-6 h-6 mr-2" />
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginFacebook;