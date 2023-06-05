import React from 'react'

interface Props {
    svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

function HRMSicon(props: Props) {
    const { svg: SVG } = props
    return (
        <SVG />
    )
}

export default HRMSicon
