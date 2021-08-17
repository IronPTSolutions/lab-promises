// Require the file which will be tested
const functions = require('../lib/index');

// Load the Assertion Library
const assert = require('assert');

describe('Promises', () => {
  describe('number3', () => {
    it('must return a Promise', () => {
      assert.equal(functions.number3() instanceof Promise, true);
    });

    it('must return a the number 3 as promise', () => {
      return functions.number3()
        .then(number => assert.equal(number, 3))
        .catch(error => assert.fail(error))
    });
  });

  describe('error', () => {
    it('must return a Promise', () => {
      assert.equal(functions.error() instanceof Promise, true);
    });

    it('returns the message passed as failed promise', () => {
      const message = 'Hello Promises';
      return functions.error(message)
        .then(() => assert.fail('This promise must fail always!!'))
        .catch(error => assert.equal(error, message))
    });
  });

  describe('sum', () => {
    it('must return a Promise', () => {
      assert.equal(functions.sum([]) instanceof Promise, true);
    });

    it('must returns the sum of numbers', () => {
      return functions.sum([1, 2, 3])
        .then(number => assert.equal(number, 6))
        .catch(error => assert.fail(error))
    });

    it('must return a failed promise if the array is empty', () => {
      return functions.sum([])
        .then(() => assert.fail('This promise must fail if the array is empty!!'))
        .catch(error => assert.equal(error.message, 'Array must not be empty or undefined'))
    });

    it('must return a failed promise if the array is undefined', () => {
      return functions.sum(undefined)
        .then(() => assert.fail('This promise must fail if the array is empty!!'))
        .catch(error => assert.equal(error.message, 'Array must not be empty or undefined'))
    });
  });

  describe('sum', () => {
    it('must return a Promise', () => {
      assert.equal(functions.sum([]) instanceof Promise, true);
    });

    it('must returns the sum of numbers', () => {
      return functions.sum([1, 2, 3])
        .then(number => assert.equal(number, 6))
        .catch(error => assert.fail(error))
    });

    it('must return a failed promise if the array is empty', () => {
      return functions.sum([])
        .then(() => assert.fail('This promise must fail if the array is empty!!'))
        .catch(error => assert.equal(error.message, 'Array must not be empty or undefined'))
    });

    it('must return a failed promise if the array is undefined', () => {
      return functions.sum(undefined)
        .then(() => assert.fail('This promise must fail if the array is empty!!'))
        .catch(error => assert.equal(error.message, 'Array must not be empty or undefined'))
    });
  });

  describe('odd', () => {
    it('must return a Promise', () => {
      assert.equal(functions.odd([]) instanceof Promise, true);
    });

    it('must returns odd numbers', () => {
      return functions.odd([1, 2, 3])
        .then(odd => assert.deepEqual(odd, [1, 3]))
        .catch(error => assert.fail(error))
    });

    it('must return a failed promise if the array is empty', () => {
      return functions.odd([])
        .then(() => assert.fail('This promise must fail if the array is empty!!'))
        .catch(error => assert.equal(error.message, 'Array must not be empty or undefined'))
    });

    it('must return a failed promise if the array is undefined', () => {
      return functions.odd(undefined)
        .then(() => assert.fail('This promise must fail if the array is empty!!'))
        .catch(error => assert.equal(error.message, 'Array must not be empty or undefined'))
    });
  });

  describe('findUserById', () => {
    it('must return a Promise', () => {
      assert.equal(functions.findUserById(1) instanceof Promise, true);
    });

    it('must return the user by id', () => {
      return functions.findUserById(2)
        .then(user => assert.deepEqual(user, {
          id: 2,
          name: 'Terrence Schowalter',
          email: 'terrence.schowalter29@example.org.com',
          organizationId: 2
        }))
        .catch(error => assert.fail(error))
    });

    it('must return undefined if the user not exists', () => {
      return functions.findUserById(10)
        .then(user => assert.equal(user, undefined))
        .catch(error => assert.fail(error))
    });
  });

  describe('findOrganizationById', () => {
    it('must return a Promise', () => {
      assert.equal(functions.findOrganizationById(1) instanceof Promise, true);
    });

    it('must return the user by id', () => {
      return functions.findOrganizationById(1)
        .then(organization => assert.deepEqual(organization, {
          id: 1,
          name: 'Raynor - Daugherty',
          address: '189 Little Canyon',
        }))
        .catch(error => assert.fail(error))
    });

    it('must return undefined if the user not exists', () => {
      return functions.findOrganizationById(10)
        .then(organization => assert.equal(organization, undefined))
        .catch(error => assert.fail(error))
    });
  });

  describe('findUserByIdWithOrganization', () => {
    it('must return a Promise', () => {
      assert.equal(functions.findUserByIdWithOrganization(2) instanceof Promise, true);
    });

    it('must return the user by id', () => {
      return functions.findUserByIdWithOrganization(3)
        .then(organization => assert.deepEqual(organization, {
          id: 3,
          name: 'Margaretta Armstrong MD',
          email: 'Margaretta_Armstrong73@yahoo.com',
          organization: {
            id: 1,
            name: 'Raynor - Daugherty',
            address: '189 Little Canyon'
          }
        }))
        .catch(error => assert.fail(error))
    });

    it('must return undefined if the user not exists', () => {
      return functions.findUserByIdWithOrganization(10)
        .then(organization => assert.equal(organization, undefined))
        .catch(error => assert.fail(error))
    });
  });
});
