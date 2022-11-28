import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';

function TabButton() {
  const [key, setKey] = useState('book');

  return (
    <Container>
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-2"
    >
      <Tab eventKey="book" title="Book">
      </Tab>
      <Tab eventKey="movie" title="Movie">
      </Tab>
    </Tabs>
    </Container>
  );
}

export default TabButton;