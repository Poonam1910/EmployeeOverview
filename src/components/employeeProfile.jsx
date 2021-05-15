//import EmployeeContext from './context/EmployeeContext';
import React from "react";
import {Breadcrumb} from 'react-bootstrap'
import { Table } from "reactstrap";
import EmployeeTable from "./employeeTable";
import EmployeeDetailTable from "./employeeDetailTable";

const EmployeeProfile = (props) => {
    const { employee,sortColumn,onSort} = props;
   return ( 
     <span>        
            <React.Fragment>
             <Breadcrumb>
             <Breadcrumb.Item href="/">Home</Breadcrumb.Item>               
             </Breadcrumb>
                <h4> Employee Profile</h4> 
                <EmployeeDetailTable
                employee={employee}
                sortColumn={sortColumn}
                onSort={onSort}
              />
              <br/>
                <h4> Direct Sub-Ordinates</h4>
               {
                    employee.directSubordinates && employee.directSubordinates.length>0?
                   <EmployeeTable
                        employees={employee.directSubordinates} 
                        sortColumn={sortColumn}
                        onSort={onSort}
                        /> 
                   :
                   <Table striped bordered dark > 
                   <thead style={{backgroundColor:"lightsteelblue", color:"black"}}> 
                   <tr style={{textAlign:"center"}}>                     
                     <td><b >Detail</b></td>                  
                   </tr>
                   </thead>       
                   
                   <tbody >
                     <tr><td> No Suborinates !! </td>                     
                     </tr>
                   </tbody>                  
                  </Table>                    
                }
                </React.Fragment>
           
            
        </span>
     );
}
 
EmployeeProfile.defaultProps = {
    sortColumn: { path: "Name", order: "asc" },
    employee:{},
    onSort:null
  };
export default EmployeeProfile;