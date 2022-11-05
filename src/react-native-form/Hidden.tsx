import { RefCallback, useRef } from "react";
import { registerFormContainer } from "./controller";

type Props = {
    id: string
}

const Hidden = ({id}: Props) => {
    const ref = useRef<HTMLDivElement>();

    const refFn: RefCallback<HTMLDivElement> = (hiddenRef) => {
      if(hiddenRef){
        ref.current = hiddenRef
        registerFormContainer(hiddenRef, id);
      }
    }

    return <div ref={refFn} id={`form-container-for-${id}`}></div>
}
 
export default Hidden;