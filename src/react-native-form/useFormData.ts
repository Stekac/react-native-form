import { useEffect, useState } from "react";
import { subscribe } from "./controller";


export default function useFormData(id: string) {
    const [data, setData] = useState()

    useEffect(() => {
        subscribe(id, (data) => {
            setData(data)
        })
    }, [])

    return data;
}