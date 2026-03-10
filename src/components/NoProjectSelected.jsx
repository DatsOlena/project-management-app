import noProjects from '../assets/no-projects.png';
import Button from './Button';

export default function NoProjectSelected({ onStartAddProject }) {
    return (
        <div className="text-center mt-24 w-2/3">
            <img
                src={noProjects}
                className="w-16 h-16 mx-auto object-contain"
                alt="No project selected" />
            <h2 className="text-xl font-bold text-stone-500 my-4">No project selected</h2>
            <p className="text-stone-400 mb-4">Please select a project to get started with a new one.</p>
            <p className="mt-8">
                <Button onClick={onStartAddProject}>Create a New Project</Button>
            </p>
        </div>
    );
}