import axios from "axios";
import { useState, useEffect } from "react";

export const useOrigin = (character) => {
    const [origin, setOrigin] = useState({});

    useEffect(() => {
        (async () => {
            if (character.origin.url) {
                const response = await axios.get(character.origin.url);
                setOrigin(response.data);
            }
        })();
    }, []);

    return [origin]
}