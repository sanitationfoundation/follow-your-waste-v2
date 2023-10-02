'use strict'
const path = require('path')
const fs = require('fs')
const axios = require('axios')
const Papa = require('papaparse')
require('dotenv').config({ path: '.env.local' })

// const LANG_KEYS = ['en','es','zh']
const LANG_KEYS = ['en']
const STREAMS = [
	'glass',
	'landfill',
	'metal',
	'organics',
	'paper',
	'plastic',
	'ewaste',
]
const DATA_SCHEMA = {
	follow: STREAMS,
	sort: ['items'],
}
const LANG_SCHEMA = {
	en: [...STREAMS, 'system'],
	es: [...STREAMS, 'system'],
	zh: [...STREAMS, 'system'],
}
const SCHEMA = {
	...DATA_SCHEMA,
	lang: LANG_SCHEMA,
}

const importData = () => {
	const dataDir = path.join(__dirname, '..', 'data')
	const dirNames = getDirNames(dataDir, 'data')
	dirNames.forEach(dirName => {
		const filePaths = getFilePaths(path.join(dataDir, dirName))
		const fileNames = filePaths.map(filePath => path.parse(filePath).name)
		const fileContents = mergePairs(
			fileNames,
			filePaths.map(getFile).map(parseCsv).map(handleData),
		)
		writeJson(fileContents, dirName)
	})
}

const getDirNames = dir =>
	fs
		.readdirSync(dir, { withFileTypes: true })
		.filter(dirent => dirent.isDirectory())
		.map(dirent => dirent.name)

const getFilePaths = dir =>
	fs
		.readdirSync(dir, { withFileTypes: true })
		.filter(
			dirent => dirent.isDirectory() || path.extname(dirent.name) === '.csv',
		)
		.map(dirent => {
			const fileName = path.parse(dirent.name).name
			const filePath = path.join(dir, dirent.name)
			if (dirent.isDirectory()) return getFilePaths(filePath)
			return filePath
		})

const getFile = filePath =>
	fs.readFileSync(filePath, {
		encoding: 'utf8',
		flag: 'r',
	})

const parseCsv = data => Papa.parse(data, { header: true }).data

const handleData = data =>
	data.map(obj => {
		if(obj.hasOwnProperty('animated'))
			obj.animated = obj.animated === 'TRUE'
		if(obj.hasOwnProperty('looped'))
			obj.looped = obj.looped === 'TRUE'
		return obj
	})

const parseSlug = (accum, prev) => {
	return {
		...accum,
		[prev.slug]: prev,
	}
}

const mergePairs = (keys, vals) =>
	keys.reduce((obj, k, i) => ({ ...obj, [k]: vals[i] }), {})

// write JSON to lang.js
const writeJson = (json, name) => {
	const filePath = path.join(__dirname, '..', 'constants', 'data', `${name}.js`)
	const fileContent = `export default ${JSON.stringify(json, null, 2)}`
	fs.writeFile(filePath, fileContent, err => {
		if (err) return console.log(err)
		console.log(`Constants written to ${filePath}`)
	})
}

importData()
