
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
  return new Promise((resolve, reject) => {
    resolve(3);
  });
}


/**
 * Returns the message passed as failed promise
 */
module.exports.error = (message) => {
  return new Promise ((resolve, reject) => {
    reject(message);
  });

}


/**
 * Returns the sum of numbers as a promise. 
 * Must fail the promise if the array is empty or undefined (new Error('Array must not be empty or undefined'))).
 */
module.exports.sum = (numbers) => {
  return new Promise((resolve, reject) => {
    if(!numbers || numbers.length === 0){
      reject(new Error('Array must not be empty or undefined'))
    } else {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      resolve(numbers.reduce(reducer))
    }
  })
}


/**
 * Returns only odds' numbers. 
 * Must fail the promise if the array is empty or undefined (new Error('Array must not be empty or undefined'))).
 */
module.exports.odds = (numbers) => {
  return new Promise((resolve, reject) => {
    if(!numbers || numbers.length === 0){
      reject(new Error('Array must not be empty or undefined'))
    } else {
      resolve(numbers.filter(num => num % 2 !== 0))
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
  const user = users.find(user =>user.id === id);
  if (user) {
    return Promise.resolve({...user})
  } else {
    return Promise.resolve()
  }  
}
module.exports.findUserById = findUserById


/**
 * Returns the organization if exists, or undefined if not found
 */
function findOrganizationById(id) {
  const organization = organizations.find(organization => organization.id === id);
  if (organization){
    return Promise.resolve({...organization}) ///...hace una copia del objeto
  } else {
    return Promise.resolve()
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
  return findUserById(id)
  .then(user => {
    if (user) {
      return findOrganizationById(user.organizationId)
        .then(organization => {
          user.organization = organization;
          delete user.organizationId; //borrado de la clave de un objeto
          return user
        })
    } else {
      return; //es como un return undefined
    }
  })
}
