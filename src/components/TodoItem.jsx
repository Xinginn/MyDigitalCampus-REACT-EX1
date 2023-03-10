export function TodoItem({ item, handleClick, handleDelete }) {

	return (
		<li>
			<span>{item.name}</span>
			<button type="button" onClick={() => handleClick(item)}>
				Mark as {(item.state === "todo") ? 'Done' : 'To Do'}
			</button>
      <button type="button" onClick={() => handleDelete(item)}> Delete </button>
		</li>
	);
}
