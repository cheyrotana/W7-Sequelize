import sequelize from "./db/db.js";
import router from "./routes/route.js";
import express from 'express';


const app= express();
app.use(express.json());

app.use('/', router);

try{
    await sequelize.authenticate();
    console.log("connect success");

    await sequelize.sync();
    const PORT= process.env.PORT;

    app.listen(PORT, ()=>{
        console.log(`Server running at http://localhost:${PORT}`);
    })
}catch(err){
    console.log("Err connect to database", err);
}

