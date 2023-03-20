import React, { useState } from "react"

export const LoginPage = ({ updateAPIkey }: { updateAPIkey: any }) => {

    const [inputText, changeInputText] = useState("")

    const onChangeHanlder = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeInputText(event.target.value)
    }

    const onClickHandler = () => {
        updateAPIkey(inputText)
    }

    return <div>
        Please Insert API key:
        <input style={{ marginLeft: "20px" }} onChange={onChangeHanlder} type={"text"}></input>
        <button style={{ marginLeft: "20px" }} onClick={onClickHandler} >Add Key</button>
    </div>
}