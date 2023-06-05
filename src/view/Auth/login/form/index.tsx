'use client';
import React, { useState } from 'react'
import styles from "./form.module.scss"
import { signIn, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation';
import { Form, InputGroup } from 'react-bootstrap';
import { default as EmailIcon } from "./icons/email.svg"
import { default as PasswordShow } from "./icons/password_show.svg"
import { default as PasswordHide } from "./icons/password_hide.svg"

function LoginForm() {

    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const { status } = useSession()
    const togglePassword = () => {
        setShowPassword(x => !x)
    }
    const [validated, setValidated] = useState(false);

    const handleLogin = async (formdata: FormData) => {
        setIsLoading(true)

        const username = formdata.get('username')
        const password = formdata.get('password')

        if (!username || !password) {
            setValidated(true)
        } else {
            const res = await signIn('credentials', {
                username,
                password,
                redirect: false,
                callbackUrl: '/dashboard',
            })
            setError('')
            if (res?.error) {
                setError(res?.error)
            }
        }
        setIsLoading(false)
    }

    if (status === 'authenticated') {
        redirect("/dashboard")
    }


    return (
        <div className={styles.loginForm}>
            <p className={styles.title}>Login</p>
            <Form noValidate validated={validated} action={handleLogin}>
                <Form.Group controlId="validationusername">
                    <Form.Label>Username :</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control
                            type='text'
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="Username"
                            name='username'
                            required
                        />
                        <InputGroup.Text id="Username">
                            <EmailIcon />
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="validationpassword">
                    <Form.Label>Password :</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control
                            type={showPassword ? "text" : "password"}
                            name='password'
                            placeholder="Password"
                            aria-label="user password"
                            aria-describedby="pass-addon"
                            required
                        />
                        <InputGroup.Text id="password" onClick={togglePassword}>
                            {showPassword ? <PasswordShow /> : <PasswordHide />}
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>

                <div className="w-100">
                    <button type='submit' className={`w-100 btn btn-primary ${styles.loginButton}`}>
                        {isLoading || status == 'loading' ? `Loading...` : `Login`}
                    </button>
                </div>
                {error && <div className="w-100 mt-3 text-center text-danger">
                    {error}
                </div>}
            </Form>

            {/* <div>
                <button onClick={() => signIn()}>sign in with gooogle</button>
            </div> */}

        </div >
    )
}

export default LoginForm