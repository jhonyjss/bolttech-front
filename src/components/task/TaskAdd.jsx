import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Form, Button } from "react-bootstrap";
import TaskDataService from "@/services/TaskDataService";

const TaskAdd = ({ projectId, watch }) => {
    const [minDate, setMinDate] = useState(null)

    useEffect(() => {
        let today = new Date();
        today = today.toLocaleDateString('en-GB').split('/').reverse().join('-')
        setMinDate(today)
    }, [])



    async function create(e) {
        e.preventDefault()
        const description = e.target[0].value
        const finish_at = e.target[2].value

        if (!description) {
            alert("Theres no description of this task, please create one")
            return
        }

        if (!finish_at) {
            alert("Select when finish this todo")
            return
        }

        const response = await TaskDataService.create({
            description,
            finish_at,
            user_id: 1,
            project_id: projectId,
            "status": false,
        })
        e.target.reset();
        watch(response.data)

    }

    return (
        <Form onSubmit={create}>
            <div className="d-flex">
                <Form.Control
                    type="text"
                    id="inputPassword5"
                    className="mb-2"
                    placeholder="Describe your todo..."
                    aria-describedby="passwordHelpBlock"
                />

                <Button type="submit" className="mx-1" variant="success">
                    add
                </Button>
            </div>
            <label htmlFor="task-date">
                Finish at
                <input className="form-control" id="task-date" type="date" min={minDate} format="yyyy-mm-dd" />
            </label>
        </Form>

    )
};

TaskAdd.propTypes = {
    projectId: PropTypes.number.isRequired,
}
export default TaskAdd;
