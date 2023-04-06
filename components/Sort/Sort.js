import { useEffect, useMemo, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { alpha, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { DndContext } from '@dnd-kit/core'

import useStore from 'hooks'
import { getText, getItems, getBins } from 'selectors'
import SortItem from './SortItem'
import SortBin from './SortBin'

const Packery = async () =>
	(await import('packery')).then((m) => m.default)

const Sort = ({ ...props }) => {
	const { locale, sorted, addSorted, setDragging, setOpening } = useStore()
	const items = getItems()
	const bins = getBins()
	const packeryRef = useRef(null)
	const [packeryInst, setPackeryInst] = useState(null)

	// const Packery =
	// const packeryInst = useMemo(() =>
	// 	new Packery(packeryRef.current, {

	// 	})
	// , [packeryRef.current])
	// console.log(Packery)

	const loadPackery = async (container) => {
		const Packery = (await import('packery')).default

		const newPackeryInst = new Packery(container, {
			gutter: 10,
			transitionDuration: 400,
			itemSelector: '.SortItem',
			// initLayout: false,
			// resize: true,
		})

		setPackeryInst(newPackeryInst)
	}

	useEffect(() => {
		if (packeryRef.current) loadPackery(packeryRef.current)
	}, [packeryRef])

	useEffect(() => {
		if (packeryInst && packeryInst.hasOwnProperty('reloadItems'))
			packeryInst.reloadItems()
	}, [packeryInst])

	const handleDragStart = ({ active }) => {
		setDragging(active.id)
	}

	const handleDragOver = ({ active, over }) => {
		if (over) setOpening(over.id)
	}

	const handleDragEnd = ({ active, over }) => {
		setDragging(null)
		if (!over) return
		setOpening(false)
		if (!over.data.current.accepts.includes(active.data.current.type))
			return
		addSorted(active.id)
		setTimeout(() => {
			const sortedElem = packeryRef.current.querySelector(
				`[data-item="${active.id}"]`,
			)
			packeryInst.remove(sortedElem)
		}, 300)
	}

	return (
		<Stack
			sx={{
				p: 3,
				flex: 1,
			}}
		>
			<DndContext
				onDragStart={handleDragStart}
				onDragOver={handleDragOver}
				onDragEnd={handleDragEnd}
			>
				<Box ref={packeryRef}>
					{items.map((item, i) => (
						<SortItem key={i} data={item} />
					))}
				</Box>
				<Stack
					direction="row"
					justifyContent="center"
					spacing={2}
					sx={{
						width: '100%',
						position: 'absolute',
						bottom: 0,
						left: 0,
					}}
				>
					{bins.map((bin, i) => (
						<SortBin key={i} data={bin} />
					))}
				</Stack>
			</DndContext>
		</Stack>
	)
}

export default Sort
