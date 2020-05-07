import { useEffect } from "react";


const useTitle = (title: string): string => {
    useEffect(() => {
        window.document.title = title;
    }, [title]);

    return title;
};


export default useTitle;