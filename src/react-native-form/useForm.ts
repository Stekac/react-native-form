import { RefCallback, useRef } from "react";
import { registerForm } from "./controller";

export default function useForm(id: string) {
  const ref = useRef<HTMLFormElement>();

  const refFn: RefCallback<HTMLFormElement> = (formRef) => {
    if(formRef){
      ref.current = formRef
      registerForm(formRef, id);
    }
  }

  return refFn;
}
