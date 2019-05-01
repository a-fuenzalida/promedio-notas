import React from 'react';

const footer = props => (
  <div className="card fixed-bottom w-100">
    <div className="card-body">
      <div className="row">
        <div className="col-6 px-0 text-center">
          <button className="btn btn-success mx-1" onClick={props.addScore}><i className="fas fa-plus"></i></button>
          <button className="btn btn-danger mx-1" onClick={props.deleteScore}><i className="far fa-trash-alt"></i></button>
          <button className="btn btn-info mx-1" onClick={props.showInfo}><i className="far fa-question-circle"></i></button>
        </div>
        <div className="col-6 text-center">
          <small>Promedio: </small>
          <input className="form-control d-inline w-50" value={props.promedio} disabled />
        </div>
      </div>
    </div>
  </div>
);

export default footer;