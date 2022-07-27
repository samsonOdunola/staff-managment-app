import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { addDoc } from "firebase/firestore";
import { usersCollectionRef } from "../functions";
let userdetails = { status: "" };

const Newstaffform = () => {
  let navigate = useNavigate();

  const createUser = async (values) => {
    await addDoc(usersCollectionRef, values);
  };
  const formik = useFormik({
    initialValues: {
      lastname: "",
      firstname: "",
      othername: "",
      gender: "",
      birthdaydate: "",
      department: "",
      role: "",
      datejoined: "",
    },
    onSubmit: (values) => {
      let finaldetails = { ...values, ...userdetails };
      createUser(finaldetails);
      alert("Success");
      navigate("/home/dashboard");
    },
    validationSchema: yup.object({}),
  });
  return (
    <form action="" onSubmit={formik.handleSubmit} className="form newuserform">
      <h1>New Staff Info</h1>
      <input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="text"
        name="lastname"
        placeholder="Last Name"
      ></input>
      <input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="text"
        name="firstname"
        placeholder="Firstname"
      ></input>
      <input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="text"
        name="othername"
        placeholder="Other Name"
      ></input>
      <select
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="gender"
      >
        <option selected={true}>Select Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>
      <input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="date"
        name="birthdaydate"
      ></input>
      <select
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="text"
        name="department"
      >
        <option selected="true">Select Department</option>
        <option>Elere Water</option>
        <option>BSF</option>
        <option>LIG Fish Farm</option>
      </select>
      <input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Role"
        name="role"
      ></input>
      <input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="date"
        placeholder="Date joined"
        name="datejoined"
      ></input>
      <input type="submit"></input>
    </form>
  );
};

export default Newstaffform;
