import logo from './logo.svg';
import './App.css';
import TodoRowItem from './components/TodoRowItem';

function App() {
const todos = [
  {rowNum: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One'},
  {rowNum: 2, rowDescription: 'Water Plants', rowAssigned: 'User Two'},
  {rowNum: 3, rowDescription: 'Make Dinner', rowAssigned: 'User One'}
]

  return (
    <div className= 'mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned</th>
              </tr>
            </thead>
            <tbody>
              <TodoRowItem
               rowNum={todos[0].rowNum}
               rowDescription={todos[0].rowDescription}
              rowAssigned={todos[0].rowAssigned}/>
              <TodoRowItem
               rowNum={todos[1].rowNum}
               rowDescription={todos[1].rowDescription}
              rowAssigned={todos[1].rowAssigned}/>
              <TodoRowItem
               rowNum={todos[2].rowNum}
               rowDescription={todos[2].rowDescription}
              rowAssigned={todos[2].rowAssigned}/>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
