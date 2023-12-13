// Example of an admin database structure in JavaScript
let adminDatabase = [];

// Function to add a new admin to the "admin database"
function addAdmin(username, email, password) {
  let newAdmin = {
    id: generateAdminId(), // You can create a function to generate unique admin IDs
    username: username,
    email: email,
    password: password
  };

  adminDatabase.push(newAdmin);
}

// Function to retrieve an admin by email from the "admin database"
function getAdminByEmail(email) {
  return adminDatabase.find(admin => admin.email === email);
}

// Function to authenticate admin login
function adminLogin(email, password) {
  let admin = getAdminByEmail(email);
  if (admin && admin.password === password) {
    return admin; // Return admin object if email and password match
  }
  return null; // Return null if no matching admin found or incorrect password
}

// Example usage:

// Adding an admin (you would typically do this as part of admin registration)
addAdmin('Admin1', 'officialsanthosh.n2004@gmail.com', 'admin123');

// Admin login attempt
const adminEmail = 'officialsanthosh.n2004@gmail.com';
const adminPassword = 'admin123';

const loggedInAdmin = adminLogin(adminEmail, adminPassword);

if (loggedInAdmin) {
  console.log('Admin logged in:', loggedInAdmin);
} else {
  console.log('Invalid credentials or admin not found.');
}
