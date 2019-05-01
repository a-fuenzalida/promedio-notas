import React from 'react';

const nota = props => (
  <tr>
    <th scope="row" className="align-middle">{props.index+1}</th>
    <td>
      <input 
        id="nota" 
        type="number" 
        max="70" 
        className="form-control w-75 campo" 
        placeholder="0" 
        onChange={props.changed}
      />
    </td>
    <td>
      <div className="input-group w-75">
        <input 
          id="porcentaje" 
          type="number" 
          max="70" 
          className="form-control campo" 
          placeholder="0" 
          onChange={props.changed}
        />
        <div className="input-group-append">
          <span className="input-group-text">%</span>
        </div>
      </div>
    </td>
  </tr>
);

export default nota;