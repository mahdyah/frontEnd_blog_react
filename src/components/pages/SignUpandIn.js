import RegisterationForm from "../forms/RegisterForm"
import Login from "../forms/Login"
import { useState } from 'react'
const SignUpandIn = (props) => {
    const [hasAccount, setHasAccount] = useState(false)
    const { setUser } = props

    return (
        <div><h1>Login</h1>
            {
                hasAccount === false ?
                     (<div><RegisterationForm setUser={setUser} />
                         <p> Already Have an account ?{" "}
                            <span className='btn btn-primary' onClick={() => 
                                setHasAccount(true)}>Login</span>{""}</p>
                    </div>) 
                    : (<Login setUser={setUser} />)

            }
        </div>
    )
}

export default SignUpandIn