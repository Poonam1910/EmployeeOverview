import React, { Component } from "react";
import DTable from "./common/dTable";

class EmployeeDetailTable extends Component {
   
  columns = [ 
     {
        path: "name",
        label: "Name"       
      },
      {
        path: "designation",
        label: "Designation"       
      }
     
  ];    

  render() {
    const { employee,sortColumn,onSort} = this.props;

    return (
      <DTable
        columns={this.columns}
        data={employee}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}
// Set default props
EmployeeDetailTable.defaultProps = {
  sortColumn: { path: "Name", order: "asc" },
  employees:[],
  onSort:{}
};

export default EmployeeDetailTable;
