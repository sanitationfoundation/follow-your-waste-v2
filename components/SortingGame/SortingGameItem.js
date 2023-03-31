import { useEffect, useState } from 'react'
import { alpha, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'

import useStore from 'hooks'
import { getText } from 'selectors'

const scale = {
	'aluminum-foil': 6,
	'broken-glass': 10,
	'cardboard': 15,
	'chip-bag': 8,
	'detergent-bottle': 9,
	'food-can': 5,
	'glass-bottles': 9,
	'glass-jar': 7,
	'milk-carton': 8,
	'newspaper': 13,
	'plastic-bag': 12,
	'plastic-bottle': 6,
	'soda-can': 5,
	'toothpaste': 10,
	'soiled-paper': 10,
	'banana': 13,
}

const SortingGameItem = ({ data, ...props }) => {
	const theme = useTheme()
	const { lang, dragging, sorted } = useStore()

	const [lastX, setLastX] = useState(0)

	const isDragging = dragging === data.slug
	const isSorted = sorted.includes(data.slug)

	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: data.slug,
		data: {
			type: data.stream
		}
	})

	useEffect(() => {
		if(transform !== null && typeof transform === 'object') {
			setLastX(transform.x)
		}
	}, [transform])

	return (
		<Tooltip
			arrow
			title={
				<Stack spacing={0.5}>
					<Typography variant='h4'>
						{getText(lang, 'items', data.slug, 'label')}
					</Typography>
					<Typography>
						{getText(lang, 'items', data.slug, 'tooltip')}
					</Typography>
				</Stack>
			}>
			<Box
				className='SortingGameItem'
				sx={{
					height: 'auto',
					cursor: 'pointer',
				}}
				style={{
					width: `${scale[data.slug] / 2}%`,
					minWidth: `${scale[data.slug] * 10}px`,
					// transform: CSS.Translate.toString(transform)
					transition: isSorted
						? 'all 800ms ease'
						: !isDragging
							? 'all 400ms ease'
							: '',
					transform: isSorted
						? `translate3d(${lastX}px, 100%, 0)`
						: transform
							? `translate3d(${transform.x}px, ${transform.y}px, 0)`
							: 'translate3d(0, 0, 0)',
					zIndex: isDragging ? 20 : 10,
					...(isSorted ? { top: 999 } : {})
				}}
				ref={setNodeRef}
				{...listeners}
				{...attributes}
				aria-describedby=''
				data-item={data.slug}
				>
				<img
					src={`/images/items/${data.slug}.png`}
					style={{
						width: '100%',
						height: 'auto',
					}}
					alt=''
				/>
			</Box>
		</Tooltip>
	)
}

export default SortingGameItem