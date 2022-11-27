function Form(props) {
    return (
        <form id={props.id}>
            <div className="w-full relative">
                {props.children}
            </div>
            <button type={props.type} className="btn shadow-enter_button">{props.text}</button>
        </form>
    )
}

export default Form
