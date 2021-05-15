import React, { Component,Fragment } from "react";
import EmployeeTable from "./employeeTable";
import TablePagination from "./common/tablePagination";
import Search from "./common/search"
import { paginate } from "../utils/paginate";
import http from "../services/httpService";
import config from "../config.json";
import {Badge,Table} from "reactstrap"


class Employees extends Component {
  state = {
    employees: [],
    currentPage: 1,
    pageSize: 5,
    sortColumn: { path: "name", order: "asc" },
    search:""
  };

  updateSearch=(e)=> {
    this.setState({ search: e.target.value });
  }
 
    async componentDidMount () {
    const { data: employees } = await http.get(config.apiAllEmployeesEp);
    this.setState({ employees });
  }

  handlePageChange = page => {
   this.setState({ currentPage: page });
  };


  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      employees: allEmployees
    } = this.state;

    const filtered =
        this.state.search!==""   
    ? allEmployees.filter(name => name.toLowerCase().indexOf(this.state.search.toLowerCase())!==-1)
       : allEmployees;
    const sorted = sortColumn.order==='asc'?filtered.sort():filtered.reverse()
    const employees = paginate(sorted, currentPage, pageSize);
   return { totalCount: filtered.length, data: employees };
  };

  render() {
   const { pageSize, currentPage, sortColumn } = this.state;

    const { totalCount, data: employees } = this.getPagedData();

    return (
      
      <div style={{width:'500px'}}>
            <br/>
            <Search
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}          
         />          
         <br/>
           <p> Showing   
             <Badge pill variant="primary" color="primary" >
              {totalCount===0?'0':totalCount}
              </Badge> employees !! </p> 
                  {totalCount!==0?
                   <Fragment>
                <EmployeeTable
                  employees={employees}
                  sortColumn={sortColumn}
                  onSort={this.handleSort}
                />               
                <TablePagination
                  itemsCount={totalCount}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={this.handlePageChange}
                /> 
                    </Fragment>: 
            <Table striped bordered dark > 
                   <thead style={{backgroundColor:"lightsteelblue", color:"black"}}> 
                   <tr style={{textAlign:"center"}}>                     
                    <td> <b >Name</b>  </td>                  
                   </tr>
                   </thead>       
                   
                   <tbody >
                     <tr style={{textAlign:"center"}}>
                       <td> <label size="xs">Employee Not Found !! </label> </td>
                    
                     </tr>
                   </tbody>
                  
                  </Table>  } 
         
      </div>
    );
  }
}

export default Employees;
