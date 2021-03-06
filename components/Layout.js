import Link from "next/link";
import Head from "next/head";
import Router, { withRouter } from "next/router";
import NProggress from "nprogress";

Router.onRouteChangeStart = url => {
  console.log(url);
  NProggress.start();
};

Router.onRouteChangeComplete = () => NProggress.done();
Router.onRouteChangeCompleteError = () => NProggress.done();

const links = [
  { href: "/", key: "homepage", content: "Email" },
  { href: "/about", key: "about", content: "About" },
  { href: "/mouse", key: "mouse", content: "Mouse" },
  { href: "/blog", key: "blog", content: "Blog" },
//   { href: "/test", key: "test", content: "Test" }
];

class Layout extends React.Component {
  render() {
    const { children, title, router } = this.props;
    return (
      <div className="root">
        <Head>
          <title>Nodemail</title>
          <meta name="theme-color" content="#ffffff" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
        </Head>
        <header>
          {links.map(link => {
            return (
              <Link prefetch key={link.key} href={link.href}>
                <a className={router.pathname === link.href && "active"}>
                  {link.content}
                </a>
              </Link>
            );
          })}
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
            background-image: linear-gradient(
              141deg,
              #9fb8ad 0%,
              #1fc8db 51%,
              #007bff 75%
            );
          }
          header a {
            color: black;
            text-decoration: none;
          }
          header a:hover {
            color: lightgrey;
          }
          .active {
            color: #fd7e14 !important;
            text-shadow: 1px 1px 1px #000;
          }
          h1 {
            margin-top: 6% !important;
          }
          footer {
            padding: 1em;
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            text-align: center;
          }
        `}</style>
        <style global jsx>{`
          body {
            margin: 0;
            font-size: 110%;
            background: #f0f0f0;
          }
          .ql-editor {
            background-color: white;
          }
          .ql-toolbar {
            display: block;
            background-color: #eaecec;
            border-top-left-radius: 0.25rem;
            border-top-right-radius: 0.25rem;
          }
          .ql-container {
            border-bottom-left-radius: 0.25rem;
            border-bottom-right-radius: 0.25rem;
            background: #fefcfc;
          }

          .ql-editor {
            border-bottom-left-radius: 0.25rem;
            border-bottom-right-radius: 0.25rem;
          }
          .ql-editor {
            min-height: 10em;
          }
          .spinner-container {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </div>
    );
  }
}

export default withRouter(Layout);
