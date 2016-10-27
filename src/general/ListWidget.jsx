//takes object and iterates through to display it
import React, {Component} from 'react';


const ListWidget = React.createClass ({

  checkForProps () {
    if (this.props.button1) {
      return (
        this.props.data.map((el) => {
          return <tr key={el.id}>
            <td> {el.name}</td>
            <td> {el.food_type}</td>
            <td> {el.location}</td>
            <td><this.props.button1 {... el} /></td>
          </tr>
        })
      );
    } else {
      return (
        this.props.data.map((el) => {
          return <tr key={el.id}>
            <td> {el.id}</td>
            <td> {el.name}</td>
            <td> {el.food_type}</td>
            <td><this.props.button1 {... el} /></td>
          </tr>
        })
      );
    }
  },

  render() {
    return(
      <tbody className="list-table">
        {this.checkForProps()}
      </tbody>
    )
  }
});

export default ListWidget;
