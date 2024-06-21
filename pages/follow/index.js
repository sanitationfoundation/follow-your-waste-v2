import { useTheme } from '@mui/material/styles'
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-HSK5H29H11"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-HSK5H29H11');
</script>

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
