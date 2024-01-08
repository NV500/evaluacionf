import React from "react";
import PaginaPrincipal from "./pages/PaginaPrincipal";
import LoginGoogle from "./pages/loginGoogle";
import LoginFacebook from "./pages/loginFacebook";
import {signOut} from "firebase/auth";
import {auth} from "./firebase-config";
import {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

//Importacion de iconos 
import PowerOffIcon from "@mui/icons-material/PowerOff";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

function style()
{
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
    const [userAuth, setUserAuth] = useState(localStorage.getItem("userAuth"));
    const singUserOut = () =>
    {
        signOut(auth).then(()=>
        {
            localStorage.clear();
            window.location.pathname ="/loginGoogle";
        });
    };

    const signUserFacebookOut = () =>
    {
        singOut(auth).then(() =>
        {
            localStorage.clear();
            Window.location.pathname="/loginFacebook";
        });
    };

    return (
        <Router>
            <nav className="bg-gray-200 p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <Link to="/" className="text-x1 font-bold text-gray-800">
                    Regresar a la página principal
                    </Link>
                    <div className="flex space-x-4">
                        {!isAuth? (
                            <Link 
                            to="/loginGoogle"
                            className={
                                userAuth ? "hiden": "text-gray-800 hover:text-blue-680"
                            }
                            >
                                Inicia sesión con Google
                                <GoogleIcon/>{" "}
                            </Link>
                        ):(
                            <>
                            <button onClick={singUserOut}>
                                <PowerOffIcon/>{" "}
                            </button>
                            </>
                        )}

                        {!userAuth && !isAuth ?(
                            <Link
                              to="/loginFacebook"
                            className="text-gray-800 hover:text-blue-600"
                        >
                            Inicia sesión con Facebook
                            <FacebookIcon/>{" "}
                        </Link>
                        ):(
                            userAuth && (
                              <>
                               <button onClick={signUserFacebookOut}>
                                 <PowerOffIcon/> {" "}
                               </button>
                              </>
                              )
                            )}
                        </div>
                    </div>
                </nav>
                <Routes>
                  <Route path="/" element={<PaginaPrincipal/>}/>
                  <Route
                    path="/loginGoogle"
                    element={<LoginGoogle setIsAuth={setIsAuth}/>}
                  />
                  <Route 
                    path="/loginFacebook"
                    element={<LoginFacebook setUserAuth={setUserAuth}/>}
                  />
                </Routes>
            </Router>
    );
}
    
export default style;