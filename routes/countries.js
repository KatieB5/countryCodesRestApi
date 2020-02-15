const countryRoutes = (app, fs) => {

    // variables
    const dataPath = './data/countries.json';

    // READ
    app.get('/countries/:code', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                // console.log(err);
                throw err;
            }
            
            //create a variable to hold the ISO code thats being passed in as the route parameter
            const countryCode = req.params["code"];
            //create a variable to hold the JSON object so that we can iterate through and find the country
            const countriesJSONObj = JSON.parse(data);
            //create a variable to hold the value corresponding the the key which matches the ISO code
            const country = countriesJSONObj[countryCode];

            //respond by sending back the country that matches the ISO code
            res.send(country);
        });
    });
};

module.exports = countryRoutes;