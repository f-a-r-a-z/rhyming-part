'use strict';

const pronounciations = require('cmu-pronouncing-dictionary');

module.exports = word => {
	if (typeof word !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof word}`);
	}

	const lowerCaseWord = word.toLowerCase();
	const pronounciation = pronounciations[lowerCaseWord] || '';
	const stresses = pronounciation.split(' ');
	const searchStress = pronounciation.includes('1') ? '1' : '2';

	for (let i = stresses.length - 1; i >= 0; i--) {
		if (stresses[i].includes(searchStress)) {
			return stresses.slice(i).join(' ');
		}
	}

	return '';
};
