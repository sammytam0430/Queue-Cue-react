//takes object and iterates through to display it
import React, {Component} from 'react';


const ListWidget = React.createClass ({

  checkForProps () {
    if (this.props.button1) {
      return (
        <tbody>
          {
            this.props.data.map((el) => {
              return <tr key={el.id}>
                <td> {el.name}</td>
                <td> {el.food_type}</td>
                <td><this.props.button1 {... el} /></td>
              </tr>
            })
          }
        </tbody>
      );
    } else {
      return (
        <tbody>
          {
            this.props.data.map((el) => {
              return <tr key={el.id}>
                <td> {el.id}</td>
                <td> {el.name}</td>
                <td> {el.food_type}</td>
                <td><this.props.button1 {... el} /></td>
              </tr>
            })
          }
        </tbody>
      );
    }
  },

  render() {
    return(
      <table>
        {this.checkForProps()}
      </table>
    )
  }
});

export default ListWidget;
