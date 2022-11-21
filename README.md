![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

<br>

# LAB | Promises 2

<br>

## Introduction

The promise is a placeholder holding the result of an asynchronous operation. If the operation completes successfully, then the promise fulfills with the operation value, but if the operation fails: the promise rejects with the reason of the failure.

Promises can also create chains, which are useful in handling multiple dependent async operations.

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Testing - Introduction

This exercise will be completed through a series of tests. You should be familiar with testing from previous lessons and exercises, but just in case, here is a short recap of Intro to testing. :wink:

### What is testing?

_Software testing is a process of executing an application to validate and verify that it meets the business and technical requirements and works as expected._

Testing is a **process**, not a single activity. As early as we start developing and conducting tests, the better are chances that we can prevent deficiencies in the code or product design.

In this exercise, we have created all the tests you need to create the solution, and you have to execute them all and create the code to accomplish all the requirements.

Tests prove that your code actually works in every situation in which it’s designed to work. Even when you are improving the design or creating new features, you can change your current code without breaking what already works.

### Testing with Mocha

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_99e6ffece1023c0fe141512493fc6ad2.png)

[Mocha](https://mochajs.org/) is a feature-rich JavaScript testing framework running on Node.js and in the browser, making asynchronous testing simple and fun.

<!-- Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. -->

We have already included Mocha in the project you just forked, so let's see how to use it to implement our code.

### Usage

To start using mocha, you have to install it as a dependency for this project. Remember that we should always use the Node Package Manager (npm) to manage all the packages in our projects.

Run the following command:

```
$ npm install mocha
```

After this step, we will see `dependencies` in the _package.json_ and mocha will be there.

_Note_: The current version of mocha is 6.2.2.

## Project Structure

Before we start coding, let's explain the provided project structure:

```
.
├── lib
│   └── index.js
├── test
│   └── index.spec.js
└─ package.json
```

We are going to be working with the **`lib/index.js`** file. Here we will write the implementation of different promises methods.

The `test` folder contains all the tests we will execute with Mocha.

### Running the tests

Running our tests with Mocha is super easy; you just have to run `npm test`.


```
$ npm run test                                                                  ✔  10115  00:43:15

> lab-promises@1.0.0 test
> mocha



  Promises
    number3
      1) must return a Promise
      2) must return a the number 3 as promise
    error
      1) must return a Promise
      2) returns the message passed as failed promise
    sum
      1) must return a Promise
      2) must returns the sum of numbers
      3) must return a failed promise if the array is empty
      4) must return a failed promise if the array is undefined
    sum
      1) must return a Promise
      2)  must returns the sum of numbers
      3)  must return a failed promise if the array is empty
      4)  must return a failed promise if the array is undefined
    odd
      1)  must return a Promise
      2)  must returns odd numbers
      3)  must return a failed promise if the array is empty
      4)  must return a failed promise if the array is undefined
    findUserById
      1)  must return a Promise
      2)  must return the user by id
      3)  must return undefined if the user not exists
    findOrganizationById
      1)  must return a Promise
      2)  must return the user by id
      3)  must return undefined if the user not exists
    findUserByIdWithOrganization
      1)  must return a Promise
      2)  must return the user by id
      3)  must return undefined if the user not exists


  0 passing (18ms)
  25 failing
```

Don't worry that none of the tests are passing... you will make them ALL PASS!! :smile:

## Instructions

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

### Iteration 1: number3()

Must return the number 3 as a promise.

### Iteration 2: error(message)

Must return the message passed as failed promise. 

### Iteration 3: sum(numbers)

- Must return the sum of numbers as a promise. 
- Must fail the promise if the array is empty or undefined `new Error('Array must not be empty or undefined')`.

### Iteration 4: odd(numbers)

- Must return only odd numbers. 
- Must fail the promise if the array is empty or undefined `new Error('Array must not be empty or undefined')`.

### Iteration 5: findUserById(id)

Must return the user with the id `id` if exists or undefined if not found

### Iteration 6: findOrganizationById(id)

Must return the user with the id `id` if exists or undefined if not found

### Iteration 7: findUserByIdWithOrganization(id)

Combining the promises returned by `findUserById` & `findOrganizationById` return the user merged with his organization:

Example: `findUserByIdWithOrganization(3)`
```js
{
  id: 3,
  name: 'Margaretta Armstrong MD',
  email: 'Margaretta_Armstrong73@yahoo.com',
  organization: {
    id: 1,
    name: 'Raynor - Daugherty',
    address: '189 Little Canyon'
  }
}
```

<br>

Happy Coding! :heart:
