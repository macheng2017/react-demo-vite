import {FormEvent} from "react";

export const LoginScreen = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value
        console.log(username, password)
        handleLogin({username, password})
    }

    const handleLogin = (params: { username: string, password: string }) => {
        fetch(`http://localhost:3000/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(response => response.json())
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="userName">userName</label>
            <input type="text" id="userName"/>

            <label htmlFor="password">password</label>
            <input type="password" id="password"/>
            <button type="submit">submit</button>
        </form>
    )
}
