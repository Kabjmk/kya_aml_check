import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {fetchAllRecords} from "./recordAction"; 
import { Container, Row, Col, Button } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb'
import { SearchForm } from '../../components/search-form/SearchForm.comp'
import {RecordsTable} from "../../components/records-table/RecordsTable.comp"
import { Link } from 'react-router-dom';


export const RecordLists = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllRecords());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Record Lists"/>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
        <Link to="/add-record">
          <Button variant="info">Add New Record</Button>
          </Link>
        </Col>
        <Col className="text-end">
          <SearchForm />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <RecordsTable  />
        </Col>
      </Row>
    </Container>
  )
};
