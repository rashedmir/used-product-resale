import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(()=>{
        document.title = `${title} - Trash2Treasure`
    },[title])
};

export default useTitle;