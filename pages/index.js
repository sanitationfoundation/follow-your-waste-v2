import { useEffect } from 'react'
import useStore from 'hooks'
import { DATA } from 'constants'
import { Layout } from 'common'
import { Header, Welcome, Choose } from 'components'
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-HSK5H29H11"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-HSK5H29H11');
</script>

export default function Home({ env, ...props }) {
	// const { setEnv } = useStore();
	// useEffect(() => {
	// 	setEnv(env)
	// }, []);

	return (
		<Layout>
			<Welcome />
			<Choose />
		</Layout>
	)
}

// Fetches data and saves to global props
// export const getStaticProps = async () => {
// 	const { NODE_ENV } = process.env;
// 	return {
// 		props: {
// 			env: NODE_ENV
// 		},
// 	};
// };
