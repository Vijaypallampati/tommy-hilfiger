
This framework has been setup with below configurations
-------------------------------------------------------
"@wdio/allure-reporter": "^7.21.0",
    "@wdio/cli": "^7.21.0",
    "@wdio/cucumber-framework": "^7.21.0",
    "@wdio/local-runner": "^7.21.0",
    "@wdio/spec-reporter": "^7.21.0",
    "chromedriver": "^104.0.0",
    "ts-node": "^10.9.1",
    "typescript": "^4.7.4",
    "wdio-chromedriver-service": "^7.3.2"

To execute scripts please follow below steps
--------------------------------------------
Please install NPM and VSCode editor

Clone from Git repository main branch
https://github.com/Vijaypallampati/tommy-hilfiger.git

open the command prompt and then execute below commands

cd tommy-hilfiger
git clone https://github.com/Vijaypallampati/tommy-hilfiger.git
git branch execute-tommytest
git checkout execute-tommytest

To open the script is VSCode type below command in command prompt

cd tommy-hilfiger
code .

Below sceanrios are built
-------------------------------
1) Login into Tommy with valid credentials
2) Login failed with invalid credentials
3) Validate error message on username and password leaving as empty and click on submit
4) Validate error message on entering username and leave password empty and click on submit
5) Validate error message on entering password and leave username empty and click on submit
6) Validate password lenght error while login
7) Validate the error messsage with invalid username/password
8) Login successfully and check the "Hoi" and making sure successfully logged in
9) Add new factuuraddress of the customer by filling firstname, lastname, address1, address2, city, zipcode, phone1, country and save the address

Files available under
---------------------------

Pages paths are  - features/pageobjects/address.page.ts
                   features/pageobjects/login.page.ts
                   features/pageobjects/page.ts
                   features/pageobjects/secure.page.ts
-------------------------------------------------------------
Step definitions are - features/step-definitions/steps.ts
-------------------------------------------------------------
feature files are - features/addnewaddress.feature
                    features/login_error.feature
                    features/login_lenghterror.feature
                    features/login.feature
----------------------------------------------------------------

To execute scripts use below command

npx wdio run wdio.conf.ts

------------------------------------------------------------------
Reports are available under -> allure-results