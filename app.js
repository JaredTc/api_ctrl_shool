const express = require('express');
const exphbs = require('express-handlebars');
const pool = require('./data/db');
var cors = require('cors');
const bodyparser = require('body-parser');
var app = express();
app.use(bodyparser.json());
app.use(express.json());
app.use(cors());


app.get('/', function(req, res){
    res.send('hola');

});

app.listen('3000', function(){
    console.log("Servidor Ok en puerto");
});


app.post('/api/auth/',  (req,res) =>{
	const user = req.body.userio;
	const pass = req.body.pass;
    
	if (user && pass) {
		connection.query('SELECT * FROM users WHERE usuario = ?', [userio], (error, results, fields)=> {
			if( results.length == 0 || pass.length == 0)  {    
                res.send('Incorrect');
			
			} else {         
				res.send('correct');  			
			}			
			res.end();
		});
	} else {	
		res.send('Please enter user and Password!');
		res.end();
	}
} );


//MOSTRAR USERS PRUEBA
app.get('/usuarios/', (req, res) =>{
    pool.query('SELECT * FROM users ', (error, filas) => {
        if(error){
            throw error;

        } else{
            res.send(filas);
        }
    });
} );

//Registrar Usuarios
// app.POST('/register', (req,res) =>{
//     let data ={
//         nombre: nombre.body.nombre,
//         paterno: paterno.body.paterno,
//         materno: materno.body.materno,


//     }
   
// });