var mysql = require("mysql");
var inquirer = require("inquirer");

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

connection.connect(function(err) {
  if (err) throw err;
  startUp();
});

function startUp() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    inquirer
     .prompt([
       {
         name: "choice",
         type: "rawlist",
         choices: function() {
           var choiceArray = [];
           for (var i = 0; i < results.length; i++) {
             choiceArray.push(results[i].item_name);
           }
           return choiceArray;
         },
         message: " What is the ID # of the product you would like to buy."
       },
       {
         name: "bid",
         type: "input",
         message: "How many units would you like to buy?"
       }
     ])
     // .then(function(answer) {
     //   // get the information of the chosen item
     //   var chosenItem;
     //   for (var i = 0; i < results.length; i++) {
     //     if (results[i].item_name === answer.choice) {
     //       chosenItem = results[i];
     //     }
     //   }
     //
     //   // determine if bid was high enough
     //   if (chosenItem.stock < parseInt(answer.bid)) {
     //     // bid was high enough, so update db, let the user know, and start over
     //     connection.query(
     //       "UPDATE products SET ? WHERE ?",
     //       [
     //         {
     //           stock: answer.bid
     //         },
     //         {
     //           id: chosenItem.id
     //         }
     //       ],
     //       function(error) {
     //         if (error) throw err;
     //         console.log("Bid placed successfully!");
     //         start();
     //       }
     //     );
     //   }
     //   else {
     //     // bid wasn't high enough, so apologize and start over
     //     console.log("Your bid was too low. Try again...");
     //     start();
     //   }
     // });
 });
  }
