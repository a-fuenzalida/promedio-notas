import React from 'react';

import Nota from './Nota/Nota';

const listaNotas = props => (
  <div className="container">
    <div className="row mb-5">
      <div className="col-md-6 col-xs-12 m-3 mx-auto">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nota</th>
              <th scope="col">Porcentaje</th>
            </tr>
          </thead>
          <tbody>
            {
              props.notas.map((n, i) => 
                <Nota 
                  key={i} 
                  index={i} 
                  nota={n.nota} 
                  porcentaje={n.porcentaje} 
                  changed={(event) => props.changed(event, i)}
                />
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default listaNotas;