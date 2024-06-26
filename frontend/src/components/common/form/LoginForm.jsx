
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';
// const URL= 'http://localhost:8080';

// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate(); 

//   const passwordHandler = () => setPassword(!password);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`${URL}/login`, { email, password });
//       console.log("Login successful", response.data);
//       if (email.endsWith("@funflex.com")) {
//         navigate("/admin");
//       } else {
//         navigate("/customer"); 
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       setErrorMessage("Invalid email or password");
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <div className="row">
//         <div className="col-12">
//           <div className="input-group-meta mb-30">
//             <label>Email</label>
//             <input
//               type="email"
//               placeholder="example123@gmail.com"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="col-12">
//           <div className="input-group-meta mb-25">
//             <label>Password</label>
//             <input
//               type={password ? "password" : "text"}
//               placeholder="*******"
//               className="pass_log_id"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//                <span className="placeholder_icon">
//                <span
//                 className={password ? "passVicon eye-slash" : "passVicon"}
//                 onClick={passwordHandler}
//               >
//                 <img
//                   src={
//                     require("../../../assets/images/icon/icon_67.svg").default
//                   }
//                   alt="icon"
//                 />
//               </span>
//             </span>
//           </div>
//         </div>

//         <div className="col-12">
//           <div className="agreement-checkbox d-flex justify-content-between align-items-center">
//             <div>
//               <input type="checkbox" id="remember" />
//               <label htmlFor="remember">Keep me logged in</label>
//             </div>
//           </div>
//         </div>

//         <div className="col-12">
//           <button className="theme-btn-one w-100 mt-50 mb-50">Login</button>
//         </div>
//       </div>

//       {errorMessage && <p>{errorMessage}</p>}
//     </form>
//   );
// };

// export default LoginForm;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "luz@gmail.com" && password === "1234") {
      navigate("/client"); 
    } else if (email === "administrador@funflex.com" && password === "0000") {
      navigate("/admin"); 
    } else {
      alert("Credenciales inválidas. Inténtalo de nuevo.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Email</label>
            <input
              type="email"
              placeholder="example123@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta mb-25">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="*******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="placeholder_icon">
              <span
                className={showPassword ? "passVicon eye-slash" : "passVicon"}
                onClick={togglePasswordVisibility}
              >
                <img
                  src={require("../../../assets/images/icon/icon_67.svg").default}
                  alt="icon"
                />
              </span>
            </span>
          </div>
        </div>

        <div className="col-12">
          <div className="agreement-checkbox d-flex justify-content-between align-items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Keep me logged in</label>
            </div>
          </div>
        </div>

        <div className="col-12">
          <button type="submit" className="theme-btn-one w-100 mt-50 mb-50">
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
