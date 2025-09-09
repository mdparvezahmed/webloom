const express = require('express');



// create a web server
const app = express();

// app.get
// app.post
// app.put
// app.patch
// app.delete


app.get("/api/v1/user/home", (req, res) => {
    // const user = {
    //     name: "sam",
    //     age:21,
    //     email: "sam@some.com",
    //     school: "diu"
    // };
    res.send("<h1>Home page</h1>");
    // res.send(user);
});


app.get("/api/v1/user/profile", (req, res) => {
    res.status(200).json({
        success: true,
        user: {
            username: "ad221",
            email: "ad@gmail.com"
        }
    })
});


app.get("/api/v1/user/about", (req, res) => {

    res.send("<h1>About us</h1>");

});

//geing using id
app.get("/api/v1/product/:productId/coment/:commentId", (req, res) => {
    // const id = req.params.productId;
    // const id = req.params.commentId;

    const {productId, commentId}= req.params;

    console.log(productId, commentId);

    const product = {
        productId: 1,
        name: "mackbook m1 pro",
    }
    res.status(200).json({
        success: true,
        product,
    });
});



app.listen(8000, () => {
    console.log("server listen port at 8000")
});