import RegisterationForm from "../forms/RegisterForm"
import Login from "../forms/Login"
import { useState } from 'react'
import Footer from "../layout/Footer";

const SignUpandIn = (props) => {
    const [hasAccount, setHasAccount] = useState(false)
    const { setUser } = props

    return (
        <div>
            {
                hasAccount === false ?
                     (<div><RegisterationForm setUser={setUser} />
                         <p style={{margin:'0px 0 350px 0%',}} > Already Have an account ?{" "}
                            <span type="submit" className='btn btn-dark' onClick={() => 
                                setHasAccount(true)}>Login</span>{""}</p>
                    </div>) 
                    : (<Login setUser={setUser} />)

            }
            <Footer/>
        </div>
    )
}

export default SignUpandIn