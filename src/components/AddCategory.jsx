import { useState } from "react"


export const AddCategory = ({setCategories, onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        const value = target.value
        setInputValue(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newInputValue = inputValue.trim()

        if(newInputValue.length <= 1) return;

        // setCategories(categories => [inputValue, ...categories])
        // setCategories([...categories, inputValue])
        onNewCategory(newInputValue)
        setInputValue('')
    }



  return (
    
        <form action="submit" onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Search gifs'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    
  )
}
