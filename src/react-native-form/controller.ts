type State = {
  forms: Record<string, HTMLFormElement>
  containers: Record<string, HTMLDivElement>
}

const _state: State = {
  forms: {},
  containers: {}
};

const state = new Proxy(_state, {
  get(target, prop, receiver) {
    console.log("get", target, prop, receiver);
    return Reflect.get(target, prop, receiver);
  },
  set(obj, prop, value) {
    console.log("set", obj, prop, value);
    return Reflect.set(obj, prop, value);
  }
});

const updateFormContainer = (id: string) => {
    debugger;
    const form = state.forms[id];
    const container = state.containers[id];

    if(!form || !container){
      return;
    }

    // probably better way
    container.innerHTML = '';
    Array.from(form.elements).forEach(element => {
      container.appendChild(element.cloneNode())
    })
}

const registerForm = (el: HTMLFormElement, id: string) => {
  if(!state.forms[id]){
    state.forms = {...state.forms, [id]: el};
    el.addEventListener('input', (ev) => {console.log('2' ,ev)})
  }
  updateFormContainer(id)
};

const registerFormContainer = (el: HTMLDivElement, id: string) => {
  if(!state.containers[id]){
    state.containers = {...state.containers, [id]: el};
  }
  updateFormContainer(id)
};

export { state, registerForm, registerFormContainer};
