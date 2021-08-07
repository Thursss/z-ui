import React from 'react';
import Button from './components/Button/index';

function App() {
  return (
    <div className="App">
      <main>
        <section>
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
      </main>
    </div>
  );
}

export default App;
