import {React, useEffect, useState} from 'react'
import {
    Card, CardBody,
    CardSubtitle
  } from 'reactstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import API from '../utils/API'
const PresidentChart = (props) => {
const [presidents, getPresidents] = useState([])
    useEffect(() => {
API.getPresident()
.then(res => {
    
    getPresidents(res.data)
})
    },[])

   
    return(
        <div className="chart">
        <Card>
        <CardBody>
          
          <CardSubtitle tag="h6" className="mb-2 text-muted">Strikes By President</CardSubtitle>
          <ResponsiveContainer height={300} minwidth={300} minheight={500}>
        <BarChart
        height={500}
        width={300}
          data={presidents}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="president" />
          <YAxis />
          <Tooltip />
          <Legend />
         
          <Bar dataKey="numofstrikes" fill="#1287F5" />
        </BarChart>
        </ResponsiveContainer>
        </CardBody>
      </Card> 
      </div>
    )
}

export default PresidentChart