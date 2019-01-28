//Required Modules
const express = require('express');
const hbs  =require('hbs');
const fs = require('fs');

//Setting up variables and constants
const port = process.env.PORT || 3000;
const app = express();

//Register location of partials
hbs.registerPartials(__dirname + '/views/partials');

//set view engine
app.set('view engine', 'hbs');

//setting up static route for assets
// app.use((req, res, next)=>{

// 	let now = new Date().toString();
// 	let log = `${now}: ${req.method} ${req.url}`;

// 	fs.appendFile('server.log', log + '\n',(err)=>{

// 		if (err) {
// 			console.log('Unable to append to server.log');
// 		}

// 	});
// 	next();	

// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', ()=>{

	let year = new Date().getFullYear();
	return year;

});

hbs.registerHelper('author', ()=>{

	name = 'Jeremiah Olatunde';
	return name;

});

//helper with argument
hbs.registerHelper('screamIt', (text)=>{

	text = text.toUpperCase();
	return text;

});

//Routes
app.get('/', (req, res)=>{

	let obj = {

		pageTitle: 'Homepage',
		msg: 'Welcome to the homepage',

	};

	res.render('pages/home.hbs', obj);

});

app.get('/about', (req, res)=>{

	res.render('pages/about.hbs', {

		pageTitle: 'About Page',
		msg: 'Some Text Here'

	});

});

// app.get('/projects', (req, res)=>{

// 	let obj = {

// 		pageTitle: 'Projects',
// 		msg: 'Portfolio goes here'

// 	};
// 	res.render('pages/projects.hbs', obj);

// });

app.get('/credits', (req, res)=>{

	let obj = {

		pageTitle: 'Credits',
		msg: ''

	};

	res.render('pages/credits.hbs', obj);

});

app.get('/bad', (req, res)=>{

	res.send({

		errMsg: 'Bad request recieved'

	})

})


//Starting Ports
app.listen(port, ()=>{

	console.log(`Server is running on port: ${port}`);

});
