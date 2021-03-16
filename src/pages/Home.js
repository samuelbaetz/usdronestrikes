import React from 'react'
import StrikesMap from '../components/datamap'
import { Container, Row, Col } from 'reactstrap';
import Count from '../components/civilianCount'
import PresidentChart from '../components/presChart'
import YearChart from '../components/yearChart'
const Home = (props) => {
    return(
        <div>
        <Container fluid={true}>
        <Row>
        <Col>
        <StrikesMap/>
        </Col>
        </Row>
        <Row>
          <Col>
            <Count/>
          </Col>
        </Row>
        <Row>
            <Col>
        <PresidentChart/>
            </Col>
        </Row>
        <Row>
          <Col>
          <YearChart/>
          </Col>
        </Row>
        </Container>
        <footer class="bg-light text-center text-lg-start">
 
 <div class="text-center p-3">
 Inital data collected from 
   <a class="text-dark" href="https://www.newamerica.org/international-security/reports/americas-counterterrorism-wars/"> New America</a>
 </div>

</footer>
        </div>
    )
}
export default Home