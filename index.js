import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
        message: "What is your URL: ",
        name: "URL",
    } 
])
  .then((answers) => {
    const url = answers.URL
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("answer_qr_image.png"));
  
    fs.writeFile("URL2.txt", url, (err) => {
        if (err) throw err
        console.log("File created successfully");
    }); })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("couldn't be rendered in the current environment");
    } else {
      console.log("Another issue must be happening");
    }
  });