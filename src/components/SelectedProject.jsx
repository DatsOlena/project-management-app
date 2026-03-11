import Button from './Button';
import Tasks from './Tasks';

export default function SelectedProject({ project, onDelete, onAddTask, onDeleteTask, tasks }) {

    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const projectTasks = tasks.filter(task => task.projectId === project.id);
    
    return (
        <div className="w-[35rem] mt-16">
            <header className="mb-4 pb-4 border-b border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                    <Button 
                    className="text-stone-600 hover:text-stone-950"
                    onClick={() => onDelete(project.id)}
                    >Delete</Button>
                </div>
                <p className="text-stone-400 mb-4">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap mb-4">{project.description}</p>
            </header>
            <Tasks tasks={projectTasks} onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
        </div>
    )
}