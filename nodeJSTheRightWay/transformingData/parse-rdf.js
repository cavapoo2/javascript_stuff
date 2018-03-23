'use strict'
const cheerio = require('cheerio');
module.exports = rdf => {
	const $ = cheerio.load(rdf);
	const book = {};
	book.id = +$('pgterms\\:ebook').attr('rdf:about').replace('ebooks/','');// + casts it to a number
	book.title = $('dcterms\\:title').text();
	book.authors = $('pgterms\\:agent pgterms\\:name')
		.toArray().map(elem => $(elem).text());	
	book.subjects = $('[rdf\\:resource$="/LCSH"]')
		.parent().find('rdf\\:value')
		.toArray().map(elem => $(elem).text());
	book.subjects2 = $('[rdf\\:resource$="/LCC"]')
		.parent().find('rdf\\:value')
		.toArray().map(elem =>  $(elem).text());
	return book;

};
