import { useEffect } from 'react'
import useStore from 'hooks'
import { DATA } from 'constants'
import { Layout } from 'common'
import { Header, Welcome, Choose } from 'components'

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
