const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let loginData ={}

app.post("/", (req, res, next) => {
    console.log('POST로 받은 데이터');
    console.log(req.body);
    loginData=req.body
    res.json(req.body);
});

app.get("/", (req, res) => {
    console.log('GET으로 데이터 보내기');
    console.log(loginData)
    res.json(loginData);
});

app.listen(port, () => {
    console.log(`서버 실행 ${port}`);
}); 