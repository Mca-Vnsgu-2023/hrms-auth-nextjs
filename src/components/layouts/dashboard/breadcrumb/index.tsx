"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

function Breadcrumb() {
    const pathname = usePathname();
    const pathArr = pathname.split('/') || []
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb border-bottom m-0">
                {pathArr.map((path, index) => {
                    if (path != '')
                        return (
                            <li key={`breadcrumb-item-${path}-${index}`} className="breadcrumb-item text-capitalize">
                                <Link href={'/'}>{path}</Link>
                            </li>
                        )
                })}
            </ol>
        </nav>

    )
}

export default Breadcrumb