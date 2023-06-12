import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

// import useStore from 'hooks'

const Loader = ({ ...props }) => {
	

	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
				display: 'flex',
				position: 'absolute',
				left: 0,
				top: 0,
				zIndex: 30,
				bgcolor: 'orange.main'
			}}
		>
			<CircularProgress
				sx={{
					m: 'auto'
				}}
			/>
		</Box>
	)
}

Loader.defaultProps = {

}

export default Loader
