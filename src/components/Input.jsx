export default function Input({ isTextArea = false, label, ref, ...props }) {

    const classes = "w-full p-1 rounded-sm border border-stone-200 text-stone-700 bg-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-500"
    return (
        <p className="flex flex-col gap-1 my-4">
            <label htmlFor={props.id} className="text-sm font-medium text-stone-500 uppercase tracking-wide">{label}</label>
            {isTextArea ? 
            <textarea 
            className={classes}
            id={props.id} 
            ref={ref}
            {...props} /> 
            : 
            <input className={classes} 
            type={props.type} 
            id={props.id} 
            ref={ref}
            {...props} />}
        </p>
    );
}