// import React, { useState } from "react";
// import Sidebar from "../component/Sidebar";
// import { useNavigate } from "react-router-dom";
// import Dummy from "./Dummy";

// function Login() {
//   const [credentials, setCredentials] = useState({
//     email: "",
//     password: "",
//   });

//   const [user, setUser] = useState([]);

//   let navigate = useNavigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const email1 = document.getElementById("email");
//     const password1 = document.getElementById("password");

//     // success function
//     function showSuccess(input, message) {
//       const formControl = input.parentElement;
//       formControl.className = "form-control success";
//       const small = document.querySelector("small");
//       small.innerText = message;
//       small.classList.add("succText");
//     }

//     // Error function
//     function showError(input, message) {
//       const formControl = input.parentElement;
//       formControl.className = "form-control error";
//       const small = document.querySelector("small");
//       small.innerText = message;
//       small.classList.add("errText");
//     }

//     // function for getting the input
//     function getInput(input) {
//       return input.id.charAt(0).toUpperCase() + input.id.slice(1);
//     }

//     let error = 0;
//     let succ = 0;
//     // function for checking the length of each field
//     function checkLength(input) {
//       if (input.value.length == 0) {
//         error = 1;
//         showError(input, `${getInput(input)} should not be null`);
//       } else {
//         succ = 1;
//       }
//     }

// localhost:5000/api/flight/getflight 
//     // function call
//     checkLength(email1);
//     checkLength(password1);

//     const { email, password } = credentials;
//     if (succ == 1 && error == 0) {
//       const responce = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },

//         body: JSON.stringify({
//           email: credentials.email,
//           password: credentials.password,
//         }),
//       });

//       const json = await responce.json();
//       setUser(json.user);
//       console.log(json.user.length);
//       let my_user = JSON.stringify(json.user);
//       if (json.user.length == 0) {
//         alert("No flight");
//         return <h1>No flight</h1>;
//       } else {
//         if (json.success) {
//           alert("success");
//           localStorage.setItem("token", json.authtoken);
//           localStorage.setItem("email", json.email);
//           localStorage.setItem("user", json.user[0].name);
//           // navigate("/dummy");
//         } else {
//           alert("Please check your credentials");
//         }
//       }
//     }
//   };
//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };
//   return (
//     <>
//       <Sidebar />
//       <div className="container">
//         <div className="loginbody">
//           <h1 className="loginheading">Welcome to Go-airline</h1>
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-4"></div>
//               <div className="col-lg-4">
//                 <form id="loginform" onSubmit={handleSubmit}>
//                   <div class="mb-3">
//                     <label for="exampleInputEmail1" class="form-label">
//                       Email address
//                     </label>
//                     <input
//                       type="email"
//                       class="form-control"
//                       id="email"
//                       onChange={onChange}
//                       name="email"
//                       aria-describedby="emailHelp"
//                     />
//                     <small>Error message</small>
//                   </div>
//                   <div class="mb-3">
//                     <label for="exampleInputPassword1" class="form-label">
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       class="form-control"
//                       id="password"
//                       onChange={onChange}
//                       name="password"
//                     />
//                     <small>bgjkk</small>
//                   </div>
//                   <p>
//                     Dont have Account?<a href="/signup">Signup</a>
//                   </p>
//                   <button type="submit" class="btn btn-primary loginbutton">
//                     Submit
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container">
//         <div className="row">
//           {user &&
//             user.map((value) => {
//               return (
//                 <div className="col-lg-3 my-4">
//                   <div class="card">
//                     <div class="card-body">
//                       <h5 class="card-title">{value.email}</h5>
//                       <h6 class="card-subtitle mb-2 text-body-secondary">
//                         {value.name}
//                       </h6>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;
