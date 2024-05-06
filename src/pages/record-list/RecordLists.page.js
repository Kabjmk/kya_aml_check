import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb'
import { SearchForm } from '../../components/search-form/SearchForm.comp'
import {RecordsTable} from "../../components/records-table/RecordsTable.comp"
import records from "../../assets/data/dummy-records.json";
import { Link } from 'react-router-dom';


export const RecordLists = () => {
  const [str, setstr] = useState("");
  const [displayRecord, setdisplayRecord] = useState(records);

  useEffect(() => {}, [str, displayRecord]);
  

  const handleOnChange = e => {
    const {value} = e.target;
    setstr(value);
    searchRecord(value);  

  };

  const searchRecord = sttr => {
    const displayRecords = records.filter((row)=> row.First_Name.toLowerCase().includes(sttr.toLowerCase()));
  
    setdisplayRecord(displayRecords);  
  };

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
          <SearchForm 
          handleOnChange={handleOnChange} 
          str={str}
          />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <RecordsTable records={displayRecord} />
        </Col>
      </Row>
    </Container>
  )
}
