const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const respRoutes = require('./routes/responses');

app.use(express.json());
//routes
app.use('/api/responses',respRoutes);

app.listen(PORT,()=>{
    console.log("Server started on", {PORT});
})