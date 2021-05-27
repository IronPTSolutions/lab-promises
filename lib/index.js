
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
  return new Promise((resolve,reject) => {
    if (!numbers || numbers.length === 0) {
      reject(new Error("Array must not be empty or undefined"))
    } else {
      const result = numbers.reduce((acc, num) => acc + num)
      resolve(result)
    }
  })
  
}


/**
 * Returns only odds' numbers. 
 * Must fail the promise if the array is empty or undefined (new Error('Array must not be empty or undefined'))).
 */
module.exports.odds = (numbers) => {
  return new Promise((resolve,reject) => {
    if (!numbers || numbers.length === 0) {
      reject(new Error("Array must not be empty or undefined"))
    } else {
      const odds = numbers.filter(number => number % 2 !== 0)
      resolve(odds)
    }
  })
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
  for (user of users) {
    if (user.id === id) {
      resolve(user)
    } else {
      reject(new Error("is not found or undefined"))
    }
  }

  
}
module.exports.findUserById = findUserById


/**
 * Returns the organization if exists, or undefined if not found
 */
function findOrganizationById(id) {
  for (org of orgs) {
    if(org.id === id) {
      resolve(org)
    } else {
      reject(new Error("is not found or undefined"))
    }
  }
  
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
 
}
