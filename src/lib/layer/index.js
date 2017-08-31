import Template from './index.vue';

let instance;

const globalOptions = {
    show: true,
    mask: true,
    type: '',
    cssClass: {
        // 'is-loadingShow': true, 
        // 'is-loadingHide': false
    },
    style: {},
    duration: 3000
}

const Layer = function(message, options = {}){

    options.cssClass && 
    (globalOptions.cssClass[options.cssClass] = true) && 
    (options.cssClass = globalOptions.cssClass);

    options = {
        ...globalOptions,
        ...options
    };
    console.log(options);
    for(let key in options) {
        if(options.hasOwnProperty(key)) {
            instance.$data[key] = options[key];
        }
    }
    instance.$data.message = message;
    document.body.appendChild(instance.$mount().$el);
    if(options.duration !== 0) {
        setTimeout(() => {

        }, options.duration);
    }
}


const Success = function(message = '加载成功', options = {}){
    const SuccessOptions = {
        type: 'success',
        ...options
    }
    
    Layer(message, SuccessOptions);
}

const Fail = function(message = '加载失败', options = {}){
    const FailOptions = {
        type: 'fail',
        ...options
    }

    Layer(message, FailOptions);
}

const Offline = function(message = '网络连接失败', options = {}){
    const OfflineOptions = {
        type: 'offline',
        ...options
    }

    Layer(message, OfflineOptions);
}

const Loading = function(message = '加载中, 请稍候...', options = {}){
    const LoadingOptions = {
        type: 'loading',
        ...options,
        duration: 0
    }

    Layer(message, LoadingOptions);
}

const Dismiss = () => {
    instance.$data.show = false;
    instance.$data.cssClass['is-loadingShow'] = false;
    instance.$data.cssClass['is-loadingHide'] = true;
}


export default {
    install(Vue) {
        let Tpl = Vue.extend(Template);
        instance = new Tpl();
        Vue.prototype.$Toast.success = Success;
        Vue.prototype.$Toast.fail = Fail;
        Vue.prototype.$Toast.offline = Offline;
        Vue.prototype.$Toast.loading = Loading;
        Vue.prototype.$Toast.Dismiss = Dismiss;
    }
}
