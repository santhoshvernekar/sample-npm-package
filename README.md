# sample-npm-package
This repo demonstrates on how we can create sample npm package and publishing to npm registry

## Steps to create new npm package

*  Create the project directory ( mkdir sample-directory  )
*  Change into the project directory  (cd sample-directory )
*  Initialise a new NPM package  ( **npm init** ) Empty package json will be created
*  Update package.json and project code (index.js)


## Steps to push npm package to npm registry  
(You should have account created in npm registry if not you can create new account (https://www.npmjs.com/signup)

*  Open command prompt then enter **npm login** command and provide the login credentials

![image](https://user-images.githubusercontent.com/59571096/190870035-f472ffd2-6466-44c0-973e-1ccaf0daf1c3.png)


*  run **npm whoami** to confirm 

*  Then run **npm publish**

![image](https://user-images.githubusercontent.com/59571096/190870082-fc1bc8be-6d9b-410c-9a18-b93bba2c8a32.png)


*  Your new package will be published to your npm registry like mine  :)


![image](https://user-images.githubusercontent.com/59571096/190870168-953bdc15-0bb0-4ac7-a383-abeb7d891b60.png)


Happy Coding!! 

## Testing the working of new package

*  Open NPM RunKit  (https://npm.runkit.com/random-number-generator-santhosh-sample-package)


*  Invoke the method we created using below piece of code and click on run button

var randomNumberGeneratorSanthoshSamplePackage = require("random-number-generator-santhosh-sample-package")

console.log(randomNumberGeneratorSanthoshSamplePackage(10,5))

*  I created a package to generate the random number and print on console along with one custom entry

![image](https://user-images.githubusercontent.com/59571096/190870913-492b497c-7c3f-4eca-98e5-3bc8d4b33d61.png)









