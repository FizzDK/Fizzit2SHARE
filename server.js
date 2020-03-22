const       exPress     =   	require("express"),
		   monGoose     =   	require("mongoose"),
		   path			= 		require("path"),
		   cors			=		require("cors"),
		   cookieParser	=		require("cookie-parser"),
		   bodyParser   =   	require("body-parser");
		   require('dotenv').config()


const       app        	 	=   	exPress();
const		corsOptions		=		{
		origin:	"http://fizzit.green",
		credentials: true
}


app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(cookieParser(process.env.COOKIESECRET));
app.use(`/FormSub`,require(`./routes/Comms/FormSub`));
app.use(`/Tilmeld`,require(`./routes/register`));
app.use(`/users/auth`,require(`./routes/user/auth`));
app.use(`/users/info`,require(`./routes/user/info`));
app.use(`/users/order`,require(`./routes/user/customer/orders/order`));
// app.use(`/users/account`,require(`./routes/user/account`));

monGoose.set('useCreateIndex', true);
monGoose.set('useFindAndModify', false);
monGoose.set('useUnifiedTopology', true );

monGoose.connect(process.env.DATABASEURL, { useNewUrlParser: true }, function(err, mongoClient){
	if (err){
		console.log(err);
	} else {
		console.log("Database is connected");
	}
});

// monGoose.connect('mongodb://localhost/FIZZ', {useNewUrlParser: true});
monGoose.connection.on('error', err => {
	logError(err);
  });

if (process.env.NODE_ENV === 'PRODUCTION'){
	app.use(exPress.static(`fizzit/build`));
	app.get(`*`, function(request, response){
		response.sendFile(path.resolve(__dirname,'fizzit','build','index.html'))
	})
}

app.listen(process.env.PORT, function(){
    console.log(`Server is up and running on port ${process.env.PORT}`)
})
