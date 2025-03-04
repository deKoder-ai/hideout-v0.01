import EditableTaskList from './components/EditableTaskList/EditableTaskList.jsx';

function App() {
  const taskArray = ['Just some demo tasks', 'As an example'];
  return (
    <>
      <div className='card'>
        <EditableTaskList name={'Task List'} taskArray={taskArray} />
      </div>
    </>
  );
}

export default App;
