
var fs = require ('fs');

  var  findFiles = function (folder){
  	var files = fs.readdirSync(folder);
  		var productList = [];

  	files.forEach(function (fileName){
		
		var fileContent = fs.readFileSync(folder + "/" + fileName, 'utf8');
		
		
		var products = fileContent.split("\n");

		products.forEach(function(product){
			console.log(product);
			productList.push(product);
		});
		//forEach...??
	});

	return productList;
}

exports.linesInFiles = function (folderName){

	var productList = findFiles(folderName);
	 return productList;
};

exports.linesInFilesAsync = function(folderName, callback){
	var productList = findFiles (folderName);
	callback(null, productList);
};
/*
	var linesInFiles = fs.readdirync(folderName)
	var productList = [];

	linesInFiles.forEach(function(fileName){
		
		var fileContent = fs.readFileSync(folderName + "/" + fileName, 'utf8');
		
		var products = fileContent.split("\n");

		for(var product in products){
			var productName = products[product];
			productList.push(productName);
		}
		//forEach...??
	});
}




/*
this.products = function(filepath) {
var linesInFiles = fs.readFileSync(filepath, 'products.csv');

var rows = linesInFile.split('/n');
       console.log("rows");
var productList=[]
  
}
*/



