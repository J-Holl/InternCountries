import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/redux/store';
import EntryApp from './app/EntryApp';

export default function App() {
  return (
    <Provider store={store}>
      <EntryApp />
    </Provider>
  );

}
