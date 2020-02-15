const countryRoutes = (app, fs) => {

    const dataPath = './data/countries.json';

    // READ
    app.get('/countries/:code', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            
            const countryCode = req.params["code"];
            const countriesJSONObj = JSON.parse(data);
            const country = countriesJSONObj[countryCode];

            res.send(country);
        });
    });
};

module.exports = countryRoutes;