import {FormEvent} from "react";


const apiUrl = import.meta.env.VITE_REACT_APP_API_URL
export const LoginScreen = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value
        console.log(username, password)
        handleLogin({username, password})
    }

    const handleLogin = (params: { username: string, password: string }) => {
        fetch(`${apiUrl}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(response => response.json())
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userName">userName</label>
                    <input type="text" id="userName"/>
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" id="password"/>
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
