import { createContext, useContext, useState } from "react";

const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
    const [modal, setModal] = useState({
        visible: false,
        value: {}
    });

    return (
        <ModalContext.Provider
            value={{
                modal,
                setModal,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);