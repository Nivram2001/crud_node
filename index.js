const express = require('express');
const bodyParser = require('body-parser');

//importar rotas
const matchRoutes = require('./src/routers/matchRouters');
const playerRoutes = require('./src/routers/playerRouters');
const teamRoutes = require('./src/routers/teamRouters')

const app = express();

const PORT = 3001;

// middleware
app.use(bodyParser.json());

//usar rotas
app.use("/match",matchRoutes);
app.use("/player",playerRoutes);
app.use('/team',teamRoutes);

app.listen(PORT, () => {
    console.log('Listen on PORT::', PORT);
})
