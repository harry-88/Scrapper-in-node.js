const request = require('request-promise');
const cheerio = require('cheerio');
const forexURL = 'https://www.forex.pk/currency-usd-to-pkr-to-us-dollar.php';
(async () => {
    const response = await request({
        uri: forexURL,
        headers: {
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9'

        },
        gzip: true
    })

    let $  = cheerio.load(response); 
    let title = $('span[class="bluetext"] > span[class="heading_sub"]').text().trim();


    console.log("1 dollar in PKR is  ",parseFloat(title))
})()