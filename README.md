# Email-Portal-Test

UI Browser tests using CodeceptJS and Puppeteer helper

Setup

    Install node.js 

    Clone this repository

    Install the dependencies: 
        npm install (This will install CodeceptJS with Puppeteer and & all the dependent packages)
    
    Add a credentials.js file and update it with the required credentials with the content:
        module.exports = {
            qa: {
                email: '<email>',
                password: '<password>',
                tenantName: '<tenantName>',
                tenantId: '<tenantId>',
            }
        }


Running Tests

    Run all tests using: npm test
        
    Run a single test using tags
        npx codeceptjs run --steps --<tag>

    Run a single test using the file name
        npx codeceptjs run <fileName>

    Run a specific test using tags with reporting
        npx codeceptjs run --steps --<tag>  --plugins allure
        allure serve output

   
References

    CodeceptJS https://codecept.io
    Puppeteer  https://pptr.dev/
    NodeJS     https://nodejs.org/
    Allure     http://allure.qatools.ru/