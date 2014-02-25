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
		it("should parse long formed tags and convert numbers", function(){
		    var args = ["--depth=4", "--hello=world"];
		    var results = tags.parse(args);
		 
		    expect(results).to.have.a.property("depth", 4);
		    expect(results).to.have.a.property("hello", "world");
		});
		it("should fallback to defaults", function(){
		    var args = ["--depth=4", "--hello=world"];
		    var defaults = { depth: 2, foo: "bar" };
		    var results = tags.parse(args, defaults);
		 
		    var expected = {
		        depth: 4,
		        foo: "bar",
		        hello: "world"
		    };
		 
		    expect(results).to.deep.equal(expected);
		});
	});
}); 

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
	describe("arry()",function() {
		it("should include the word 'steve'",function() { //meant to fail
			var arr = main.arry();

			expect(arr).to.contain('steve');
		});
		it("should include the number 2",function() {
			var arr = main.arry();

			expect(arr).to.include(2);
		});
	});
	describe("divide()",function() {
		it("should divide two numbers", function() {
			var div = main.divide(20,5);

			expect(div).to.equal(3); //meant to fail
		});
	});
	describe("subtract()",function() {
		it("should subtract two numbers",function() {
			var sub = main.sub(5,4);

			expect(sub).to.equal(2); //meant to fail
		});
	});


});