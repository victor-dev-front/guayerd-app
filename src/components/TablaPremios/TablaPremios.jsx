import React from 'react'
import {Table} from 'react-bootstrap'

const TablaPremios = () => {
    return (
        <div>
  <Table responsive="sm" size="lg">
    <thead>
      <tr>
        
        <th>Año</th>
        <th>Premio</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1959</td>
        <td>Mejor Bici del Mundo Mundial</td>
      
      </tr>
      <tr>
        <td>1978</td>
        <td>Mejor Pedal para no Humanos</td>
      
      </tr>
      <tr>
        <td>1983</td>
        <td>Gran campeón</td>
        
      </tr>
      <tr>
        <td>1994</td>
        <td>Premio al Diseño Experimental</td>
        
      </tr>
      <tr>
        <td>2006</td>
        <td>Quinto Puesto Mundial de Bicis</td>
        
      </tr>


    </tbody>
  </Table>
  </div>

    )
}

export default TablaPremios
