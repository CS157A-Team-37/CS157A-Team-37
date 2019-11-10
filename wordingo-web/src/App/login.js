import React from "react";
import "./login.css";

export default function login() {
  return (
    <div className="login">
       <h1>Login</h1>
      <p></p>
      <form>
         <label>
         Email: <input type="text" name="name" />
         </label>
         <label>
         Password:
         <input type="text" name="name" />
         </label>
         <input type="submit" value="Submit" />
       </form>
    </div>
  );
}