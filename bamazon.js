var mysql = require("mysql");
var inquirer = require("inquirer");
var selectedItem = "";
var connection = mysql.createConnection({
  host: "localhost",

  // The port KEY
  port: 8889,

  // username
  user: "root",

  // password
  password: "root",
  //database name
  database: "bamazonDB"
});
//test connection
connection.connect(function (err) {
  if (err) throw err;
  startUp();
});

function startUp() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.table(res);
  
    inquirer
      .prompt([
        {
          name: "buying",
          type: "input",
          message: "what product id would you like to buy?",
          validate: function (value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        }
        ,
        {
          name: "howMuch",
          type: "input",
          message: "How many would you like to buy? ",
          validate: function (value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        }

      ])
    
     
    .then(function(answer){

      for (var i = 0; i < res.length; i++) {
        if (res[i].id === parseInt(answer.buying)) {
          selectedItem = res[i];
        }
      }
      


      if (parseInt(answer.howMuch) > selectedItem.stock) {
        console.log("We don't have enough of that item available.\nPlease select a different item or change the quantity.");

        startUp();
      }
       else {

        console.log(("ORDER SUCCESSFUL!!! YOUR TOTAL IS $" + (selectedItem.price * parseInt(answer.howMuch)).toFixed(2)));
        var newStock = parseInt(selectedItem.stock) - parseInt(answer.howMuch);

        connection.query("UPDATE products SET ? WHERE ?",
          [{
            stock: newStock
          },
          {
            id: answer.buying
          }],
          function (err) {
            if (err) throw err;
          })
        startUp();
      }
    })
  })
}


