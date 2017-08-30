import Template from './index.vue';

let instance;
let id = 0;
const globalOptions = {
    show: true,
    cssClass: {},
    style: {},
    position: 'middle',
    duration: 3000
}

const Toast = (message, options = {}) => {

    options.cssClass && 
    (globalOptions.cssClass[options.cssClass] = true) && 
    (options.cssClass = {
        ...globalOptions.cssClass
    });

    options = {
        id: id ++,
        content: message,
        ...globalOptions,
        ...options,
        onRemove: () => {
            let i = instance.$data.messages.findIndex((item) => { return item.id === options.id });
            options.show = false;
            instance.$data.messages.splice(i, 1);
        }
    };

    moveToast(instance.$data.messages);
    instance.$data.messages.push(options);
    console.log(instance.$data.messages);
    
    setTimeout(() => {
        options.onRemove();
    }, options.duration);
}

const moveToast = (toasts) => {
    let length = toasts.length;
    toasts.forEach((item, idx) => {
        let value;
        value = `translateY(-${(length - 1 - idx) * 100}%);`;
        item.style['transform'] = value;
    });
}

export default {
    install(Vue) {
        let Tpl = Vue.extend(Template);
        instance = new Tpl();
        Vue.prototype.$Toast = Toast;
        document.body.appendChild(instance.$mount().$el);
    }
}
