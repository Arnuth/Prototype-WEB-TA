import React from "react";
import { useHistory, Link } from 'react-router-dom'
import { Form, InputGroup, Button } from "react-bootstrap";



const Login = () => {

  const history = useHistory()
  const [validated, setValidated] = React.useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      history.replace('/dashboard')
    }

    setValidated(true);
    
  };

  return (
      <div className="d-flex align-items-center auth auth-bg-1 theme-one px-0">
        <div className="row w-100 mx-0">
          <div className="col-xl-4 col-lg-6 col-sm-8 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              {/* <div className="brand-logo">
                  <img src="../images/logo.svg" alt="logo" />
                </div>
              <h4>Hello! let's get started</h4>
              <h6 className="font-weight-light">Sign in to continue.</h6> */}
              <Form className="pt-3" noValidate validated={validated} onSubmit={handleSubmit}>

                <Form.Group controlId="validationCustomUsername">
                  <Form.Label>Username</Form.Label>
                  <InputGroup hasValidation>
                    {/* <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    </InputGroup.Prepend> */}
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      size="lg"
                      className="h-auto"
                      autoComplete="one-time-code"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="validationCustomPassword">
                <Form.Label>Password</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      size="lg"
                      className="h-auto"
                      autoComplete="one-time-code"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a Password.
                    </Form.Control.Feedback>
                  </InputGroup>
                  
                </Form.Group>
                <div className="mt-3">
                  <Button
                    className="btn btn-block btn-cj auth-form-btn border-0"
                    type="submit"
                  >
                    Login
                  </Button>
                </div>
                <div className="my-2 d-flex justify-content-between align-items-center">
                  {/* <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input" />
                      <i className="input-helper"></i>
                      Keep me signed in
                    </label>
                  </div> */}
                  <div className="form-check">
                    <input type="checkbox" id="formBasicCheckbox" className="form-check-input" />
                    <label htmlFor="formBasicCheckbox" className="form-check-label text-muted">Keep me signed in</label>
                  </div>
                  <Link to="/forgotpassword"                     
                    // onClick={(event) => event.preventDefault()}
                    className="auth-link text-black"
                  >
                    Forgot password?
                  </Link>
                </div>
                {/* <div className="mb-2">
                  <button
                    type="button"
                    className="btn btn-block btn-facebook auth-form-btn"
                  >
                    <i className="mdi mdi-facebook mr-2"></i>Connect using
                    facebook
                  </button>
                </div> */}
                <div className="text-center mt-4 font-weight-light">
                  <span className="text-small font-weight-semibold">Not a member ? </span>
                  <Link to="/" className="text-black text-small">Please contact IT Web Apps.</Link>
                </div>
              </Form>
            </div>
            <ul className="auth-footer">
                <li>
                  <Link to="/">Conditions</Link>
                </li>
                <li>
                  <Link to="/">Help</Link>
                </li>
                <li>
                  <Link to="/">Terms</Link>
                </li>
              </ul>

          </div>
        </div>
      </div>
  );
};

export default Login;
