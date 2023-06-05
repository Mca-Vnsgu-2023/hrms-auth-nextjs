import React, { Fragment } from 'react'
import styles from "./login.module.scss"
import LoginText from "./loginText"
import Form from "./form"

function Login() {
    return (
        <Fragment>
            <div className={styles.loginContainer}>
                <div className={`container`}>
                    <div className={`${styles.loginWrap}`}>
                        <div className={styles.loginSection}>
                           <LoginText />
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login