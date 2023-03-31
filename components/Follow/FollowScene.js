import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { alpha, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { ReactSVG } from "react-svg";
import lottie from 'lottie-web'

import useStore from 'hooks'
import { getText } from 'selectors'

// const Packery = async () => (await import('lottie-web')).then((m) => m.default)

const FollowScene = ({ scene, current, ...props }) => {
	const sceneElemRef = useRef(null)
	const lottieInstRef = useRef(null)
	// console.log(scene)
	const {
		slug,
		color,
		orientation,
		// TODO convert animated and looped to boolean early on in pipeline
		animated,
		looped,
		environment
	} = scene

	const animateScene = () => {
		if(!sceneElemRef.current) return
		// sceneElemRef.current.innerHtml = ''
		lottieInstRef.current = lottie.loadAnimation({
			container: sceneElemRef.current,
			// renderer: 'canvas',
			renderer: 'svg',
			loop: looped === 'TRUE',
			autoplay: false,
			path: `/scenes/animate/${slug}.json`
		})
	}

	useEffect(() => {
		if(animated === 'TRUE') animateScene()
		return () => lottieInstRef.current
			? lottieInstRef.current.destroy()
			: false
	}, [])

	useEffect(() => {
		if(current && lottieInstRef.current)
			lottieInstRef.current.play()
	}, [current, lottieInstRef])
	
	return (
		<Box
			sx={{
				maxWidth: '100vw',
				flex: '0 0 100vw',
				overflow: 'hidden',
				bgcolor: `${color}.main`,
				position: 'relative',
				'& svg': {
					...(orientation === 'width' ? {
						width: '100% !important',
						height: 'auto !important',
					} : {}),
					...(orientation === 'height' ? {
						width: 'auto !important',
						height: '100% !important',
						ml: 'calc(-87.5vh - -50vw)!important',
						position: 'absolute',
						top: 0,
						left: 0
					} : {})
				}
			}}
			{...props}>
			<Box
				ref={sceneElemRef}
				sx={{
					height: '100vh',
					pointerEvents: 'none',
					display: 'flex',
					'& > *': {
						m: 'auto'
					}
				}}
			>
				{animated === 'FALSE' ?
					<ReactSVG src={`/scenes/static/${slug}.svg`} />
				: null}
			</Box>
		</Box>
	)
}

export default FollowScene