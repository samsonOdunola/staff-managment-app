import { useState, useEffect } from "react";
import { getDocs } from "firebase/firestore";
import { usersCollectionRef } from "../functions";
import BasicExample from "../Components/spinner";
import Button from "react-bootstrap/Button";
import { ShowStaffModal } from "../Components/modal";
import { show } from "../redux/actions";
import { useDispatch } from "react-redux";
const AllUser = () => {
  let dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [profile, setProfile] = useState({});
  const getUser = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(true);
  };
  const handleClick = (user) => {
    dispatch(show());
    setProfile(user);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <section>
      <ShowStaffModal profile={profile} />
      {loading ? (
        <table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Other Name</th>
              <th>Last Name</th>
              <th>Department</th>
              <th>Role</th>
              <th>Current Status</th>
              <th>Profile</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              const {
                firstname,
                lastname,
                othername,
                department,
                role,
                id,
                status,
              } = user;
              return (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>{firstname}</td>
                  <td>{othername}</td>
                  <td>{lastname}</td>
                  <td>{department}</td>
                  <td>{role}</td>
                  <td>{status}</td>
                  <td>
                    <Button onClick={() => handleClick(user)} variant="primary">
                      View Profile
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <BasicExample />
      )}
    </section>
  );
};

export default AllUser;
