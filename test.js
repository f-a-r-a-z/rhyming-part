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

test('Multiple words returns the last word', t => {
	t.is(rhymingPart('Hi how are you'), 'UW1');
});

test('Multiple words with noisy input', t => {
	t.is(rhymingPart('I .,19u2   love 910i31 the 19801 climate$!@ *#! 9'), 'AY1 M AH0 T');
});

test('Word without primary stress', t => {
	t.is(rhymingPart('orkut'), 'UH2 T');
});

test('Word without primary stress or secondary stress', t => {
	t.is(rhymingPart('whats'), '');
});

test('Words that rhyme have same rhyming part', t => {
	t.true(rhymingPart('sweet') === rhymingPart('treat'));
});

test('Empty string', t => {
	t.is(rhymingPart(''), '');
});

test('Get multiple pronounciations', t => {
	t.deepEqual(rhymingPart('climate', {multiple: true}), ['AY1 M AH0 T', 'AY1 M IH0 T']);
});

test('Get multiple pronounciations of a word without multiple returns single value array', t => {
	t.deepEqual(rhymingPart('clicked', {multiple: true}), ['IH1 K T']);
});

test('Multiple pronounciations with same rhyming part return only unique rhyming parts', t => {
	t.deepEqual(rhymingPart('climatologist', {multiple: true}), ['AA1 L AH0 JH IH0 S T']);
});

test('Multiple pronounciations with non-existent word', t => {
	t.deepEqual(rhymingPart('bahbsajgajhgs', {multiple: true}), []);
});

test('Multiple pronounciations with empty string', t => {
	t.deepEqual(rhymingPart('', {multiple: true}), []);
});

test('Multiple pronounciations with multiple words in input', t => {
	t.deepEqual(rhymingPart('I love the climate', {multiple: true}), ['AY1 M AH0 T', 'AY1 M IH0 T']);
});

test('Multiple pronounciations with multiple noisy words in input', t => {
	t.deepEqual(rhymingPart('I 21876  love123 the##3 892798 !@!1climate!!!! ..', {multiple: true}), ['AY1 M AH0 T', 'AY1 M IH0 T']);
});
