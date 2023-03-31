import { useEffect, useMemo, useState } from 'react'
import { alpha, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useDroppable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'

import useStore from 'hooks'
import { getText } from 'selectors'


const SortingGameBin = ({ data, ...props }) => {
	const theme = useTheme()
	const { lang, opening } = useStore()
	const [hover, setHover] = useState(false)

	const isOpening = opening === data.slug
	// console.log(opening, data.slug)

	const { setNodeRef } = useDroppable({
		id: data.slug,
    data: {
      accepts: data.streams,
    },
	})

	// useEffect(() => {
	// 	const newLidRotate = data.slug === 'organics'
	// 		? hover ? 'translateX(-13px) translateY(13px) rotate(45deg)' : ''
	// 		: hover ? 'translateX(100px) translateY(-60px) rotate(45deg)' : ''
	// 	setLidRotate(newLidRotate)
	// }, [hover])

	// const lidRotate = useMemo(() =>
	// 	data.slug === 'organics'
	// 		? hover ? 'translateX(-13px) translateY(13px) rotate(45deg)' : 'translate()'
	// 		: hover ? 'translateX(100px) translateY(-60px) rotate(45deg)' : 'translate()'
	// , [data, hover])

	return (
		<Box
			ref={setNodeRef}
			sx={{
				width: 200,
				height: 200,
				position: 'relative'
			}}
			onMouseOver={() => setHover(true)}
			onMouseLeave={() => setHover(false)}>
			<img
				src={`/images/bins/backs/${data.slug}.png`}
				style={{
					width: 200,
					height: 'auto',
					position: 'absolute',
					left: 0,
					top: 42
				}}
			/>
			<img
				src={`/images/bins/fronts/${data.slug}-${lang}.png`}
				style={{
					width: 200,
					height: 'auto',
					position: 'absolute',
					bottom: 0,
					zIndex: 30
				}}
			/>
			<img
				src={`/images/bins/lids/${data.slug}.png`}
				style={{
					width: data.slug === 'organics' ? 210 : 200,
					height: 'auto',
					position: 'absolute',
					left: data.slug === 'organics' ? 2 : 0,
					top: 20,
					zIndex: 40,
					transformOrigin: data.slug === 'organics'
						? 'right bottom'
						: 'center',
					transition: 'transform 300ms ease-in-out',
					transform: isOpening
						? data.slug === 'organics'
							? 'translateX(-13px) translateY(13px) rotate(45deg)'
							: 'translateX(100px) translateY(-60px) rotate(45deg)'
						: 'translate(0)'
				}}
			/>
		</Box>
	)
}

export default SortingGameBin