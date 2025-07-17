import styles from "./index.module.css";
import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login");
    };

    return (
        <div className={styles.container}> 
            <h1 
                style = {{
                color: "white",
                textAlign: "center",
            }}
            >
                Login
                </h1>
                <form onSubmit={handleSubmit}className={styles.formWrapper}>
                <input 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                    type ="text" 
                    placeholder="Input your username" 
                />
                <input 
                    value ={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    type ="password" 
                    placeholder="Input your password" 
                />
                <button 
                    type ="submit">Login</button>
                </form>

        </div>
    );
};

export default Login