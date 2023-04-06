import router from 'next/router'
import { useRouter } from 'next/router'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import useStore from 'hooks'
import { getText, getLocales } from 'selectors'

const HeaderLocaleSelector = () => {
	const router = useRouter()
	const { locale, setLocale } = useStore()
	const locales = getLocales()
	const handleChange = (e) => {
		const { value } = e.target
		router.push(router.asPath, router.asPath, {
			locale: value,
		})
	}

	return (
		<Select
			value={locale}
			onChange={handleChange}
			sx={{
				py: 0,
				'& .MuiSelect-select': {
					py: 1,
				},
			}}
		>
			{locales.map((key) => (
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
	)
}

export default HeaderLocaleSelector
