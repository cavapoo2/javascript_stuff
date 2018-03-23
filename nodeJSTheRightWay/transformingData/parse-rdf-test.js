'use strict';
const fs = require('fs')
const expect = require('chai').expect;
const ass = require('chai').assert;
const parseRDF = require('../lib/parse-rdf.js');
const rdf = fs.readFileSync(`${__dirname}/pg132.rdf`);

describe('parseRDF', () => {
	it('should be a function', () => {
		expect(parseRDF).to.be.a('function');
	});

	it('should parse RDF content', () => {
		const book = parseRDF(rdf);
		expect(book).to.be.an('object');
		expect(book).to.have.a.property('id',132);
		expect(book).to.have.a.property('title','The Art of War');
		expect(book).to.have.a.property('authors')
			.that.is.an('array').with.lengthOf(2)
			.and.contains('Sunzi, active 6th century B.C.')
			.and.contains('Giles, Lionel');
		expect(book).to.have.a.property('subjects')
			.that.is.an('array').with.lengthOf(2)
			.and.contains('Military art and science -- Early works to 1800')
			.and.contains('War -- Early works to 1800')


	});
	/*this test first letter does not start with I,O,W,X or Y*/
	it('First Letter none of', () => {
		const book = parseRDF(rdf);

		const findOne = (arr1,arr2) => {
			return arr1.some(v => arr2.indexOf(v.charAt(0)) >= 0
			);
		};
		ass.isOk(book.subjects2.length > 0, 'Length array is zero')
		ass.isOk(!findOne(book.subjects2,['I','O','W','X','Y']),'first letter passes');
	});
	it('First Letter is Capital', () => {
		const book = parseRDF(rdf);
		ass.isOk(book.subjects2.length > 0,'Length array is zero');
		const isUpper = (val) => {
			return val.charAt(0) === val.charAt(0).toUpperCase();
		};
		book.subjects2.forEach(b => {
			if(b.length > 0){
				ass.isOk(isUpper(b.charAt(0)),'Not upper case')
			}else {
				ass.isOk(false,'Length of name is zero')
			}

		});

	});

});



