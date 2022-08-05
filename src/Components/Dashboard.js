import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { IoNotificationsSharp } from "react-icons/io5";
import { CgUnavailable } from "react-icons/cg";
import { AiOutlineCheck, AiOutlineDelete } from "react-icons/ai";
import { getDocs } from "firebase/firestore";
import { usersCollectionRef, taskCollectionRef } from "../functions";
import { useNavigate } from "react-router-dom";
import { AddtaskModal } from "./modal";
import { useDispatch } from "react-redux";
import { show } from "../redux/actions";
import BasicExample from "./spinner";
import UpcomingBirthdayCard from "./UpcomingBirthdayCard";
import TotalEmployessCard from "./TotalEmployessCard";

const Dashboard = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [allTask, setAllTask] = useState([]);
  const getUser = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(true);
  };
  const getTasks = async () => {
    const taskData = await getDocs(taskCollectionRef);
    setAllTask(taskData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <AddtaskModal />
      <section>
        {loading ? (
          <div className="dashboardcontainer">
            <div className="cards">
              <div className="searchbar">
                <div>
                  <input placeholder="search user"></input>
                  <button>
                    <BsSearch className="searchicon" />
                  </button>
                </div>
                <button>
                  <IoNotificationsSharp className="notificon" />
                </button>
              </div>
              <div className="board">
                <h1>Hello Samson</h1>
              </div>
              <div className="gridcontainer">
                <div className="div1 gridcards stats totalemployescard">
                  <TotalEmployessCard users={users} />
                </div>
                <div className="div2 stats gridcards outofofficecard">
                  <h3>Total staff out of office</h3>
                  <div>
                    <p>2</p>
                    <CgUnavailable
                      style={{
                        color: "FF6150",
                        backgroundColor: "hsl(6, 100%, 80%)",
                      }}
                      className="cardicon"
                    />
                  </div>
                </div>
                <div className="div3 stats gridcards">
                  <h3>Empty Slot</h3>
                  <div>
                    <p>0</p>
                    <CgUnavailable
                      style={{
                        color: "hsl(180, 58%, 58%)",
                        backgroundColor: "hsl(180, 58%, 90%)",
                      }}
                      className="cardicon"
                    />
                  </div>
                </div>
                <div className="div4 gridcards">
                  <UpcomingBirthdayCard birthdayarray={users} />
                </div>
                <div className="div5 gridcards"></div>
                <div className="div6 gridcards">
                  <h3>Who is out of office</h3>
                </div>
                <div className="div7 tasks gridcards">
                  <div className="taskhead">
                    <h4>Tasks</h4>
                    <span>
                      <button onClick={() => dispatch(show())}>
                        + Add Task
                      </button>
                    </span>
                  </div>

                  <ol className="tasklist">
                    {allTask.map((task, index) => {
                      const { taskname, id } = task;
                      return (
                        <li key={id}>
                          <p>{`${index + 1} ${taskname}`}</p>
                          <span>
                            <button
                              style={{
                                color: "hsl(112, 75%, 47%)",
                                backgroundColor: "hsl(112, 75%, 80%)",
                              }}
                            >
                              <AiOutlineCheck />
                            </button>
                            <button
                              style={{
                                color: "hsl(0, 75%, 47%)",
                                backgroundColor: "hsl(0, 75%, 80%)",
                              }}
                            >
                              <AiOutlineDelete />
                            </button>
                          </span>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>
              <button
                className="addstaffbtn"
                onClick={() => navigate("/adduser")}
              >
                add new staff
              </button>
            </div>
          </div>
        ) : (
          <BasicExample />
        )}
      </section>
    </>
  );
};

export default Dashboard;
