const app = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer')
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded ({ extended: false}));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Wh!$k3y88',
        database: 'employee_db'
    },
    console.log('Connected to employee_db database.')
);

