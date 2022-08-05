import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { hide } from "../redux/actions";
import { taskCollectionRef } from "../functions";
import { addDoc } from "firebase/firestore";

function AddtaskModal() {
  let dispatch = useDispatch();
  const globalState = useSelector((state) => state.states.addTaskDisplay);
  const [newTask, setAddNewTask] = useState("");

  const addTask = async () => {
    let updatedTaskList = { taskname: newTask };
    await addDoc(taskCollectionRef, updatedTaskList);
    dispatch(() => hide());
  };

  return (
    <>
      <Modal
        show={globalState}
        onHide={() => dispatch(hide())}
        dialogClassName="modal-60vw"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Add New Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            value={newTask}
            onChange={(event) => setAddNewTask(event.target.value)}
            className="addtask"
            placeholder="input new tasks"
          ></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => addTask(newTask)}>
            Add Task
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
const ShowStaffModal = ({ profile }) => {
  let dispatch = useDispatch();
  const { firstname, lastname, othername } = profile;
  const globalState = useSelector((state) => state.states.showProfileModal);

  return (
    <>
      <Modal
        show={globalState}
        fullscreen={true}
        onHide={() => dispatch(hide())}
      >
        <Modal.Header closeButton>
          <Modal.Title>{`${firstname} ${othername} ${lastname}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{firstname}</Modal.Body>
      </Modal>
    </>
  );
};

export { AddtaskModal, ShowStaffModal };
