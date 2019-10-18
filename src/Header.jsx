import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { slide as Menu } from 'react-burger-menu'
import './Header.css';
import './Menu.css';
import './App.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header-footer header" id="header">
        <div className="header-split">
          <Menu pageWrapId={"page-wrap"} outerContainerId={"header"}>
            <a className="menu-item" href="/">
              Home
            </a>
            <a className="menu-item" href="/algo">
              Algorithms
            </a>
            <a className="menu-item" href="/ds">
              Data Structures
            </a>
            <a className="menu-item" href="/languages">
              Languages
            </a>
            <a className="menu-item" href="/interview">
              Interview
            </a>
            <a className="menu-item" href="/students">
              Students
            </a>
            <a className="menu-item" href="/subjects">
              CS Subjects
            </a>
            <a className="menu-item" href="/quizzes">
              Quizzes
            </a>
            <a className="menu-item" href="/blog">
              GBlog
            </a>
            <a className="menu-item" href="/puzzles">
              Puzzles
            </a>
            <a className="menu-item" href="/practice">
              Practice
            </a>
          </Menu>
          <div className="logo header-item">
            <img src="assets/plain-logo.png" alt="logo"></img>
          </div>
        </div>
        <div className="header-split">
          <div className="search header-item">
            <Form inline>
              <FormControl type="text" placeholder="Search" />
            </Form>
          </div>
          <div className="login header-item">
            <Button variant="success">Login</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;