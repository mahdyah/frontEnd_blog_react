import {NavLink} from 'react-router-dom'
import UpdateBlog from '../forms/UpdateBlog'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const NavBar=(props)=>{
    // console.log(props.user)
    return(
        <Navbar bg="dark" variant="dark" fixed="top"  style={{margin:'0,0,50px,0'}}>
        <Container>
          <Navbar.Brand as={NavLink} to="/">Everything and Nothing</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
            {props.user && <Nav.Link as={NavLink} to="/new">Create Blog</Nav.Link>}
            {props.user && <Nav.Link as={NavLink} to="/update">Edit Blog</Nav.Link>}
            {props.user ? 
             <NavDropdown title='Welcome Back' id="navbarScrollingDropdown">
             <NavDropdown.Item ><span>{props.user.username}</span></NavDropdown.Item>
             <NavDropdown.Item href="home"> Logout
        </NavDropdown.Item>
             <NavDropdown/>
    
           </NavDropdown>
            :<Nav.Link as={NavLink} to="/login">Login</Nav.Link>}
          </Nav>
        </Container>
      </Navbar>
        // <nav>
        //     <ul>
        //         <li className="nav-item">
        //             <NavLink to='/' className='nav-link'>Home</NavLink>
        //         </li>
        //         <li className="nav-item">
        //            <NavLink to='/about' className='nav-link'>About</NavLink>

        //         </li>
        //         <li className="nav-item"> 
        //         <NavLink to='/login' className='nav-link'>Login</NavLink>
        //         </li>
        //        { props.user && <li className="nav-item"> 
        //         <NavLink to='/new' className='nav-link'>New Post</NavLink>
        //         </li>}
        //         { props.user && <li className="nav-item"> 
        //         <NavLink to='/update' className='nav-link'>Edit Post</NavLink>
        //         </li>}
        //         {props.user && <span>{props.user.username}</span> }
        //     </ul>
        // </nav>
    )
}
export default NavBar