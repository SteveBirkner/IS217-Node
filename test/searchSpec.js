var expect = require("chai").expect;
var search = require("../lib/search.js");
var fs = require("fs");

describe("Search", function(){
   describe("#scan()", function(){
       before(function() {
           if (!fs.existsSync(".test_files")) {
               fs.mkdirSync(".test_files");
               fs.writeFileSync(".test_files/a", "");
               fs.writeFileSync(".test_files/b", "");
               fs.mkdirSync(".test_files/dir");
               fs.writeFileSync(".test_files/dir/c", "");
               fs.mkdirSync(".test_files/dir2");
               fs.writeFileSync(".test_files/dir2/d", "");
           }
       });

       after(function() {
           fs.unlinkSync(".test_files/dir/c");
           fs.rmdirSync(".test_files/dir");
           fs.unlinkSync(".test_files/dir2/d");
           fs.rmdirSync(".test_files/dir2");
           fs.unlinkSync(".test_files/a");
           fs.unlinkSync(".test_files/b");
           fs.rmdirSync(".test_files");
       });
   });
});