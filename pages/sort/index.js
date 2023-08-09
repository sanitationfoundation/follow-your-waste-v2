import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { Layout } from 'common/Layout'
import { Intro } from 'common/Intro'
import { Sort } from 'components/Sort'
import SortFinal from 'components/Sort/SortFinal'

const Game = ({ ...props }) => {
	const handleChyronClose = () => {
		setIsChyronOpen(false)
	}
	return (
		<Layout>
			<Box
				sx={{
					height: '100%',
					position: 'relative',
				}}
			>
				<Intro section='sort' />
				<Sort />
				<SortFinal />
			</Box>
		</Layout>
	)
}

export default Game
