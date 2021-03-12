# QA Wizeline certificate Assessment 1

_Session 1 assessment: Challenge Exercises (TestCafe)_


### Installation 🔧

We need to install the dependencies using node.js and npm

```
npm install
```

## Run assessment ⚙️

Once installed, we can use the following custom command to execute Test Cafe using chrome:
```
npm run test-chrome
```
## About .env ⚙️

Due to the VALIDUSER and PASSWORD being public, the .env is not ignored by github thus making it easier to test.
You can change the user at the .env file to test for different ones.

:warning: Make sure any change to this file is not pushed to the remote.
:warning: Due to windows usually using process.env.USERNAME as the system user variable (Linux uses USER) the name was changed to VALIDUSER.

### Asessment Points 🔩

- [x] _*TODO*_

### Features 🔩

The following TestCafe features and / or  best practices have been used in this repository as learning material:

- [x] [Roles](https://devexpress.github.io/testcafe/documentation/guides/advanced-guides/authentication.html#user-roles) implemented [here](page_model/roles/Roles.js) used [here](page_model/tests/Logout.test.js)
- [x] [Page Model Pattern](https://devexpress.github.io/testcafe/documentation/guides/advanced-guides/authentication.html#user-roles) implemented [here](page_model/pages/LoginPage.js) used [here](page_model/tests/Login.test.js)
- [x] [Class Page Extends](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/extends) implemented [here](page_model/layouts/MainLayout.js) used [here](page_model/pages/ProductsPage.js) in action [here](page_model/tests/Logout.test.js)
- [x] [Environment Variables](https://devexpress.github.io/testcafe/documentation/recipes/configuration/access-environment-variables-in-tests.html) _Using DotEnv module for easy creation_


## Tools 🛠️

* [TestCafe](https://devexpress.github.io/testcafe/) - Testing tool
* [DotEnv](https://www.npmjs.com/package/dotenv) - Environment variables module implemented [here](.env) used [here](page_model/data/Constants.js)


## Author ✒️

* **César Cornejo** - *Front End Developer* - [CsrCornejo](https://github.com/CsrCornejo)

