'use strict';

const pronounciations = require('cmu-pronouncing-dictionary');

const defaults = {
	multiple: false
};

module.exports = (word, options = {}) => {
	if (typeof word !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof word}`);
	}

	options = {
		...defaults,
		...options
	};

	const lowerCaseWord = word.toLowerCase();
	const basicPronounciationRhymingPart = getRhymingPart(lowerCaseWord);

	if (!options.multiple) {
		return basicPronounciationRhymingPart;
	}

	if (!basicPronounciationRhymingPart) {
		return [];
	}

	const rhymingParts = [basicPronounciationRhymingPart];
	for (let i = 1; i < 10; i++) {
		const rhymingPart = getRhymingPart(`${lowerCaseWord}(${i})`);
		if (!rhymingPart) {
			break;
		}

		rhymingParts.push(rhymingPart);
	}

	const rhymingPartSet = new Set(rhymingParts);
	return [...rhymingPartSet];
};

function getRhymingPart(lowerCaseWord) {
	const pronounciation = pronounciations[lowerCaseWord] || '';
	const stresses = pronounciation.split(' ');
	const searchStress = pronounciation.includes('1') ? '1' : '2';

	for (let i = stresses.length - 1; i >= 0; i--) {
		if (stresses[i].includes(searchStress)) {
			return stresses.slice(i).join(' ');
		}
	}

	return '';
}
