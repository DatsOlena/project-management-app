import { useRef } from 'react';

import Input from './Input';
import Modal from './Modal';


export default function NewProject({ onAddProject, onCancel }) {
    const modalRef = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    function handleSave() {
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const dueDate = dueDateRef.current.value;

        if (title.trim() === '' || description.trim() === '' || dueDate.trim() === '') {
            modalRef.current.open();
            return;
        }

        onAddProject({ title, description, dueDate });
        
    }

    return (
        <>
        <Modal 
        ref={modalRef}
        buttonCaption="Okay"
        >
            <h2 className="text-xl font-bold my-4 text-stone-700">Invalid Input</h2>
            <p className="text-stone-600 mb-4">Oops ... looks you forgot to enter a value</p>
            <p className="text-stone-600 mb-4">Please check make sure you provide a valid input for all fields.</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="my-4 flex items-center justify-end gap-2">
                <li>
                    <button 
                    type="button" 
                    onClick={onCancel}
                    className="text-stone-800 hover:text-stone-950">Cancel</button>
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
        </>
    );
}