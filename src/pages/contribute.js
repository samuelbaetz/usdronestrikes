import {React, useState} from 'react'
import { Container,Button, Form, FormGroup, Label, Input} from 'reactstrap';
import API from '../utils/API'
const Contribute = (props) => {
    const [formObject, setFormObject] = useState({})
    function handleInputChange(event){
        const {name, value} = event.target;
        setFormObject({...formObject, [name]: value})
        console.log(formObject)
    }
    function handleFormSubmit(event){
        event.preventDefault()
        if(formObject.date && formObject.village && formObject.region && formObject.country && formObject.president){
            API.postContribute({
                date: formObject.date,
                village: formObject.village,
                region: formObject.region,
                country: formObject.country,
                militants_avg: formObject.militants,
                unknown_avg: formObject.unknown,
                civilian_avg: formObject.civilian,
                president_name: formObject.president,
                target_organization_name: formObject.target,
                csrfmiddlewaretoken: window.CSRF_TOKEN
            })
            .then(res => console.log(res.data))
            
        }else{
            alert("Requirements not met :(")
        }
    }
    return(
        <Container fluid={true}>
            <div className="bg-light p-5 rounded-lg m-3 imgheader">
                <h1>Contribute</h1>
                <p>All submissions will be subjected to a thorough review process. If approved the entry will be added into the database.</p>
            </div>
            <div className="bg-light p-5 rounded-lg m-3 imgheader">
            <Form enctype="multipart/form-data">
      <FormGroup>
        <Label for="date">Date</Label>
        <Input type="date" name="date" id="eventDate" onChange={handleInputChange} placeholder="MM/DD/YYYY" />
        <Label for="village">Village</Label>
        <Input type="text" name="village" id="village" onChange={handleInputChange} />
        <Label for="region">Region</Label>
        <Input type="text" name="region" id="region" onChange={handleInputChange} />
        <Label for="country">Country</Label>
        <Input type="text" name="country" id="country" onChange={handleInputChange} />
        <Label for="militants_avg"># of Militants Killed</Label>
        <Input type="text" name="militants" id="militants" placeholder="Not Required" onChange={handleInputChange}/>
        <Label for="unknown_avg"># of Unknown Killed</Label>
        <Input type="text" name="unknown" id="unknown" placeholder="Not Required" onChange={handleInputChange} />
        <Label for="civilians_avg"># of Civilians Killed</Label>
        <Input type="text" name="civilian" id="civilian" placeholder="Not Required" onChange={handleInputChange}/>
        <Label for="exampleEmail">President When Strike Occured</Label>
        <Input type="text" name="president" id="president" onChange={handleInputChange} />
        <Label>Target Organization</Label>
        <Input type="text" name="target" id="target" placeholder="Not Required" onChange={handleInputChange} />

      </FormGroup>
    <Button onClick={handleFormSubmit}>Submit</Button>
    </Form>
            </div>
        </Container>
    )
}
export default Contribute