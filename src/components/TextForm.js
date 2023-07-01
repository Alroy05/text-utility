import React,{useState} from 'react'

export default function TextForm(props) {

  const handleUpChange= () => {
    const newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoChange= () => {
    const newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange= (event) => {
    // console.log('On Change');
    setText(event.target.value);
  }

  const handleExtraSpaces = () => {
    let removedSpace = text.split(/[ ]+/);
    setText(removedSpace.join(" "));
  }

  const handleCopy= () => {
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","success");
  }

  const handleClear= () => {
    
    setText(" ");
  }

  const enterPressed = (event) => {
    if(event.key === 'Enter')
    {
      handleUpChange();
    }
  }

  const [text,setText] = useState(' ');

  return (
    <>
    <div className={`my-3 container ${props.mode==='dark'?'text-light':'text-dark'}`}>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className={`form-control ${props.mode==='dark'?'bg-dark text-light':'bg-light text-dark'}`} value={text} onChange={handleOnChange} onKeyDown={enterPressed} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary m-3" onClick={handleUpChange}>Convert to Uppercase</button>
        <button className="btn btn-primary m-3" onClick={handleLoChange}>Convert to Lowercase</button>
        <button className="btn btn-primary m-3" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary m-3" onClick={handleExtraSpaces}>Clear Spaces</button>
        <button className="btn btn-danger m-3" onClick={handleClear}>Clear text</button>
      </div>
    </div>
    <div className={`container ${props.mode==='dark'?'text-light':'text-dark'}`}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} chracters</p>
      <p>{(0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length).toFixed(2)} min read</p>
      <h2>Preview</h2>
      <p>{`${(text.split(/\s+/).filter((element)=>{return element.length!==0}).length>0?text:'Type some text to preview!')}`}</p>
    </div>
    </>
  );
}
