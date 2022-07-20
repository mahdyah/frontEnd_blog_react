import NavBar from "../layout/Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import Footer from "../layout/Footer";

const About=(props)=>{
    return(
        <div >
            <NavBar user={props.user} />

     <div  className="">
       
        <h1 class="font-weigh-light">Mahdyah Hassanyar</h1>
         
        
<Card style={{ width: '80%', margin:'50px 20px 130px 20px' }}>
      <Card.Img 
      style={{width:'300px', margin:'20px 20px 20px 27%'}}
       variant="fulid" 
       src="https://user-images.githubusercontent.com/59580413/180055619-75b9aa27-0fe5-4b77-bf99-bbeb5c65fd12.png" />

    
      <Card.Body>

        <Card.Title style={{margin:'20px 20px 20px 35%'}}>Mahdyah Hassanyar</Card.Title>
        <Card.Text>
        <p >
          I am passionate, curious, and I love coding because it involves critical thinking, problem solving and creativity. I have some knowledge in  languages like Java, JavaScript, HTML,CSS  and have developed multiple projects using node.js , React and mongodb. I am eager to learn new languages and technologies and improve my knowledge. I am looking for an entry level job to be able to do what I love (coding) with a team. 
        </p>
        </Card.Text>
      </Card.Body>
   
   
    </Card>
    
                       </div>
                       <Footer/>
        </div>
    )
}

export default About