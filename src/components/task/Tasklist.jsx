import React from "react";
import PropTypes from 'prop-types';
import { Form, Button } from "react-bootstrap";
import TaskAdd from "./TaskAdd";
import './style.scss'
import TaskDataService from "@/services/TaskDataService";

const Tasklist = ({ tasks, projectId, watch }) => {

  const removeTask = async (_id) => {
    TaskDataService.delete(_id)
    watch(_id)
  }

  return (
    <>
      {tasks.map((task) => (
        <div key={task.id} className="mb-3">
          <Form.Check className="d-flex" type="checkbox" id={`check-api-${task.id}`}>
            <Form.Check.Input type="checkbox" isValid />
            <Form.Check.Label className="px-1">{task.description}</Form.Check.Label>
            <Button className="mx-1" variant="outline-primary" size="sm">
              <i className="fa fa-edit"></i>
            </Button>
            <Button onClick={() => removeTask(task.id)} className="mx-1" variant="outline-danger" size="sm">
              <i className="fa fa-trash"></i>
            </Button>
          </Form.Check>

        </div>
      ))}
      <hr />
      <TaskAdd watch={(e) => watch(e)} projectId={projectId} />
    </>
  )
};

Tasklist.propTypes = {
  tasks: PropTypes.array,
  projectId: PropTypes.number.isRequired,
}
export default Tasklist;
