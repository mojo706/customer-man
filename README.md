# Customer Man
## API for customer management

# Setup
## Make sure you have `Node v ^8.10.0` 
## Works better with `Sequelize` and `Sqlite3` installed globally

## Run the following commands to setup:

###  `git clone https://github.com/mojo706/customer-man.git`

###  `cd customer-man/`

###  Run `npm install` or `yarn` to install dependencies

## Make sure you run db migrations

###  `sequelize db:migrate` // This is if you have sequelize and sqlite installed globally

# Running
## Run one of the following commands to run app:

###  `npm run start:dev` or `yarn start:dev`

# Endpoints
## The API exposes the following endpoints
### Add Customer Endpoint [POST]
### ``` localhost:7777/api/customers ```  
Payload =  
{  
	"name": String,  
	"phone": String,  
}

### Retrieve All Customers [GET]
### ``` localhost:7777/api/customers ```  
No payload needed

### Retrieve Customer By ID [GET]
### ``` ${url}/api/customers/:customerId ```  
No payload needed

### Retrieve Customer By Either phone or name [GET]
### ``` localhost:7777/api/customers/search/?name=${name}orphone=${phone} ``` // search using either the name or the phone number
No payload needed

### Update Customer Endpoint [PUT]
### ``` localhost:7777/api/customers/:customerId ```  
Payload =  
{  
	"name": String,  
	"phone": String,  
}

### Delete User Endpoint [DELETE]
### ``` localhost:7777/api/customers/:customerId ```  
No payload needed

