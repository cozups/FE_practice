const getFullName = (fName, lName) => {
  return `${fName} ${lName}`;
};

const actualFullName = getFullName('Bruce', 'Wayne');
const expectedFullName = 'Bruce Wayne';

if (actualFullName !== expectedFullName) {
  throw new Error(`${actualFullName} is not equal to ${expectedFullName}`);
}
