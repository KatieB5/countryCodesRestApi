#RESTful Node.js API

This repository ontains a RESTful Node.js API server using a JSON file which allows the user to look up country names byt heir ISO codes

When the user makes a HTTP GET request to the /country/{code} endpoint, passing in an ISO country code e.g. "GB" as the {code} value, they receive the name of the country such as "United Kingdom".


## Running the tests

'Node.js' must be installed if not already.

First, clone this repository and install dependencies:

'npm install'

To run the test suite:

'npm test'