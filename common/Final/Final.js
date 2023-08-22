import {
	Fragment,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { alpha, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import LaunchIcon from '@mui/icons-material/Launch'

import useStore from 'hooks'
import { getText, getStreamColor } from 'selectors'
import FollowSelect from 'components/Follow/FollowSelect'

const Final = ({ section, children, onPlayClick, sx, ...props }) => {
	const { locale, resetAllSort } = useStore()

	const resources = [
		'quiz',
		'lessons',
		'activities',
		'apply',
		'workers',
		'about',
	]

	const handleSortClick = () =>
		resetAllSort()

	return (
		<Stack
			alignItems='center'
			sx={{
				width: '100%',
				height: '100%',
				zIndex: 40,
				bgcolor: 'orange.main',
				overflowY: 'scroll',
				WebkitOverflowScrolling: 'touch',
				...sx,
			}}
			{...props}
		>
			<Container
				maxWidth='sm'
				sx={{
					my: 'auto',
					py: 12,
				}}
			>
				<Box m='auto'>
					<Typography variant='h2' component='h2' mb={3}>
						{getText(locale, 'system', `final_${section}_title`)}
					</Typography>
					<Typography variant='h4'>
						{getText(locale, 'system', `final_${section}_body`)}
					</Typography>

					{children}

					<FollowSelect
						small={true}
						text={getText(locale, 'system', `final_${section}_follow`)}
					/>

					<Box>
						<Typography variant='h4' component='div' mt={4} mb={2}>
							{getText(locale, 'system', `final_${section}_sort`)}
						</Typography>
						<Link
							href={`/sort`}
							passRef
							locale={locale}
							onClick={handleSortClick}
						>
							<Button variant='contained' color='green'>
								{getText(locale, 'system', `final_${section}_sort_prompt`)}
							</Button>
						</Link>
					</Box>

					<Box>
						<Typography variant='h4' component='div' mt={4} mb={2}>
							{getText(locale, 'system', 'resources_label')}
						</Typography>

						<Box bgcolor='green.main' borderRadius={3}>
							<List
								sx={{
									py: 0,
								}}
							>
								{resources.map((resource, i) => (
									<Fragment key={i}>
										{i !== 0 ? (
											<Divider component='li' aria-hidden={true} />
										) : null}
										<ListItem disablePadding>
											<ListItemButton
												href={getText(
													locale,
													'system',
													`resource_${resource}_url`,
												)}
												disabled={
													!getText(locale, 'system', `resource_${resource}_url`)
												}
												target='_blank'
												sx={{
													'&.Mui-disabled': {
														opacity: 1,
														'& .MuiListItemIcon-root': {
															opacity: 0,
														},
													},
												}}
											>
												<ListItemText
													primary={getText(
														locale,
														'system',
														`resource_${resource}_title`,
													)}
													secondary={getText(
														locale,
														'system',
														`resource_${resource}_body`,
													)}
													secondaryTypographyProps={{
														fontSize: 12,
														color: 'main.dark',
													}}
												/>
												<ListItemIcon>
													<LaunchIcon
														color='primary'
														sx={{
															ml: 'auto',
														}}
													/>
												</ListItemIcon>
											</ListItemButton>
										</ListItem>
									</Fragment>
								))}
							</List>
						</Box>
					</Box>
				</Box>
			</Container>
		</Stack>
	)
}

export default Final
