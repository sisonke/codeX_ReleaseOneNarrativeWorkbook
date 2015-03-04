var assert = require("assert");

describe("Find data in file", function(){

    var Products = require("../products");

    it('should return a unique list of product names in the file asynchronously', function(done){

        var products = new Products('./files/products.csv');
        products.productNames(function(err, products){
            assert.deepEqual(["Milk", "Bread", "Coffee"], products);

            done();
        });

    });

    it('should return the total number of items sold for each product', function(done){

        var products = new Products('./files/products.csv');
        products.productsSold(function(err, products){

            assert.equal(29, products['Milk']);
            assert.equal(67, products['Bread']);
            assert.equal(26, products['Coffee']);

            done();
        });

    });
});
