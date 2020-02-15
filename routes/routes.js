// load up our shiny new route for countries
const countryRoutes = require('./countries');

const appRouter = (app, fs) => {

    // we've added in a default route here that handles empty routes
    // at the base API url
    app.get('/', (req, res) => {
        res.send('welcome, bienvenue, wilkommen');
    });


    // run our country route module here to complete the wire up
    countryRoutes(app, fs);
};

// this line is unchanged
module.exports = appRouter;