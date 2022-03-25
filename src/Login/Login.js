import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../store/actions/auth";
const Login = () => {
  const auth = useSelector((state) => state.auth);
  console.log(auth, "auth");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    dispatch(login(user));
  };
  if (auth.loggedIn) {
    return <Redirect to={`/notes`} />;
  }
  return (
    <>
        <div class="container h-100">
          <div class="row justify-content-sm-center h-100" style={{marginTop:"100px"}}>
            <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div class="card shadow-lg">
                <div class="card-body p-5">
                  <h1 class="fs-4 card-title fw-bold mb-4">Login</h1>
                  <form onSubmit={handleSubmit} class="needs-validation">
                    <div class="mb-3">
                      <label class="mb-2 text-muted" for="email">
                        E-Mail Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        class="form-control"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <div class="invalid-feedback">Email is invalid</div>
                    </div>

                    <div class="mb-3">
                        
                      <label class="mb-2 text-muted" for="email">
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        class="form-control"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <div class="invalid-feedback">Password is required</div>
                    </div>

                    <div class="d-flex align-items-center">
                      <button type="submit" class="btn btn-primary ms-auto">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Login;
