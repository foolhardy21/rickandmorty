import axios from "axios";
import { useState, useEffect } from "react";

/**
 * this hook is to fetch the origin details of a character for modal view.
 * @param {Object} - character
 * @return {Array} - origin object at index 0
 */
export const useOrigin = (character) => {
    const [origin, setOrigin] = useState({});

    useEffect(() => {
        (async () => {
            if (character.origin.url) {
                try {
                    const response = await axios.get(character.origin.url);
                    setOrigin(response.data);
                } catch (e) {
                    console.log(e);
                }
            }
        })();
    }, []);

    return [origin]
};