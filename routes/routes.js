const countryRoutes = require('./countries');

const appRouter = (app, fs) => {

    app.get('/', (req, res) => {
        res.send('welcome, bienvenue, wilkommen');
    });

    countryRoutes(app, fs);
};

module.exports = appRouter;