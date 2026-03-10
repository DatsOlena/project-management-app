import Input from './Input';
import { useRef } from 'react';

export default function NewProject({ onAddProject }) {

    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    function handleSave() {
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const dueDate = dueDateRef.current.value;

        if (title.trim() === '' || description.trim() === '' || dueDate.trim() === '') {
            return;
        }

        onAddProject({ title, description, dueDate });
        
    }

    return (
        <div className="w-[35rem] mt-16">
            <menu className="my-4 flex items-center justify-end gap-2">
                <li>
                    <button type="button" className="text-stone-800 hover:text-stone-950">Cancel</button>
                </li>
                <li>
                    <button
                        type="submit"
                        className="bg-stone-800 text-stone-50 hover:bg-stone-900 rounded-md px-6 py-2"
                        onClick={handleSave}
                        >               
                        Save
                    </button>
                </li>
            </menu>
            <Input label="Title" ref={titleRef} required />
            <Input label="Description" isTextArea ref={descriptionRef} required />
            <Input label="Due Date" type="date" ref={dueDateRef} required />
        </div>
    );
}