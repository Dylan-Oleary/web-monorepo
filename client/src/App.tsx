import { useEffect } from "react";

import "./App.css";

import type { FC } from "react";

const App: FC = () => {
    useEffect(() => {
        fetch("http://localhost:3002").then((res) => {
            console.log(res);
        });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Monorepo test</h1>
            </header>
        </div>
    );
};

export { App };
