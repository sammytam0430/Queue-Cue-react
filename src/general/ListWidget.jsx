//takes object and iterates through to display it
import React, {Component} from 'react';


const ListWidget = React.createClass ({



  render() {
    return (
      <div>
        <h1>List Widget</h1>
        {
          this.props.data.map((el) =>
          {
            return <div key={el.id}>
              <pre >{JSON.stringify(el)}</pre>
              <this.props.button1 {... el} />
            </div>;
          })
        }
      </div>
    );
  }
});

export default ListWidget;
