/*import React, { Component } from "react";
import { Admin } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const dataProvider =
  jsonServerProvider("https://jsonplaceholder.typicode.com");

class App extends Component {
  render() {
    return (
      <Admin dataProvider={dataProvider} />
    );
  }
}
export default App;*/

import React from 'react';
import { Admin, Resource,ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

//connect the data provider to the REST endpoint
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
   return (
       <Admin dataProvider={dataProvider}>
       <Resource name="users" list={ListGuesser}/> 
       </Admin>
   );
}

export default App;