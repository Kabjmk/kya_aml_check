import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { RecordsTable } from '../../components/records-table/RecordsTable.comp';
import records from "../../assets/data/dummy-records.json";
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb';
import { Link } from 'react-router-dom';


export const Dashboard = () => {
  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb page="Dashboard"/>
            </Col>
        </Row>
        <Row>
            <Col className="text-center mt-5 mb-2">
            <Link to="/add-record">
            <Button variant="info" style={{"fontSize":"2rem", padding: "10px 30px"}}>Add New Record</Button>
            </Link>
            </Col>
        </Row>
        <Row>
            <Col className="text-center mt-5 mb-2">
                <div>Total Records: 8,000</div>
                <div>New Records: 20</div>
            </Col>
        </Row>
        <Row>
            <Col className="mt-2"> Recently Added Records</Col>
        </Row>
        <Row>
            <Col className="recent-records">
                <RecordsTable records={records}/>
            </Col>
        </Row>
        <hr/>
    </Container>
  )
}
