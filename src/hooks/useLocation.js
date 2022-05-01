import axios from "axios";
import { useState, useEffect } from "react";

/**
 * this hook is to fetch the location details of a character for modal view.
 * @param {Object} - character
 * @return {Array} - location object at index 0
 */
export const useLocation = (character) => {
    const [location, setLocation] = useState({});

    useEffect(() => {
        (async () => {
            if (character.location.url) {
                try {
                    const response = await axios.get(character.location.url);
                    setLocation(response.data);
                } catch (e) {
                    console.log(e);
                }
            }
        })();
    }, []);

    return [location]
};