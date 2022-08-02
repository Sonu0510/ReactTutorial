import React,{useState} from 'react'

export default function Form(props) {
   const [text, setText] = useState('Enter text here');

   const toUpperCase = ()=> {
      let newText = text.toUpperCase();
      setText(newText);
   }

   const onChange = (event)=> {
      setText(event.target.value);
   }
  return (
     <div>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={onChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={toUpperCase}>toUppercase</button>
     </div>
  )
}
