import React from 'react';
import List from './list';
import ListItemCard from './listItemCard';

// Temp component for testing standalone
const App = () => (
      <div className="App">
        <header className="App-header">
        </header>
        <List />
      </div>
    );

export default App;

module.export = {
  List,
  ListItemCard,
}
