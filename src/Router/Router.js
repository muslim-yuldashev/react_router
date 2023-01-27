import { useEffect, useState } from "react";

const Router = ({ path, component: element }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener("navigate", onLocationChange);
        return () => window.removeEventListener("navigate", onLocationChange);
    }, []);
    return currentPath === path ? element() : null;
};

export default Router;