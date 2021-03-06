import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    if(item)
     return item._id + (column.path || column.key);
     else
     return  (column.path || column.key);
    
  };

  render() 
  {
    const { data, columns } = this.props;
    return (        
     data.length>0?   
     <tbody>
       {       
            data.map(item => (
              <tr key={item}>
                {columns.map(column => (                
                  <td key={this.createKey(item, column)}>
                    {this.renderCell(item, column)}
                  </td>
                ))}
              </tr>
            ))
        } 
      </tbody>
        :
      <tbody>
            <tr>
              {columns.map(column => (                
                <td key={this.createKey({},column)}>
                  {this.renderCell(data, column)}
                </td>
              ))} 
          </tr>
      </tbody>
    );
  }
}

export default TableBody;
