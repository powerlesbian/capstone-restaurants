/* /components/Layout.js */

import React, { useState, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Nav, NavItem } from "reactstrap";
import { useUser, UserProvider } from "@auth0/nextjs-auth0";
import AppContext from "./context";

// import Profile from "../pages/profile";

const Layout = (props) => {
const title = "Welcome to No More Cereal!";
const context = useContext(AppContext)
const { user, error, isLoading } = useUser();

console.log(`current user is ${context.username}`);
console.log(`I think Auth0 is working if you can see ${user}`);


  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
        <script src="https://js.stripe.com/v3" />
      </Head>
      <header>
        <style jsx>
          {`
            a {
              color: white;
            }
            h5 {
              color: white;
              padding-top: 11px;
            }
          `}
        </style>
        <Nav className="navbar navbar-light bg-primary">
          <NavItem>
            <Link href="/">
              <a className="navbar-brand">No More Cereal</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="https://yumseafood.shop">
              <a className="nav-link">Link to real food</a>
            </Link>
          </NavItem>

          <NavItem className="justify-content-end">
          {user ? (
              <h5>{user.name}</h5>

            ) : (
              <a href="/api/auth/login">Login</a>
            )}
         

          </NavItem>
          <NavItem>

          {user ? (
            <a href="/api/auth/logout">Logout</a>
            ) : (
<p>Bringing you YuM Food Generally</p>
            )}


          </NavItem>
        </Nav>
      </header>
      <Container>{props.children}</Container>
      <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
    </div>
  );
};

export default Layout;