# 環境構築

1. プロジェクトをクローン
2. クローンしたディレクトリに移動
3. npm installを実行
4. npm startを実行

<br>

# WEBサーバの仕様
- エンドポイントは2つ
- localhost:8080に対してGETリクエスト受けた時、{text: hello world}とjsonをHTTPステータス200で返す
- localhost:8080に対してPOSTリクエストを受けた時、リクエストbodyに含まれるjsonデータを、レスポンスのbodyに含めて、HTTPステータス201で返す
- POSTリクエストを受け付けるエンドポイントは、Content-Typeがapplication/json以外の時は、HTTPステータス400を返す

<br>

# 検証用curlコマンド
get用

`curl localhost:8080 -H "Content-Type: application/json"`

post用

Content-Type: application/json

`curl localhost:8080 -d '{"name": "hoge"}' -H "Content-Type: application/json"
`


Content-Typeがapplication/json以外

`curl localhost:8080 -d '{"name": "hoge"}'`