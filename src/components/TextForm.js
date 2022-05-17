import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpText = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Uppercase Created", "primary");
    }

    const handleChangeLines = () => {
        let newText = text.replaceAll(" ", "\n");;
        setText(newText);
        props.showAlert("List Created", "warning");
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "primary");
    }

    const handleDownText = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Lowercase Created", "danger");

    }
    const handleClear = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Cleared", "success");

    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }


    return (
        <>
            <div className="container" style={props.mystyle}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={props.mystyle} onChange={handleOnChange} id="myBox" rows="3"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpText}>Uppercase</button>
                <button className="btn btn-primary mx-3 my-3" onClick={handleDownText}>Lowercase</button>
                <button className="btn btn-primary mx-3 my-3" onClick={handleChangeLines}>List Convert</button>
                <button className="btn btn-primary mx-3 my-3" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-3 my-3" onClick={handleClear}>Clear</button>
                <div className="container my-3">
                    <h6>Your Text Summary</h6>
                    <p>{text.length > 0 ? text.trim().replace(/\s+/g, " ").split(" ").length : 0} words &amp; {text.length} characters</p>
                    <p>{text.length > 0 ? text.split(" ").length * 0.008 : 0} Minutes Read</p>
                    <h6>Preview</h6>
                    <p>{text.length > 0 ? text : 'Enter Something to Preview Here'}</p>
                </div>
            </div>

        </>
    );
}
