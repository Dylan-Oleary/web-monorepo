import { useEffect, useState } from "react";

import type { FC } from "react";

export const App: FC = () => {
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        fetch("http://localhost:3001")
            .then((res) => res.json())
            .then(({ message }) => setMessage(message));
    }, []);

    return (
        <div className="w-screen h-screen bg-slate-400">
            <main className="p-4">
                <header className="flex flex-col items-center">
                    <h1>Monorepo</h1>
                    <div>{message}</div>
                </header>
            </main>
        </div>
    );
};
