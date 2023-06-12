import { useTheme } from '@mui/material/styles'

import { Layout } from 'common'
import useStore from 'hooks'
import { getText } from 'selectors'
import { Intro } from 'common/Intro'
import FollowSelect from 'components/Follow/FollowSelect'

const Follow = ({ ...props }) => {
	const theme = useTheme()
	const { locale } = useStore()
	return (
		<Layout>
			<Intro section='follow' />
			<FollowSelect />
		</Layout>
	)
}

export default Follow
