import Template from './index.vue';
import Layer    from './layer';

let instance;
let id = 0;
const globalOptions = {
    show: true,
    cssClass: {},
    style: {},
    position: 'middle',
    duration: 3000
}

const moveToast = (toasts) => {
    let length = toasts.length;
    toasts.forEach((item, idx) => {
        let value;
        value = `translateY(-${(length - 1 - idx) * 100}%);`;
        item.style['transform'] = value;
    });
}


const Toast = (message, options = {}) => {
    if(!message) {
        console.error('[vue-toast]: message is empty, please input your message.');
        return;
    }
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

export default {
    install(Vue) {
        let Tpl = Vue.extend(Template);
        instance = new Tpl();
        Vue.prototype.$Toast = Toast;
        Layer.install(Vue);
        document.body.appendChild(instance.$mount().$el);
    }
}
