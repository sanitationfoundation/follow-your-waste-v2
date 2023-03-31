import { Layout } from 'common/Layout'
import { SortingGame } from 'components/SortingGame'

const Game = ({ ...props }) => {
	return (
		<Layout>
			<SortingGame />
		</Layout>
	);
}

export default Game