import React from "react";
import PropTypes from 'prop-types';
import { Form, Button, OverlayTrigger, Badge, Tooltip } from "react-bootstrap";

import TaskAdd from "./TaskAdd";
import './style.scss'
import TaskDataService from "@/services/TaskDataService";

const Tasklist = ({ tasks, projectId, watch }) => {

  const removeTask = async (_id) => {
    TaskDataService.delete(_id)
    watch(_id)
  }

  const markAsDone = async (_id) => {
    await TaskDataService.update(_id, {
      status: true
    })
    watch(_id)
  }

  return (
    <>
      <h5>TO DO</h5>

      {tasks.map((task) => (
        !task.status && (
        <div key={task.id} className="mb-3">
          <Form.Check className="d-flex" type="checkbox" id={`check-api-${task.id}`}>

              <Form.Check.Input onChange={() => markAsDone(task.id)} type="checkbox" isValid />

              <OverlayTrigger
                key="top"
                placement="top"
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <p>Status: <Badge bg="success">Pending</Badge></p>
                    <p>finish at: {task.finish_at}</p>
                  </Tooltip>
                }
              >
                <Form.Check.Label className="px-1">{task.description}</Form.Check.Label>
              </OverlayTrigger>
            <Button className="mx-1" variant="outline-primary" size="sm">
              <i className="fa fa-edit"></i>
            </Button>
            <Button onClick={() => removeTask(task.id)} className="mx-1" variant="outline-danger" size="sm">
              <i className="fa fa-trash"></i>
            </Button>
            </Form.Check>
        </div>
        )
      ))}
      <h5>DONE</h5>
      {tasks.map((task) => (
        task.status && (
          <div key={task.id} className="mb-3">
            <Form.Check className="d-flex" type="checkbox" id={`check-api-${task.id}`}>
              <Form.Check.Input type="checkbox" defaultChecked={task.status} disabled={task.status} />
              <Form.Check.Label className="px-1">{task.description} </Form.Check.Label>
            </Form.Check>
          </div>
        )
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
