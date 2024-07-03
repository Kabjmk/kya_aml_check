import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { RecordsTable } from '../../components/records-table/RecordsTable.comp';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb';
import { Link } from 'react-router-dom';
import {fetchAllRecords } from "../record-list/recordAction";


export const Dashboard = () => {
    const dispatch = useDispatch();
    const {records} = useSelector(state => state.records);

    useEffect(() => {
      if(!records.length) {
        dispatch(fetchAllRecords())
      }
    }, [records, dispatch])
    
    // const pendingRecords = records.filter(row => row.status !== "Closed");
    const totalRecords = records.length;

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
                <div>Total Records: {totalRecords}</div>
                {/* <div>New Records: {pendingRecords}</div> */}
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
