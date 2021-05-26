
/**
 Creating promises:

 const promise = new Promise((resolve, reject) => {
   // Write your code here
   const number = 5;
   if (number >= 3) {
     resolve(3); // Resolve the promise successfully
   } else {
     reject(new Error("The number is lower than 3")); // Fail the promise
   }
 })
  
 */


 /**
  * Returns the number 3 as promise
  */
module.exports.number3 = () => {
  return Promise.resolve(3)
}


/**
 * Returns the message passed as failed promise
 */
module.exports.error = (message) => {
  return Promise.reject(message)
}


/**
 * Returns the sum of numbers as a promise. 
 * Must fail the promise if the array is empty or undefined (new Error('Array must not be empty or undefined'))).
 */
module.exports.sum = (numbers) => {
  const promise = new Promise((resolve, reject) => {
    if (!numbers) {
      reject(new Error('Array must not be empty or undefined'))
    } else if (numbers.length < 1) {
      reject(new Error('Array must not be empty or undefined'))
    } else {
      resolve(numbers.reduce((acc, num) => {
        return acc + num
      }))
    }
  });
  return promise
}


/**
 * Returns only odds' numbers. 
 * Must fail the promise if the array is empty or undefined (new Error('Array must not be empty or undefined'))).
 */
module.exports.odds = (numbers) => {
  const promise = new Promise((resolve, reject) => {
    if (!numbers) {
      reject(new Error('Array must not be empty or undefined'))
    } else if (numbers.length < 1) {
      reject(new Error('Array must not be empty or undefined'))
    } else {
      resolve(numbers.filter((number) => number%2 === 1))
    }
  });
  return promise
}


const users = [
  { 
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.org',
    organizationId: 1
  },
  {
    id: 2,
    name: 'Terrence Schowalter',
    email: 'terrence.schowalter29@example.org.com',
    organizationId: 2
  },
  {
    id: 3,
    name: 'Margaretta Armstrong MD',
    email: 'Margaretta_Armstrong73@yahoo.com',
    organizationId: 1
  },
  {
    id: 4,
    name: 'Josefa Dare',
    email: 'Josefa_Dare34@gmail.com',
    organizationId: 2
  }
]

const organizations = [
  {
    id: 1,
    name: 'Raynor - Daugherty',
    address: '189 Little Canyon'
  },
  {
    id: 2,
    name: 'Tillman, Schaefer and Gorczany',
    address: '8345 Klein Loaf'
  }
]


/**
 * Returns the user if exists, or undefined if not found
 */
function findUserById(id) {
  return Promise.resolve(users.find(((user) => user.id ===id)))
}
module.exports.findUserById = findUserById


/**
 * Returns the organization if exists, or undefined if not found
 */
function findOrganizationById(id) {
  return Promise.resolve(organizations.find(((org) => org.id ===id))) 
}
module.exports.findOrganizationById = findOrganizationById


/**
 * Returns the user merged with the organization if exist, or undefined if not found.
 * Combining the last implement promises!
 * Example:
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
 */

module.exports.findUserByIdWithOrganization = (id) => {
  return findUserById(id)
    .then(user => {
      if (!user) {
        return undefined;
      } else {
        return findOrganizationById(user.organizationId)
          .then(organization => {
            delete user.organizationId;
            user.organization = organization;
            return user;
          })
      }
    })
}