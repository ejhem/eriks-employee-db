const app = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');


app.use(express.urlencoded ({ extended: false}));
app.use(express.json());

const connection = mysql.createConnection(
    {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'Wh!$k3y88',
        database: 'employee_db'
    },
    console.log('Connected to employee_db database.')
);

