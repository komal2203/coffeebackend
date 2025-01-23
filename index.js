require("dotenv").config();

const express = require("express");
const app = express();
const port = 4000;

const githubData = {
  login: "komal2203",
  id: 172159102,
  node_id: "U_kgDOCkLwfg",
  avatar_url: "https://avatars.githubusercontent.com/u/172159102?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/komal2203",
  html_url: "https://github.com/komal2203",
  followers_url: "https://api.github.com/users/komal2203/followers",
  following_url:
    "https://api.github.com/users/komal2203/following{/other_user}",
  gists_url: "https://api.github.com/users/komal2203/gists{/gist_id}",
  starred_url: "https://api.github.com/users/komal2203/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/komal2203/subscriptions",
  organizations_url: "https://api.github.com/users/komal2203/orgs",
  repos_url: "https://api.github.com/users/komal2203/repos",
  events_url: "https://api.github.com/users/komal2203/events{/privacy}",
  received_events_url: "https://api.github.com/users/komal2203/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Komal Meena",
  company: null,
  blog: "https://komal2203.github.io/Portfolio-K/",
  location: "Delhi",
  email: null,
  hireable: null,
  bio: "👋 Hello, World! I'm Komal \r\n\r\n🎨 Passionate Frontend Developer | 🌐 JavaScript Enthusiast \r\n\r\n",
  twitter_username: null,
  public_repos: 27,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2024-06-09T02:29:31Z",
  updated_at: "2025-01-23T06:52:15Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("komalmeena");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login at coffee and code</h1>");
});
app.get("/logout", (req, res) => {
  res.send("<h1>please logout of coffee and code</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Hey There!</h2>");
});

app.get("/githubDataa", (req, res) => {
  res.send(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`happy happy`);
});
