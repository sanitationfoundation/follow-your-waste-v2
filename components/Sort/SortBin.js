import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { alpha, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useDroppable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'

import useStore from 'hooks'
import { getText, getItem } from 'selectors'

const SortBin = ({ data, ...props }) => {
	const theme = useTheme()
	const { locale, opening, sorted, thumbsUp } = useStore()
	const [hover, setHover] = useState(false)
	const [isOpening, setIsOpening] = useState(false)
	const [showGlove, setShowGlove] = useState(false)

	const { setNodeRef } = useDroppable({
		id: data.slug,
		data: {
			accepts: data.streams,
		},
	})

	useEffect(() => setIsOpening(data.slug === opening), [data.slug, opening])

	useEffect(() => {
		const lastSortedItem = sorted.slice(-1)[0]
		const lastSortedStream = getItem(lastSortedItem)?.stream
		const isCorrectBin = data.streams.includes(lastSortedStream)
		setTimeout(() => setShowGlove(isCorrectBin && thumbsUp), thumbsUp ? 0 : 750)
	}, [data, sorted, thumbsUp])

	return (
		<Box
			ref={setNodeRef}
			sx={{
				width: {
					xs: 100,
					md: 200,
				},
				height: 200,
				position: 'relative',
				'& img.BinGlove': {
					width: 100,
					height: 'auto',
					opacity: showGlove ? 1 : 0,
					transform: `translateY(${showGlove ? '-100%' : 0}) scale(${
						showGlove ? 1.5 : 1
					})`,
					transition: theme.transitions.create(['transform', 'opacity'], {
						duration: 500,
					}),
				},
				'& img.BinBack': {
					width: {
						xs: 100,
						md: 200,
					},
					height: 'auto',
					position: 'absolute',
					left: 0,
					top: {
						xs: data.slug === 'ewaste' ? 133 : 122,
						md: data.slug === 'ewaste' ? 66 : 42,
					},
				},
				'& img.BinFront': {
					width: {
						xs: 100,
						md: 200,
					},
					height: 'auto',
					position: 'absolute',
					bottom: 0,
					zIndex: 30,
				},
				'& img.BinLid': {
					width: {
						xs: data.slug === 'organics' ? 105 : 100,
						md: data.slug === 'organics' ? 210 : 200,
					},
					height: 'auto',
					position: 'absolute',
					left: data.slug === 'organics' ? 2 : 0,
					top: {
						xs: 110,
						md: 20,
					},
					zIndex: 40,
					transformOrigin: data.slug === 'organics' ? 'right bottom' : 'center',
					transition: 'transform 300ms ease-in-out',
					transform: isOpening
						? data.slug === 'organics'
							? 'translateX(-13px) translateY(13px) rotate(45deg)'
							: 'translateX(100px) translateY(-60px) rotate(45deg)'
						: 'translate(0)',
				},
			}}
			onMouseOver={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<Box
				sx={{
					width: 'auto',
					position: 'absolute',
					left: '50%',
					top: '50%',
					transform: `translate(-50%, -100%)`,
					pointerEvents: 'none',
				}}
			>
				<Image
					width={500}
					height={514}
					src='/images/glove.png'
					alt=''
					className='BinGlove'
				/>
			</Box>
			<img
				src={`/images/bins/backs/${data.slug}.png`}
				alt=''
				className='BinBack'
			/>
			<img
				src={`/images/bins/fronts/${data.slug}-${locale}.png`}
				alt=''
				className='BinFront'
			/>
			{data.slug !== 'ewaste' ? (
				<img
					alt=''
					src={`/images/bins/lids/${data.slug}.png`}
					className='BinLid'
				/>
			) : null}
		</Box>
	)
}

export default SortBin
