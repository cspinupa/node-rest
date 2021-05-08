This repo has REST api's created via node

List of APi's exposed:
    - users
    - subscribers
    - books
Start server:  
    - npm run devStart


Start mongodb locally:
    - /usr/local/mongodb/bin/mongod --dbpath /System/Volumes/Data/data/d

openAPI docs:
    - http://localhost:3300/api-docs/
    - Only GET are exposed
        - TODO: defining post, patch open api spec
        - TODO: defininng schema, using ref

Testing:
    - Run the server and use postman/other tools
    - We have route.rest which can be used in VSCode with RESTClient plugin (quick way of testing)

Reference:

https://www.youtube.com/watch?v=fgTGADljAeg
https://dev.to/kabartolo/how-to-document-an-express-api-with-swagger-ui-and-jsdoc-50do
https://hackernoon.com/restful-api-design-with-node-js-26ccf66eab09
https://www.freecodecamp.org/news/how-to-build-explicit-apis-with-openapi/
https://github.com/kabartolo/jsonplaceholder-express-api/tree/docs