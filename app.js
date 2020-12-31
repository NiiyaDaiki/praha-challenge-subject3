// package.jsonのscriptsに"start": "node app.js"を加えて
// npm startでサーバーを立ち上げると、ターミナルにconsole.logで出力できる

// expressの読み込み
const express = require("express");
const app = express();

// URLエンコードされたデータをquerystringライブラリ(falseの場合)とqsライブラリ(trueの場合)のどちらで解析するかを選択することができる。
// qsライブラリでは、リッチオブジェクトや配列をURLエンコードされた形式にエンコードすることができ、URLエンコードされたJSONのようになる。
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// port番号
const port = 8080;
// サーバー起動
app.listen(port);

// ルーティング
app.get("/", (req, res) => {
    const data = {
        text: "hello world"
    };
    res.status(200).json(data);
});
app.post("/", (req, res) => {
    const contentType = req.header("Content-Type");
    contentType === "application/json"
        ? res.status(201).json(req.body)
        : res.sendStatus(400);
});
