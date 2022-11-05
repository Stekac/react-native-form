import { useRef } from "react";

const RerenderCounter = ({name}: {name?: string}) => {
    const counter = useRef(0);
    
    counter.current++;

    return <div>Renders {name}: {counter.current}</div>
}
 
export default RerenderCounter;