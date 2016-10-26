import React from 'react';
import AddReservationForm from './AddReservationForm.jsx';

function handleSubmit() {
}

let AddReservationBtn = () => {
  return(
    <div id="basicModal">
      <a href="#" className="btn btn-lg btn-success" data-toggle="modal" data-target="#basicModal">Click to open Modal</a>

      <div className="modal fade" id="basicModal" tabIndex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&amp;times;</button>
                  <h4 className="modal-title" id="myModalLabel">Modal title</h4>
                  </div>
                  <div className="modal-body">
                      <h3>Modal Body</h3>
                  </div>
                  <div className="modal-footer">
                      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Save changes</button>
              </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AddReservationBtn;
