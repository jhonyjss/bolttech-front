import React, { useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import { Col, Container, Row } from "react-bootstrap";
import ProjectDataService from "@/services/ProjectDataService"

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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
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
