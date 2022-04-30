import axios from "axios";
import { useState, useEffect } from "react";

export const useLocation = (character) => {
    const [location, setLocation] = useState({});

    useEffect(() => {
        (async () => {
            if (character.location.url) {
                const response = await axios.get(character.location.url);
                setLocation(response.data);
            }
        })();
    }, [])

    return [location]
}