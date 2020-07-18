import React,{useState, ChangeEvent, FormEvent} from 'react'

const AddCategory = () => {
    const [input, setInput] = useState('hey')
    const changeInput = (e:ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault()
        setInput(e.target.value)
    }

    const submitForm = (e: FormEvent<HTMLFormElement>) =>{
      e.preventDefault()
      console.log(input)
    }
    return (
        <form onSubmit={submitForm}>
            <input type="text" 
            onChange={changeInput}
            value={input}
            name="" id="search"/>
        </form>
    )
}

export default AddCategory
