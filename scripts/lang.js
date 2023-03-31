'use strict';
const axios = require('axios');
const fs = require('fs');
const Papa = require('papaparse');
require('dotenv').config({ path: '.env.local' });

// const LANG_KEYS = ['en','es','zh'];
const LANG_KEYS = ['en'];
return

const getLang = () => {
	const langData = LANG_KEYS
		.map(k => fs.readFileSync(`data/${k}.json`))
		.map(j => JSON.parse(j));


	console.log(langData)
	


	const langJson = mergePairs(LANG_KEYS, langData);
	// console.log(langJson)
	writeLang(langJson)
}



const mergePairs = (keys, vals) =>
	keys.reduce((obj, k, i) => ({ ...obj, [k]: vals[i] }), {})

// const ids = {
// 	en: {
// 		system: 1040749976,
// 		items: 1355702959,
// 		landfill: 715538294,
// 		organics: 1390866852,
// 		paper: 1705254503,
// 		metal: 1479655820,
// 		glass: 1063742981,
// 		plastic: 558332811,
// 	},
// 	es: {

// 	},
// 	zh: {
		
// 	}
// }

// const { EN_GS_ID, ES_GS_ID, ZH_GS_ID } = process.env;
// // const LANG_GS_IDS = [EN_GS_ID, ES_GS_ID, ZH_GS_ID];
// const LANG_GS_IDS = [EN_GS_ID];

// // set empty object and set lang doc url
// const langJson = {};

// // gets CSV from all sheets, parses, combines, writes
// const createLangConsts = () => {
// 	const config = {
// 		headers: {
// 			'Accept-Encoding': 'application/json',
// 		}
// 	};
// 	const reqs = LANG_GS_IDS.map(docId =>
// 		axios.get(`https://docs.google.com/spreadsheets/d/e/${docId}/pub?output=csv`, config))
	
// 	axios.all(reqs)
// 		.then(axios.spread((...responses) => responses.map(parseCsv)))
// 		.then(data => data.flat())
// 		.then(parseLang)
// 		.then(writeLang);
// }
// // parse CSV to JSON
// const parseCsv = res => (Papa.parse(res.data, { header: true }).data)
// // convert to key / value pair objects
// const parseLang = (data) => data.map(row => langJson[row.slug] = row.text);


// write JSON to lang.js
const writeLang = (langJson) => {
	const filePath = './constants/lang.js';
	const fileContent = `const LANG = ${JSON.stringify(langJson, null, 2)}; \n\nexport default LANG;`;
	fs.writeFile(filePath, fileContent, err => {
		if (err) return console.log(err);
		console.log(`lang constants written to ${filePath}`);
	})
};

// createLangConsts();

getLang();