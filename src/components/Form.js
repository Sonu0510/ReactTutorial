import React,{useState} from 'react'

export default function Form(props) {
   const [text, setText] = useState('');

   const toUpperCase = ()=> {
      let newText = text.toUpperCase();
      setText(newText);
   }

   const toLowerCase = ()=> {
      let newText = text.toLowerCase();
      setText(newText);
   }

   const clearText = ()=> {
      let newText = "";
      setText(newText);
   }

   const copyText = ()=> {
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
   }

   const delExtraSpace = ()=> {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
   }

   const onChange = (event)=> {
      setText(event.target.value);
   }

  return (
   <>
      <div className='container my-3'>
         <div className="mb-3">
               <h1>{props.heading}</h1>
               <textarea className="form-control" value={text} onChange={onChange} id="myBox" rows="8"></textarea>
         </div>
         <button className="btn btn-primary" onClick={toUpperCase}>to UpperCase</button>
         <button className="btn btn-primary mx-2" onClick={toLowerCase}>to LowerCase</button>
         <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
         <button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
         <button className="btn btn-primary mx-2" onClick={delExtraSpace}>Remove Extra Spaces</button>
         
      </div>
      <div className="container my-3">
         <h2>Text Summary</h2>
         <p>{text.split(" ").length} words and {text.length} characters</p>
         <p>{text.split(" ").length * 0.008} minutes read</p>
         <h2>Preview</h2>
         <p>{text}</p>
      </div>

     </>
  )
}
