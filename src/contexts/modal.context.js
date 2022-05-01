import { createContext, useContext, useState } from "react";

const ModalContext = createContext({});

/**
 * this context is shared between modal and cards grid.
 * @param {React.Element} - children
 * @return {React.Element} - Context Provider  
 */
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