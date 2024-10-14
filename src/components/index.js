import fsyButton from "./fsy-button/index.vue";
import fsyHelloWorld from "./fsy-hello-world/index.vue";

const components = {
    fsyButton,
    fsyHelloWorld,
};

function install(Vue) {
  const keys = Object.keys(components);
  keys.forEach((name) => {
    const component = components[name];
    Vue.component(component.name || name, component);
  });
}

export default {
  install,
  ...components,
};
