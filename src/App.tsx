import React from 'react';
import Button from './components/button';
import Menu, { MenuItem } from './components/menu';

function App() {
  return (
    <div className="App">
      <main>
        <section className="btn-ground">
          <h1>button</h1>
          <Button>default Button</Button>
          <Button disabled>Disabled Button</Button>
          <Button btnType="primary" size="sm">
            primary Button
          </Button>
          <Button btnType="danger" size="lg">
            danger Button
          </Button>
          <Button btnType="link" href="http://localhost:3000/">
            Link Button
          </Button>
          <Button btnType="link" disabled href="http://localhost:3000/">
            disabled Link Button
          </Button>
        </section>
        <section className="menu-ground">
          <h1>Menu</h1>
          <Menu>
            <MenuItem index={0}>test1</MenuItem>
            <MenuItem index={1}>test2</MenuItem>
            <MenuItem index={2}>test3</MenuItem>
          </Menu>
        </section>
      </main>
    </div>
  );
}

export default App;
