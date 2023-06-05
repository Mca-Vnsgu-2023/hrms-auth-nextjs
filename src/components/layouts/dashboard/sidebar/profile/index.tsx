import React, { Fragment } from 'react'
import Image from 'next/image'
import styles from './profile.module.scss'
function Profile(props: {
    isCollapse: boolean
}) {
    const { isCollapse } = props
    return (
        <Fragment>
            <div className={`${isCollapse ? 'p-2 justify-content-center' : 'p-3'} ${styles.profile} d-md-flex flex-column flex-shrink-0`}>
                <div className={`mx-auto`}>
                    {isCollapse ?
                        <Image src='/images/logo.svg'
                            alt='logo round'
                            width={35}
                            height={35}
                            loading='eager'
                            priority />
                        : <Image
                            src='/images/namelogo_light_bg.svg'
                            alt='logo light'
                            width={143}
                            height={42}
                            loading='eager'
                            priority
                        />
                    }
                </div>

                {!isCollapse &&
                    <Fragment>
                        <div className="mx-auto mt-4 mb-2">
                            <div className={`${styles.imagewrap}`}>
                                <Image
                                    src='/images/dummy.png'
                                    alt='dummy user'
                                    width={70}
                                    height={70}
                                />
                            </div>
                        </div>

                        <div className='text-center'>
                            <div className={`${styles.name} mx-auto mb-2`}>
                                Emily Smith
                            </div>
                            <div className={`${styles.role} mx-auto mb-4`}>
                                Manager
                            </div>
                        </div>
                    </Fragment>
                }
            </div>
        </Fragment>
    )
}

export default Profile