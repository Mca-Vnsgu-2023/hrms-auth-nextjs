import React from 'react'
import styles from "./loginText.module.scss"
import Image from 'next/image'

function LoginText() {
    return (
        <section className={styles.leftSection}>
            <Image
                width={255}
                height={80}
                alt='user img'
                src={'/images/namelogo_dark_bg.svg'}
                loading='eager'
                priority
                className={`${styles.logo}`}
            />
            <div className={styles.loginText}>
                <p>
                    <span>H</span>uman
                </p>
                <p>
                    <span>R</span>esource
                </p>

                <p>
                    <span>M</span>anagement
                </p>
                <p>
                    <span>S</span>ystem
                </p>
            </div>
        </section>
    )
}

export default LoginText