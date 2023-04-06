import { useEffect, useState } from 'react'
import { alpha, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'

import useStore from 'hooks'
import { getText, getItemSize } from 'selectors'

const SortItem = ({ data, ...props }) => {
	const theme = useTheme()
	const { locale, dragging, sorted } = useStore()

	const [lastX, setLastX] = useState(0)

	const isDragging = dragging === data.slug
	const isSorted = sorted.includes(data.slug)

	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: data.slug,
		data: {
			type: data.stream,
		},
	})

	useEffect(() => {
		if (transform !== null && typeof transform === 'object') {
			setLastX(transform.x)
		}
	}, [transform])

	return (
		<Tooltip
			arrow
			title={
				<Stack spacing={0.5}>
					<Typography variant="h4">
						{getText(locale, 'items', data.slug, 'label')}
					</Typography>
					<Typography>
						{getText(locale, 'items', data.slug, 'tooltip')}
					</Typography>
				</Stack>
			}
		>
			<Box
				className="SortItem"
				sx={{
					height: 'auto',
					cursor: 'pointer',
				}}
				style={{
					width: `${getItemSize(data.slug) / 2}%`,
					minWidth: `${getItemSize(data.slug) * 10}px`,
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
					...(isSorted ? { top: 999 } : {}),
				}}
				ref={setNodeRef}
				{...listeners}
				{...attributes}
				aria-describedby=""
				data-item={data.slug}
			>
				<img
					src={`/images/items/${data.slug}.png`}
					style={{
						width: '100%',
						height: 'auto',
					}}
					alt=""
				/>
			</Box>
		</Tooltip>
	)
}

export default SortItem
