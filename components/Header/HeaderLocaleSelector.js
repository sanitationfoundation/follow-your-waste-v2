import { useState } from 'react'
import router from 'next/router'
import { useRouter } from 'next/router'
import Tooltip from '@mui/material/Tooltip'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import useStore from 'hooks'
import { getText, getLocales } from 'selectors'

const HeaderLocaleSelector = () => {
	const router = useRouter()
	const [open, setOpen] = useState(false)
	const [hover, setHover] = useState(false)
	const { locale, setLocale } = useStore()
	const locales = getLocales()
	const tooltipText = getText(locale, 'system', 'lang')

	const handleChange = e => {
		const { value } = e.target
		router.push(router.asPath, router.asPath, {
			locale: value,
		})
	}

	const handleOpen = e => {
		setOpen(true)
		setTimeout(() => setHover(false), 0)
	}

	const handleClose = e => {
		setOpen(false)
		setTimeout(() => setHover(false), 0)
	}

	const handleHover = e => {
		if(!open) setHover(true)
	}

	const handleUnhover = e => {
		setHover(false)
	}

	return (
		<Tooltip
			arrow
			placement='bottom'
			title={tooltipText}
			open={hover && !open}
			onOpen={handleHover}
			onClose={handleUnhover}
		>
			<Select
				value={locale}
				open={open}
				onChange={handleChange}
				onOpen={handleOpen}
				onClose={handleClose}
				sx={{
					py: 0,
					'& .MuiSelect-select': {
						py: 1,
					},
				}}
			>
				{locales.map(key => (
					<MenuItem
						key={key}
						value={key}
						sx={{
							color: 'secondary.main',
						}}
					>
						{getText(key, 'system', 'locale')}
					</MenuItem>
				))}
			</Select>
		</Tooltip>
	)
}

export default HeaderLocaleSelector
