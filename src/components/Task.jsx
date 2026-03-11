export default function Task({ task, onDeleteTask }) {

    return (
        <li key={task.id} className="flex justify-between my-4">
            <p className="text-stone-500">{task.text}</p>
            <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDeleteTask(task.id)}>
                Clear
                </button>
        </li>
    )
}