import React from 'react'
import Image from 'next/image'

const MarkerSchoolIcon = ({ ...props }) => {
	return (
		<Image
			priority
			width={24}
			height={30}
			src='/marker-school.svg'
			alt=''
			{...props}
		/>
	)
}

export default MarkerSchoolIcon
