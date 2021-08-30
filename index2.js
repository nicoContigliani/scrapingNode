const axios = require('axios');
const cheerio = require('cheerio');


const init = async () => {

    try {
        const html = await axios('https://www.losandes.com.ar/')
        // console.log(html)
        const $ = await cheerio.load(html.data);
        const containerClass = $('h1');

        console.log("-----------H1-------------------------------");
        console.log("------------------------------------------");
        console.log(containerClass[0].children[0].children[0].data);

        console.log("------------------------------------------");
        console.log("---------------------Article title---------------------");

        const artTitlte = $('a');
        console.log(artTitlte[0].children[0].data)
        console.log("------------------------------------------");
        console.log("------------------------------------------");
        console.log("------------------------------------------");

        console.log(artTitlte[2].children[0])
        console.log("------------------------------------------");
        console.log("------------------------------------------");


        


    } catch (error) {
        console.log(error)
    }



}



init();