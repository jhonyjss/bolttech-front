import React, { useCallback, useEffect, useMemo, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import { Col, Container, Row } from "react-bootstrap";
import ProjectDataService from "@/services/ProjectDataService"
import Tasklist from "@/components/task/Tasklist";
import ProjectCreate from "../components/project/ProjectCreate";

const Project = () => {
    const [project, setProject] = useState([])
    const [watch, setWatch] = useState(null)

    const fetchData = useCallback(async () => {
        const response = await ProjectDataService.all()
        setProject(response.data)
    }, [])

    useEffect(() => {
        fetchData()
    }, [watch])


    return (
        <Container>
            <Row className="mt-5">
                <Col md={6}>
                    <Accordion defaultActiveKey="0">
                        {project && project.map(item =>

                            <Accordion.Item key={item.id} eventKey={item.id}>
                                <Accordion.Header>Project:#{item.id} - {item.description}</Accordion.Header>
                                <Accordion.Body>
                                    <Tasklist watch={(e) => setWatch(e)} projectId={item.id} tasks={item.tasks} />
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                        }
                    </Accordion>
                </Col>
                <Col md={6}>
                    <ProjectCreate watch={(e) => setWatch(e)} />
                </Col>
            </Row>
        </Container>

    )
};

export default Project;
