const express = require ('express');
const { PrismaClient } = require ('@prisma/client');

const app = express();
const prisma = new PrismaClient();

const port = 4000;

app.use(express.json());

app.post('/add-country', async (req, res) => {

const countryData =req.body;

if (!countryData.name || !countryData.description || !countryData.imgURL) {
    res.send ({error:"You've left empty fields. "})
}

const country = await prisma.country.create({
    data: {
        name: countryData.name,
        description: countryData.description,
        imgURL: countryData.imgURL,
    }
   
});

 res.send({success: "Added" + country.name + " Succesfully"}); 

});

app.listen(port, () => {
    console.log(" Server is running on port", port);
});