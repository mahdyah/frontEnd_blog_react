import NavBar from "../layout/Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from "../layout/Footer";
const Contact=(props)=>{
    return(
        <div>
            <NavBar user={props.user} />
            

            <Card style={{ width: '80%', margin:'200px 20px 430px 20px' }}>
           

    
      <Card.Body>

        <Card.Title style={{margin:'20px 20px 20px 35%'}}><h1>Contact </h1></Card.Title>
        <div style={{margin:'20px 20px 20px 10%'}}>
        <ListGroup.Item>
       mahdyah.taheri@gmail.com
        </ListGroup.Item>
        
        <ListGroup.Item>
      Atlanta, Georgia, USA
        </ListGroup.Item>

        <ListGroup.Item>
        {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
        <a href='https://www.linkedin.com/in/mahdyah-hassanyar-823a25175/' className='me-4 text-reset'> <FontAwesomeIcon icon="fa-brands fa-linkedin" />LinkedIn</a>
        </ListGroup.Item>

        <ListGroup.Item>
       <a href='https://github.com/mahdyah' className='me-4 text-reset'> <i className='fab fa-github'>Github</i></a>
        </ListGroup.Item>
   
        </div>

      </Card.Body>
   
   
    </Card>
    <Footer/>
        </div>
    )
}

export default Contact