const express = require("express");
const cors = require('cors');
const app = express();
const mysql = require("mysql");
const PORT = process.env.port || 8000;


let corsOptions = {
  origin: "*", // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};

app.use(cors(corsOptions));
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "bbs",
});



app.get("/", (req, res) => {
  const sqlQuery = "INSERT INTO requested (rowno) VALUES (1)";
  db.query(sqlQuery, (err, result) => {
    res.send("success!");
  });
});

app.get("/list", (req, res) => {
  const sqlQuery = "SELECT BOARD_ID,BOARD_TITLE,REGISTER_ID,DATE_FORMAT(REGISTER_DATE,'%Y-%m-%d') AS REGISTER_DATE FROM BOARD;"; //게시글 목록 조회
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
