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