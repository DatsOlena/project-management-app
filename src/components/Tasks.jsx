import NewTask from './NewTask';
import Task from './Task';

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
    console.log(tasks);
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Task </h2>
            <NewTask onAddTask={onAddTask} />
            {tasks.length === 0 && (
                <p className="text-stone-500 my-4">This project does not have any tasks yet.</p>
            )}
            {tasks.length > 0 && (
                <ul key={tasks.id} className="p-4 mt-8 rounded-md bg-stone-100">
                    {tasks.map(task => (
                        <Task task={task} onDeleteTask={onDeleteTask} />
                    ))}
                </ul>
            )}
        </section>
    )
}