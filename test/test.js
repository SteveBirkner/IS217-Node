var expect = require("chai").expect;

var main = require("../lib/main.js");
var tags = require("../lib/tags.js");

/*
describe("Tags", function() {
	describe("#parse()", function() {
		it("SHould parse long formed tags", function() {
			var args = ["--depth=4", "--hello=world"];
            var results = tags.parse(args);

            expect(results).to.have.a.property("depth", 4);
            expect(results).to.have.a.property("hello", "world");
		});
		it("Should fallback to defaults", function() {
			var args = ["--depths=4", "--hello=world"];
			var defaults = {depth: 2, foo: "bar"};
			var results = tags.parse(args,defaults);

			var expected = {
				depths: 4,
				foo: "bar",
				hello: "world"
			};
			expect(results).to.deep.equal(expected);
		});
		it("should accept tags without values as a bool", function(){
			var args = ["--searchContents"];
			var results = tags.parse(args);
			expect(results).to.have.a.property("searchContents", true);
		});
		it("should accept short formed tags", function(){
			var args = ["-sd=4", "-h"];
			var replacements = {
				s: "searchContents",
				d: "depth",
				h: "hello"
			};
			var results = tags.parse(args, {}, replacements);

			var expected = {
				searchContents: true,
				depth: 4,
				hello: true
			};
			expect(results).to.deep.equal(expected);
		});
	});
}); */

describe("Main",function() {
	describe("#add()", function() {
		it("Should add two numbers", function() {
			var result1 = main.add(4, 6);
			var result2 = main.add(4, 6);

			expect(result1).to.equal(10);
		});
	});
	describe("multiply()", function() {
		it("Should multiply 2 numbers", function() {
			var result1 = main.multiply(4,5);
			var result2 = main.multiply(3,4);

			expect(result1).to.equal(20);
		});
	});
	describe("stringy()", function() {
		it("Should return something", function() {
			var str = main.stringy();

			expect(str).not.to.be.null;
		});
		it("Should return a string",function() {
			var str = main.stringy();

			expect(str).to.be.a.String;
		});
	});
	

});