var expect = require("chai").expect;

var main = require("../lib/main.js");
var tags = require("../lib/tags.js");

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
				hello: "world"
			};
			expect(results).to.deep.equal(expected);
		});
		it("should accept tags without values as a bool", function(){
			var args = ["--searchContents"];
			var results = tags.parse(args);
			expect(results).to.have.a.property("searchContents", true);
		});
	});
});

describe("Main",function() {
	describe("#add()", function() {
		it("Should add two numbers", function() {
			var result1 = main.add(4, 6);

			expect(result1).to.equal(10);
		});
	});

});