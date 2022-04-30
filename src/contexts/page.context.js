import { createContext, useContext, useState } from "react";

const PageContext = createContext(1);

export const PageProvider = ({ children }) => {
    const [pgNumber, setPgNumber] = useState(1);

    return (
        <PageContext.Provider
            value={{
                pgNumber,
                setPgNumber,
            }}
        >
            {children}
        </PageContext.Provider>
    );
};

export const usePage = () => useContext(PageContext);