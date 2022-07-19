import NavBar from "../layout/Navbar";
const Contact=(props)=>{
    return(
        <div>
            <NavBar user={props.user} />
            <h1>Contact</h1>
        </div>
    )
}

export default Contact