import React from 'react'
import {Table} from 'react-bootstrap';
import ProptTypes from "prop-types";


export const RecordsTable = ({records}) => {
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
                <th>Date Created</th>
            </tr>
        </thead>
        <tbody> 
            {records.length ? (records.map((row)=>
            (<tr key={row.id}>
                <td>{row.item}</td>
                <td>{row.First_Name}</td>
                <td>{row.Middle_Name}</td>
                <td>{row.Last_Name}</td>  
                <th>{row.Country}</th>
                <td>{row.Identification_Number}</td>
                <th>{row.Status}</th>
                <th>{row.Date_Added}</th> 
            </tr>)))
            : 
            <tr>
                <td colSpan={8} className="text-center">No records to show</td>
            </tr>
            }
            
            
        </tbody>
    </Table>
  )
};

RecordsTable.propTypes = {
    records: ProptTypes.array.isRequired,
}
