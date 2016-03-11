# Rolique SEO Prerender Testing

Test project for check SEO in AngularJS


### Installation

```sh
$ git clone https://github.com/art2cool/crawler-test.git
$ cd crawler-test
$ npm install
```
### run

start prerender-node server for first-tab:
```sh
$ node server.js
```

then run your aplication
Second Tab:
```sh
$ node app.js
```

### how it works
check application
http://localhost:8000/

then type on another tab (linux)
```sh
curl http://localhost:8000/
curl http://localhost:8000/about
```
check is js rendered

then run
```sh
curl http://localhost:8000/?_escaped_fragment_=
curl http://localhost:8000/?_escaped_fragment_=about
```

and check again
