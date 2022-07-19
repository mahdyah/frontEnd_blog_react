import NavBar from "../layout/Navbar";
const About=(props)=>{
    return(
        <div>
            <NavBar user={props.user} />
            <h1>About</h1>
        </div>
    )
}

export default About