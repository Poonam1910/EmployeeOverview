import React, { Component } from "react";
import EmployeeProfile from "./employeeProfile";
import config from "../config.json";
import http from "../services/httpService";

class EmployeeDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            emp:
            {
                name:'',
                designation:'',
                directSubordinates:[]
            }          
         }
      }
    
      setEmployeeDetail =(key,value)=>{
        var emp = {...this.state.emp}   
        emp[`${key}`] = typeof(value)==='string'? value.replace("-", " "):value ;
        this.setState({emp})
        return emp;
      }
    
    async  componentDidMount()
     {
        await this.setEmployeeDetail('name',this.props.match.params.eName);
        const{name}=this.state.emp;
        if(name)
        {
            const { data } = await http.get(`${config.apiAllEmployeesEp}${name}`)
            await this.setEmployeeDetail('designation',data[0]);
            const subOrd=data[1];
            if(subOrd && subOrd[Object.keys(subOrd)[0]].length>0)
            await this.setEmployeeDetail('directSubordinates', subOrd[Object.keys(subOrd)[0]]);          
            
        }
     }
    render() { 
        const { sortColumn} = this.props;
        return (
        <EmployeeProfile employee={this.state.emp}  sortColumn={sortColumn} /> );
    }
}
 
export default EmployeeDetail;