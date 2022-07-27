import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
const Landingpage = () => {
  let emailregex = /^\w+([.\-]?\w+)*@(ligagriculture)*(.\w{2,3})+$/gm;
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      navigate("/home/dashboard");
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
          <Button type="submit" variant="primary" size="lg">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Landingpage;
