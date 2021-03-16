import {React} from 'react'
import {connect} from 'react-redux'
import {
    Card, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';
import CountUp from 'react-countup'
const Count = (props) => {
    var total = 0
    for (var i=0; i < props.strikes.length; i++){
        total = total + props.strikes[i].civilians_avg
    }
    var overallTotal = 0
    for (var i=0; i < props.strikes.length; i++){
        overallTotal = overallTotal + props.strikes[i].total_avg
    }
    return(
        <div className="topleftstat">
        <CardDeck>
      <Card>
        <CardBody>
          
          <CardSubtitle tag="h6" className="mb-2 text-muted">Total Average of Civilian Deaths</CardSubtitle>
       <h1><CountUp end={total} duration={5}/></h1>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
         
          <CardSubtitle tag="h6" className="mb-2 text-muted">Total Average of Overall Deaths</CardSubtitle>
          <h1><CountUp end={overallTotal} duration={5}/></h1>
        </CardBody>
      </Card>
      
    </CardDeck>
      </div>
    )
}
const mapStateToProps = state => {
    return {
        strikes: state.strikes
    }
}


export default connect(mapStateToProps)(Count)
