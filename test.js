import test from 'ava';
import rhymingPart from '.';

test('Basic test', t => {
	t.is(rhymingPart('hello'), 'OW1');
	t.is(rhymingPart('below'), 'OW1');
});

test('Capitalisation does not affect result', t => {
	t.is(rhymingPart('HeLLo'), 'OW1');
	t.is(rhymingPart('beLoW'), 'OW1');
});

test('Word not in dictionary returns empty result', t => {
	t.is(rhymingPart('asnjlankjsn'), '');
});

test('Incorrect input type throws', t => {
	const error = t.throws(() => {
		rhymingPart(1);
	}, TypeError);

	t.is(error.message, 'Expected a string, got number');
});

test('More complex word', t => {
	t.is(rhymingPart('minisupercomputers'), 'UW1 P ER0 K AH2 M P Y UW2 T ER0 Z');
});

test('Multiple words returns nothing', t => {
	t.is(rhymingPart('Hi how are you'), '');
});
