import React, { Component } from "react";
import DTable from "./common/dTable";

class EmployeeTable extends Component {  
    columns = [ 
    {
        path: "name",
        label: "Name",
        content:(employee)=>         
         <a href={`/overview/${employee.replace(" ", "-")}`} 
        >{employee}</a>
      }
  ];    

  render() {
    const { employees,sortColumn,onSort} = this.props;
    return ( 
            <DTable
              columns={this.columns}
              data={employees}        
              sortColumn={sortColumn}
              onSort={onSort}
            />
    );
  }
}
// Set default props
EmployeeTable.defaultProps = {
  sortColumn: { path: "Name", order: "asc" },
  employees:[],
  onSort:{}
};

export default EmployeeTable;
