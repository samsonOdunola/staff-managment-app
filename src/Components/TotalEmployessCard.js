import { HiOutlineUserGroup } from "react-icons/hi";
import { useState, useEffect } from "react";
const TotalEmployessCard = ({ users }) => {
  const [count, setCount] = useState(0);
  const countUser = () => {
    let count = 0;
    for (let i = 0; i < users.length; i++) {
      count += 1;
    }
    setCount(count);
  };
  useEffect(() => {
    countUser();
  }, [users]);
  return (
    <>
      <h3>Total employees</h3>
      <div>
        <p>{count}</p>
        <HiOutlineUserGroup className="cardicon" />
      </div>
    </>
  );
};

export default TotalEmployessCard;
