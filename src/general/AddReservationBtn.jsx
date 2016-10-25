import React from 'react';

function handleSubmit() {
  browserHistory.push("/restaurants/:restaurantId")
}

let AddReservationBtn = () => {
  return(

    <div>
      <button>
        Add a Reservation
      </button>
    </div>
  )
}

export default AddReservationBtn;
