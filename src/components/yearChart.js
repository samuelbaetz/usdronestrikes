import {React, useEffect, useState} from 'react'
import {
    Card, CardBody,
    CardSubtitle
  } from 'reactstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import API from '../utils/API'
const YearChart = (props) => {
const [year, setYear] = useState([])
    useEffect(() => {
API.getYear()
.then(res => {
    
    setYear(res.data)
})
    },[])

   
    return(
        <div className="chart2">
        <Card>
        <CardBody>
          
          <CardSubtitle tag="h6" className="mb-2 text-muted">Strikes By Year</CardSubtitle>
          <ResponsiveContainer height={300} minwidth={300} minheight={500}>
        <LineChart
          width={500}
          height={300}
          data={year}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="numofstrikes" stroke="#1287F5" activeDot={{ r: 8 }} />
          
        </LineChart>
        </ResponsiveContainer>
        </CardBody>
      </Card> 
      </div>
    )
}

export default YearChart