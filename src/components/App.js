import React from 'react';
import List from './list';
import ListItemCard from './listItemCard';
import AddItemToListButton from './addItemToList';
import nott from '../data/characters/nott';

// Temp component for testing standalone
const App = () => (
      <div className="App">
        <header className="App-header">
        </header>
        <List />
        <AddItemToListButton item={nott} />
      </div>
    );

export default App;

module.export = {
  List,
  ListItemCard,
}
