import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
const Landingpage = () => {
  const [showStaffLogin, setShowStaffLogin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [mainLogin, setMainLogin] = useState(true);
  let emailregex = /^\w+([.\-]?\w+)*@(ligagriculture)*(.\w{2,3})+$/gm;
  const navigate = useNavigate();
  const handleStaffLogin = () => {
    setShowStaffLogin(true);
    setMainLogin(false);
  };
  const handleBackBtn = () => {
    setShowStaffLogin(false);
    setShowAdminLogin(false);
    setMainLogin(true);
  };
  const handleAdminLogin = () => {
    setShowAdminLogin(true);
    setMainLogin(false);
  };
  const adminFormik = useFormik({
    initialValues: {
      password: "",
    },
    onSubmit: (values) => {
      navigate("/home/dashboard");
    },
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      navigate("/user");
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .required("This field is required")
        .email("Please input an email")
        .matches(emailregex, "please use your company email"),
      password: yup.string().required("This field is required"),
    }),
  });
  return (
    <div className="landingpage">
      <div className="leftside"></div>
      <div className="rightside">
        {showStaffLogin && (
          <form
            action=""
            onSubmit={formik.handleSubmit}
            className="form loginform"
          >
            <h1>Welcome</h1>
            <p className="error">{formik.errors.email}</p>
            <input
              placeholder="Enter Email"
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></input>

            <br />
            <p className="error">{formik.errors.password}</p>
            <input
              placeholder="Enter Password"
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></input>

            <p>Forgot your Password</p>
            <Button
              style={{ marginRight: "1vw" }}
              type="submit"
              variant="primary"
              size="lg"
            >
              Sign In
            </Button>
            <Button
              onClick={() => handleBackBtn()}
              type="submit"
              variant="secondary"
              size="lg"
            >
              Back
            </Button>
          </form>
        )}
        {showAdminLogin && (
          <form
            action=""
            onSubmit={adminFormik.handleSubmit}
            className="form loginform"
          >
            <h1>Welcome</h1>
            <input value="Admin" readOnly type="text"></input>
            <input
              placeholder="Password"
              name="password"
              type="password"
            ></input>
            <Button type="submit" variant="primary" size="lg">
              Login
            </Button>
            <Button
              style={{ marginLeft: "1vw" }}
              variant="secondary"
              size="lg"
              onClick={() => handleBackBtn()}
            >
              Back
            </Button>
          </form>
        )}
        {mainLogin && (
          <div className="buttonContainer">
            <button onClick={() => handleStaffLogin()}>
              <AiOutlineUser />
              Staff Login
            </button>
            <button onClick={() => handleAdminLogin()}>
              <MdOutlineAdminPanelSettings />
              Admin Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Landingpage;
