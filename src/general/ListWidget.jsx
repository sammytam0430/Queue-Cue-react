//takes object and iterates through to display it
import React, {Component} from 'react';


const ListWidget = React.createClass ({



  render() {
    return (
      <div>
        <h1>List Widget</h1>
        {
          this.props.data.map((el) =>{
           return <pre key={el.id}>{JSON.stringify(el)}</pre>;
          })
        }
      </div>
    );
  }
});

export default ListWidget;
