import React from 'react';
import List from './list';
import ListItemCard from './listItemCard';
import characters from '.././data/characters';

// Temp component for testing standalone
const App = () => (
      <div className="App">
        <header className="App-header">
        </header>
        <List items={characters} />
      </div>
    );

export default App;

module.export = {
  List,
  ListItemCard,
}
