import { useEffect, useMemo, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { alpha, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ClickAwayListener from '@mui/base/ClickAwayListener'
import { DndContext } from '@dnd-kit/core'

import useStore from 'hooks'
import { getText, getItems, getBins } from 'selectors'
import { Chyron } from 'common/Chyron'
import { Modal } from 'common/Modal'
import SortItem from './SortItem'
import SortBin from './SortBin'

const Packery = async () => (await import('packery')).then(m => m.default)

const Sort = ({ ...props }) => {
	const theme = useTheme()
	const {
		locale,
		score,
		sorted,
		thumbsUp,
		addSorted,
		addScore,
		resetSorted,
		resetScore,
		setThumbsUp,
		setDragging,
		setOpening,
		resetAllSort,
	} = useStore()
	const items = getItems()
	const bins = getBins()
	const packeryRef = useRef(null)
	const [packeryInst, setPackeryInst] = useState(null)
	const [packeryCompleted, setPackeryCompleted] = useState(false)
	const [prevScore, setPrevScore] = useState(0)

	const introCaption = getText(locale, 'system', 'sort_intro')

	const loadPackery = async container => {
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

	const handleDragStart = ({ active }) => {
		setDragging(active.id)
	}

	const handleDragOver = ({ active, over }) => {
		if (over) setOpening(over.id)
	}

	const handleDragEnd = ({ active, over }) => {
		setDragging(null)
		if (!over) return
		setOpening(null)
		if (!over.data.current.accepts.includes(active.data.current.type)) return
		// 	return addWrong()
		if (sorted.includes(active.id)) return
		addScore()
		addSorted(active.id)
		setTimeout(() => {
			const sortedElem = packeryRef.current.querySelector(
				`[data-item="${active.id}"]`,
			)
			// packeryInst.remove(sortedElem)
		}, 300)
	}

	useEffect(() => {
		resetAllSort()
	}, [])

	useEffect(() => {
		if (sorted.length === 0 && packeryInst) {
			setTimeout(() =>
				packeryInst.layout()
			, 100)
		}
	}, [sorted, packeryInst])

	useEffect(() => {
		if (packeryRef.current) loadPackery(packeryRef.current)
	}, [packeryRef])

	useEffect(() => {
		if (!packeryInst) return
		setTimeout(() => setPackeryCompleted(true), 100)
		// if (packeryInst.hasOwnProperty('reloadItems')) {
		// 	packeryInst.reloadItems()
		// }
	}, [packeryInst])

	useEffect(() => {
		setPrevScore(score)
		if (score !== prevScore) setThumbsUp(true)
	}, [score, prevScore])

	useEffect(() => {
		setTimeout(() => setThumbsUp(false), 200)
	}, [thumbsUp])

	return (
		<Stack
			sx={{
				p: 3,
				flex: 1,
				width: '100%',
				height: '100%',
				position: 'relative',
				opacity: packeryCompleted ? 1 : 0,
				transition: theme.transitions.create(['opacity']),
			}}
		>
			<DndContext
				onDragStart={handleDragStart}
				onDragOver={handleDragOver}
				onDragEnd={handleDragEnd}
			>
				<Box ref={packeryRef}>
					{items.map((item, i) => (
						<SortItem key={i} data={item} visible={packeryCompleted} />
					))}
				</Box>

				<Stack
					direction='row'
					justifyContent='center'
					spacing={2}
					sx={{
						width: '100%',
						position: 'absolute',
						bottom: 0,
						left: 0,
					}}
				>
					{bins.map((bin, i) => (
						<SortBin key={i} data={bin} index={i} />
					))}
				</Stack>
			</DndContext>
		</Stack>
	)
}

export default Sort
