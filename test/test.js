var expect = require("chai").expect;
var main = require("../lib/main.js");

describe("Main",function() {
	describe("ADD", function() {
		it("Add two numbers", function() {
			var result1 = main.add(4, 6);

			expect(result1).to.equal(10);
		});
	});

});