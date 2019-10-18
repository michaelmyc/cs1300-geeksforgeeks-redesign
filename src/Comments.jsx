import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import './Text.css';

class Comments extends React.Component {
  render() {
    return (
      <div className="comments">
        <div className="comment shadow">
          <img src="assets/head.png" alt="user1" />
          <h4>Jane Doe</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, molestiae id facilis qui provident saepe placeat ex a quod non dolore at error omnis praesentium earum voluptas? Expedita, nulla ut?</p>
        </div>
        <div className="comment shadow mycomment">
          <img src="assets/head.png" alt="user1" />
          <h4>John Doe</h4>
          <p className="mycommentinner">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aut nemo error in doloremque enim quisquam similique magnam praesentium velit repellendus excepturi ea vero nihil atque id incidunt, magni quaerat?</p>
        </div>
        <div className="newcomment">
          <Form inline>
            <FormControl type="text" placeholder="Join the discussion" />
          </Form>
          <Button variant="success">Post</Button>
        </div>
      </div>
    );
  }
}

export default Comments;