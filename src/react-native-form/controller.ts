type Subscriber = (data: any) => void;
type ID = string;

type State = {
  forms: Record<ID, HTMLFormElement>
  containers: Record<ID, HTMLDivElement>,
  subscribers: Record<ID, Subscriber[]> // hashmap
}

const _state: State = {
  forms: {},
  containers: {},
  subscribers: {}
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
    notifySubscribers(id)
}

const registerForm = (el: HTMLFormElement, id: string) => {
  if(!state.forms[id]){
    state.forms = {...state.forms, [id]: el};
    const onInput = el.oninput?.bind(el);
    const wrappedOnInput = (e: Event) => {
      onInput?.(e);
      updateFormContainer(id)
      console.log(e)
    }

    el.oninput = wrappedOnInput
  }
  updateFormContainer(id)
};

const registerFormContainer = (el: HTMLDivElement, id: string) => {
  if(!state.containers[id]){
    state.containers = {...state.containers, [id]: el};
  }
  updateFormContainer(id)
};

const extractFormData = (form: HTMLFormElement | null) => {
  if(!form){
    return {}
  }

  const data: Record<string, any> = {};

  const fields = Array.from(form.elements);
  fields.forEach((field) => {
    if(field.tagName === 'INPUT'){
      const inputField = field as unknown as HTMLInputElement;
      data[inputField.name] = {value: inputField.value}
    }
  })

  return data;
}

const subscribe = (id: ID, subscriber: Subscriber) => {
  if(!state.subscribers[id]){
    state.subscribers[id] = []
  }
  state.subscribers[id].push(subscriber);
}

const notifySubscribers = (id: ID) => {
  debugger
  const data = extractFormData(state.forms[id]);
  const subscribers = state.subscribers[id];

  if(!subscribers){
    return
  }

  state.subscribers[id].forEach(subscriber => subscriber(data))
}

export { state, registerForm, registerFormContainer, subscribe};
