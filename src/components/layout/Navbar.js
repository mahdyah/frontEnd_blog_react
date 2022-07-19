import {NavLink} from 'react-router-dom'
import UpdateBlog from '../forms/UpdateBlog'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

const NavBar=(props)=>{
    // console.log(props.user)
    return(
    //     <Navbar bg="dark" variant="dark">
    //     <Container>
    //       <Navbar.Brand href="#home">Everything and Nothing</Navbar.Brand>
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#about">About</Nav.Link>
    //         <Nav.Link href="#contact">Contact</Nav.Link>
    //         {props.user && <Nav.Link href="#new">Create Blog</Nav.Link>}
    //         {props.user && <Nav.Link href="#update">Edit Blog</Nav.Link>}
    //         {props.user ? <span>{props.user.username}</span>:<Nav.Link href="#login">Login</Nav.Link>}
    //       </Nav>
    //     </Container>
    //   </Navbar>
        <nav>
            <ul>
                <li className="nav-item">
                    <NavLink to='/' className='nav-link'>Home</NavLink>
                </li>
                <li className="nav-item">
                   <NavLink to='/about' className='nav-link'>About</NavLink>

                </li>
                <li className="nav-item"> 
                <NavLink to='/login' className='nav-link'>Login</NavLink>
                </li>
               { props.user && <li className="nav-item"> 
                <NavLink to='/new' className='nav-link'>New Post</NavLink>
                </li>}
                { props.user && <li className="nav-item"> 
                <NavLink to='/update' className='nav-link'>Edit Post</NavLink>
                </li>}
                {props.user && <span>{props.user.username}</span> }
            </ul>
        </nav>
    )
}
export default NavBar