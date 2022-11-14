import React, { useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import { Col, Container, Row } from "react-bootstrap";
import ProjectDataService from "@/services/ProjectDataService"
import Tasklist from "@/components/task/Tasklist";

const Project = () => {
    const [project, setProject] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        // You can await here
        const response = await ProjectDataService.all()
        setProject(response.data)
    }
    return (
        <Container>
            <Row className="mt-5">
                <Col md={6}>
                    <Accordion defaultActiveKey="0">
                        {project && project.map(item =>

                            <Accordion.Item key={item.id} eventKey={item.id}>
                                <Accordion.Header>Project:#{item.id} - {item.description}</Accordion.Header>
                                <Accordion.Body>
                                    {item.tasks.length > 0 ? <Tasklist projectId={item.id} tasks={item.tasks} /> : ""}
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                        }
                    </Accordion>
                </Col>
                <Col md={6}></Col>
            </Row>
        </Container>

    )
};

export default Project;
