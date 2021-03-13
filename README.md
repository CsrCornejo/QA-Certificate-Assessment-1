# QA Wizeline certificate Assessment 1

_Session 1 assessment: Challenge Exercises (TestCafe)_

This repository is an example and practice of the use of TestCafe in order to create e2e testing of a simple web page.


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
### About .env ⚙️

Due to the VALIDUSER and PASSWORD being public, the .env is not ignored by github thus making it easier to test.
You can change the user at the .env file to test for different ones.

:warning: Make sure any change to this file is not pushed to the remote.

:warning: Due to windows usually using process.env.USERNAME as the system user variable (Linux uses USER) the name was changed to VALIDUSER.

## Asessment Points / Tests 🔩

- [x] Login valid user [here](page_model/tests/Login.test.js)
- [x] Login invalid user [here](page_model/tests/Login.test.js)
- [x] Logout [here](page_model/tests/Logout.test.js)
- [x] Navigate to shopping cart [here](page_model/tests/Shopping.test.js)
- [x] Add 1 item to shopping cart [here](page_model/tests/Shopping.test.js)
- [x] Add multiple items to shopping cart [here](page_model/tests/Shopping.test.js)
- [x] Checkout shopping cart with missing information [here](page_model/tests/Shopping.test.js)

## Features 💡

The following TestCafe features and / or  best practices have been used in this repository as learning material:

- [x] [Roles](https://devexpress.github.io/testcafe/documentation/guides/advanced-guides/authentication.html#user-roles) implemented [here](page_model/roles/Roles.js) used [here](page_model/tests/Logout.test.js)
- [x] [Page Model Pattern](https://devexpress.github.io/testcafe/documentation/guides/advanced-guides/authentication.html#user-roles) implemented [here](page_model/pages/LoginPage.js) used [here](page_model/tests/Login.test.js)
- [x] [Class Page Extends](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/extends) implemented [here](page_model/layouts/MainLayout.js) used [here](page_model/pages/ProductsPage.js) in action [here](page_model/tests/Logout.test.js)
- [x] [Environment Variables](https://devexpress.github.io/testcafe/documentation/recipes/configuration/access-environment-variables-in-tests.html) _Using DotEnv module for easy creation_
- [x] [Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) used [here](page_model/tests/Shopping.test.js)
- [x] [Smart Assertions](https://devexpress.github.io/testcafe/documentation/guides/basic-guides/best-practices.html#smart-assertions) used [here](page_model/tests/Shopping.test.js)
- [x] [Setup and Teardown](https://devexpress.github.io/testcafe/documentation/guides/basic-guides/best-practices.html#setup-and-teardown) used [here](page_model/tests/Shopping.test.js)

## Tools 🛠️

* [TestCafe](https://devexpress.github.io/testcafe/) - Testing tool
* [DotEnv](https://www.npmjs.com/package/dotenv) - Environment variables module implemented [here](.env) used [here](page_model/data/Constants.js)


## Author ✒️

* **César Cornejo** - *Front End Developer* - [CsrCornejo](https://github.com/CsrCornejo)

