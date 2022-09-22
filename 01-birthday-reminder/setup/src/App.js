import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {

  const [people, setPeople] = useState(data);

  return (
  <main>
    <section className='container'>
      <h3>{people.length} birthdays today</h3>
      <List people={people}/>
      <button onClick={() => setPeople([])}>Clear All</button>
    </section>
  </main>
  );
}

/** 
 * {setPeople(temp.push(keanu))}
 * 
 * <button onClick={() => {
  let temp = people;
  const person = {
    id: 6,
    name: 'Keanu',
    age: 24,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
  };
  setPeople(people.push(person))
}}>Add Person</button> */

export default App;
