import React from 'react'
import { useSelector } from 'react-redux';
import {Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const RecordsTable = () => {

    const {searchRecordList, isLoading, error} = useSelector((state) => state.records);

    if(isLoading) return <h3>Loading ....</h3>

    if(error) return <h3>{error}</h3>
   
  return (
    <Table striped border hover>
        <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Country</th>
                <th>Identifcation Number</th>
                <th>Status</th>
                <th>Date of Birth</th>
            </tr>
        </thead>
        <tbody> 
            {searchRecordList.length ? (searchRecordList.map((row)=>
            (<tr key={row._id}> 
                <td>{row._id}</td>
                <td><Link to={`/record/${row._id}`}>{row.First_Name}</Link></td>
                <td><Link to={`/record/${row._id}`}>{row.Middle_Name}</Link></td>
                <td><Link to={`/record/${row._id}`}>{row.Last_Name}</Link></td>  
                <th>{row.Country}</th>
                <td>{row.Identification_Number}</td>
                <th>{row.Status}</th>
                <th>{row.dateOfbirth}</th> 
            </tr>)))
            : 
            <tr>
                <td colSpan="4" className="text-center">No records to show{" "}</td>
            </tr>
            } 
        </tbody>
    </Table>
  )
};

