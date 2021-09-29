import './App.css'
import ToDo from './components/ToDo'
import ToDoForm from './components/ToDoForm'

function App() {
	return (
		<div className="App">
			<header>
				<h1>Список задач: </h1>
			</header>
			<ToDoForm />
		</div>
	)
}

export default App
