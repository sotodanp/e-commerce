import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useLogin } from '../../hooks/useLogin'
import { useSignup } from '../../hooks/useSignup'
import './Login.css'
import StoreIcon from '@mui/icons-material/Store';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const { error, login } = useLogin()
    const { signup } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(email, password)
        navigate('/')
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        await signup(email, password)
        navigate('/')
    }


    return (
        <div className='login'>
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="login-logo">
                    <StoreIcon className="login-logoImage" fontSize="large" />
                    <h2 className="login-logoTitle">eSHOP</h2>
                </div>
            </Link>

            <div className='login-container'>
                <h1>Sign-in</h1>

                <form onSubmit={handleSubmit}>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login-signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login-registerButton' onClick={handleRegister}>Create your eShop Account</button>
            </div>
        </div>
    )
}

export default Login
