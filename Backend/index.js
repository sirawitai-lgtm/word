const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise')

const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const port = 8300;

let conn = null;
const initMySQL = async() => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webpj',
        port: 8500
    }); 
    console.log('connected to MySQL database');
}


app.get('/login',async (req,res)=> {
    const results = await conn.query('SELECT * FROM login');
    res.json(results[0]);

})


app.post('/loginPOST',async (req,res) => {
    try{
        let user = req.body;
        const results = await conn.query('Insert into login set ? ',user);
        res.json({
        message: 'User added successfully',
        data: results[0]
    });

    }catch(error){
        console.log('Error inserting login:',error);
        res.status(500).json({message:'Error adding user'});
    }
})
//API GET
app.get('/login/:id',async (req,res) => {
    try{
        let id = req.params.id;
        const results = await conn.query('SELECT * FROM login WHERE id = ?',id );
        if (results[0].lenght === 0){
            throw {statusCode: 404,message:'User not found'};
        }
        res.json(results[0][0]);
    }catch (error){
        console.error('Error fetching user :',error);
        let statusCode = error.statusCode || 500;
        res.status(500).json({
            message:error.message||'Error fetching user'
        });
    }
})

app.delete('/loginDEL/:id', async (req,res) => {
    try{
        let id = req.params.id;
        const results = await conn.query('DELETE FROM login WHERE id = ?',id);

        res.json({
            message: 'Username deleted successfully',
            data: results[0]
        });
    }catch(error){
        console.log.error('Error deleting username:',error);
        res.status(500).json({message: 'Error deleting username'}); 
    }
});

app.listen(port,async () => {
    await initMySQL();
    console.log(`Server is running on http://localhost:${port}`);
});
