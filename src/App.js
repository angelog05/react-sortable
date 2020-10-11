import React, { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

const SortableItem = SortableElement(({value}) => {
  return (
    <li className="list-group-item">
      <h3>{value.title}</h3>
      <p>{value.description}</p>
    </li>
  );
});

const Sortablelist = SortableContainer(({items}) => {
  return (
    <ul className="list-group">
      {
        items.map((value, i) => <SortableItem value={value} key={i} index={i} />)
      }
    </ul>
  );
});

function SortableComponent () {
  const [tasks, setTasks] = useState([
    {title: 'title 1', description: 'desc one'},
    {title: 'title 2', description: 'desc two'},
    {title: 'title 3', description: 'desc three'},
    {title: 'title 4', description: 'desc four'},
    {title: 'title 5', description: 'desc five'}
  ]);
  return (
    <Sortablelist items={tasks} onSortEnd={onSortEnd} />
  );
}

const onSortEnd = ({ oldIndex, newIndex}) => {
  console.log({oldIndex, newIndex});
  const taskCopy = [...tasks];
};

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <SortableComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
