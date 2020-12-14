const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn");
const Register = require("./models/registers");
const { json } = require("express");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials"); //giving path of partials


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views",template_path);    //while changing views to template
hbs.registerPartials(partials_path);  //registering partial files
 

app.get("/index", (req, res) => {
    res.render("index")
});

app.get("/register", (req, res) => {
    res.render("register");
})

//Creating New User In database
app.post("/register", async (req, res) => {
    try {
        
        const registerEmployee = new Register({
            name: req.body.name,
            Email: req.body.Email,
            YourPassword:req.body.YourPassword,
            PhoneNumber:req.body.PhoneNumber
        })

        const registered = await registerEmployee.save();
        res.status(201).render("index");
        
    }   catch(error) {
        res.status(400).send(error);
    }
})

app.listen(port, () => {
    console.log(`server is running on port no ${port}`);
})