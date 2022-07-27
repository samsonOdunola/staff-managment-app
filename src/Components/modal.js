import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { hide } from "../redux/actions";
import { taskCollectionRef } from "../functions";
import { addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
function AddtaskModal() {
  let navigate = useNavigate();
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

export { AddtaskModal };
