import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>Header</h1>
      </header>

      <div className="content">
        {/* Left Sidebar */}
        <aside className="sidebar">
          <nav>
            <ul>
              <li>Home</li>
              <li>Blog</li>
              <li>Content</li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main">
          <h2>Conteiner centr</h2>
          <p>Content</p>
        </main>
      </div>
    </div>
  );
}

export default App;