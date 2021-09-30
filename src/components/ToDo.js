function ToDo({ todo, toggleTask, removeTask }) {
	return (
		<div key={todo.id} className="style1">
			<div
				className={todo.complete ? 'style1' : 'style2'}
				onClick={() => toggleTask(todo.id)}
			>
				{todo.task}
			</div>
			<div className="style-delete" onClick={() => removeTask(todo.id)}>
				X
			</div>
		</div>
	)
}

export default ToDo
