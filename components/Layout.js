import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProggress from "nprogress";

Router.onRouteChangeStart = url => {
  console.log(url);
  NProggress.start();
};

Router.onRouteChangeComplete = () => NProggress.done();
Router.onRouteChangeCompleteError = () => NProggress.done();

export default ({ children, title }) => (
  <div className="root">
    <Head>
      <title>Nodemail</title>
      <meta name="theme-color" content="#ffffff"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
    </Head>
    <header>
      <Link href="/">
        <a>Email</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/asd">
        <a>Asd</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </header>

    <h1>{title}</h1>
    {children}

    <footer>&copy; {new Date().getFullYear()}</footer>
    <style jsx>{`
      .root {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      header {
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 1em 0;
        font-size: 1.2rem;
        background-color: #1fc8db;
        background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #007bff 75%);
      }
      header a {
        color: black;
        text-decoration: none;
      }
      header a:hover {
        color: lightgrey;
      }
      h1 {
        margin-top: 6% !important;
      }
      footer {
        padding: 1em;
      }
    `}</style>
    <style global jsx>{`
      body {
        margin: 0;
        font-size: 110%;
        background: #f0f0f0;
      }
    `}</style>
  </div>
);
