import React, { } from "react";
import { Form, Button } from 'react-bootstrap';
import ProjectDataService from "@/services/ProjectDataService";
import "./style.scss"

const ProjectCreate = (props) => {

    async function create(e) {
        e.preventDefault()
        let description = e.target[0].value
        if (!description) {
            alert("Theres no description of this project, please create one")
        }

        const response = await ProjectDataService.create({
            description,
            user_id: 1
        })
        description = ''
        e.target.reset();
        props.watch(response.data)
    }

    return (
        <section className="project-create">
            <Form onSubmit={create}>
                <h2>Create a new Project</h2>
                <Form.Control type="text" placeholder="Project name" />
                <div className="d-grid gap-2 my-4">
                    <Button variant="primary" type="submit">
                        Create Project
                    </Button>
                </div>
            </Form>
        </section>
    )
};

export default ProjectCreate;
