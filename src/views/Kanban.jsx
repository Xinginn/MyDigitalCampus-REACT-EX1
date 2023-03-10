import { useState } from 'react';
import { TodoItem } from '../components/TodoItem';
import { Navbar } from '../components/Navbar';

const STATE = {
	TODO: 'todo',
	DONE: 'done',
};

function Kanban() {

	const [form, setForm] = useState({
		todo: '',
	});

	const [todos, setTodos] = useState([]);

	function handleSubmit(event) {
		event.preventDefault();

		setTodos([
			...todos,
			{
				name: form.todo,
				state: STATE.TODO,
			},
		]);

		setForm({
			...form,
			todo: '',
		});
	}

	function handleChange(event) {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
	}

	function handleClick(item) {
		const newTodos = todos.map(function (elem) {
			if (elem.name !== item.name) return elem;

			return {
				...elem,
				state: item.state === STATE.DONE ? STATE.TODO : STATE.DONE,
			};
		});

		setTodos(newTodos);
	}

	return (
		<div className="Kanban">
      <Navbar></Navbar>
			<form onSubmit={handleSubmit}>
				<input type="text" name="todo" onChange={handleChange} value={form.todo} />
				<button type="submit">Ajouter</button>
			</form>
			<h2>TODOS</h2>
			<ul>
				{todos
					.filter(function (item) {
						return item.state === STATE.TODO;
					})
					.map(function (item) {
						return <TodoItem key={item.name} item={item} handleClick={handleClick} />;
					})}
			</ul>

			<h2>DONE</h2>
			<ul>
				{todos
					.filter(function (item) {
						return item.state === STATE.DONE;
					})
					.map(function (item) {
						return <TodoItem key={item.name} item={item} handleClick={handleClick} />;
					})}
			</ul>
		</div>
	);
}

export default Kanban;