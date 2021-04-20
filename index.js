#!/usr/bin/env node

console.log("Hello, Node.JS!");
// PACKAGES
const { getCode } = require("country-list"); // c'est un plugin pour transformer le pays en code ou le contraire
const axios = require("axios");
let myCountry = process.argv.slice(2); // pour chercher les valeurs qu'on va entrée dans le terminal

console.log("counrty : ", myCountry); // afficher le pays entrée

let code = getCode(myCountry[0]); // trasformer le pays en code
console.log(code);
axios
	.get("https://date.nager.at/api/v2/publicholidays/2021/" + code)
	.then(function (response) {
		console.log(response.data);
	})
	.catch(function (error) {
		console.log(error);
	});

const ora = require("ora");

const spinner = ora("Loading unicorns").start();

setTimeout(() => {
	spinner.color = "yellow";
	spinner.text = "Loading rainbows";
}, 1000);
