import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import useStore from 'hooks'
import { getLangs } from 'selectors'

const HeaderLangSelector = () => {
	const { lang, setLang } = useStore()
	const langs = getLangs()
	const handleChange = e => {
		setLang(e.target.value)
	}
	return (
		<Select
			value={lang}
			onChange={handleChange}
			sx={{
				py: 0,
				'& .MuiSelect-select': {
					py: 1
				}
			}}
		>
			{langs.map(key =>
				<MenuItem
					key={key}
					value={key}
					sx={{
						color: 'secondary.main'
					}}>
					{key}
				</MenuItem>
			)}
		</Select>
	)
}

export default HeaderLangSelector