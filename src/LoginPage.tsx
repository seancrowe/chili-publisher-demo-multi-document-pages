import React, { useState } from "react"

/**
 * 
 * @description Returns the Login component to be rendered, which is a child of the App component. Only called in the case that App is rendered without an apikey state value.
 */
export const LoginPage = ({ updateAPIkey }: { updateAPIkey: any }) => {
    // Holds input tag's text input value to be passed to updateAPIkey
    const [inputText, changeInputText] = useState("")

    // Event handler to update inputText's value when the input tag's input value changes
    const onChangeHanlder = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeInputText(event.target.value)
    }

    // Event handler to update apikey value with the current value of inputText
    const onClickHandler = () => {
        updateAPIkey(inputText)
    }

    return <div>
        Please Insert API key:
        <input style={{ marginLeft: "20px" }} onChange={onChangeHanlder} type={"text"}></input>
        <button style={{ marginLeft: "20px" }} onClick={onClickHandler} >Add Key</button>
    </div>
}