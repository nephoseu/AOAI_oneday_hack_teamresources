const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use(express.static(path.resolve(__dirname, "public")));

// handle POST request to /chat
app.post("/chat", (req, res) => {
    const message = req.body.message;
    console.log("Received message: " + message);

    ////////////////////////////
    /// Add OpenAI code here ///
    ////////////////////////////

    res.json({ message: "Your message was: " + message });
});

// handle POST request to /generateImage
app.post("/generateImage", (req, res) => {
    const formData = req.body;
    console.log("Received form data: ", formData);

    ////////////////////////////
    /// Add OpenAI code here ///
    ////////////////////////////
    
    res.json({ url: "https://via.placeholder.com/150" });
});

// handle all other requests
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});