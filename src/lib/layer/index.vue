<script>
    export default {
        data() {
            return {
                show: false,
                mask: true,
                type: '',
                message: '',
                cssClass: {},
                style: {}
            }
        },
        methods: {
        }
    }
</script>
<template>
    <transition
        tag="div"
        name="layer"
    >
    <div 
         key="layer" 
         v-if="show">
        <div class="loadingMsg" 
            :class="cssClass"
            :style="style">
            <div class="success"
                v-if="type === 'success'">
                <div class="tick"></div>
            </div>
            <div class="fail"
                v-if="type === 'fail'">
                <div class="cross"></div>
            </div>
            <div class="offline"
                v-if="type === 'offline'">
            </div>
            <div class="loading-fake"
                v-if="type === 'loading'">
                <div class="loadingCircle circle1"></div>
                <div class="loadingCircle circle2"></div>
                <div class="loadingCircle circle3"></div>
                <div class="loadingCircle circle4"></div>
                <div class="loadingCircle circle5"></div>
                <div class="loadingCircle circle6"></div>
                <div class="loadingCircle circle7"></div>
                <div class="loadingCircle circle8"></div>
                <div class="loadingCircle circle9"></div>
                <div class="loadingCircle circle10"></div>
                <div class="loadingCircle circle11"></div>
                <div class="loadingCircle circle12"></div>
            </div>
            <div class="message">
                {{ message }}
            </div>
        </div>
        <div class="mask" v-if="mask" :class="{ 'is-loadingShow': show, 'is-loadingHide': !show }"></div>
    </div>
    </transition>
</template>

<style scoped>
    .mask {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 0;
    }
    .loadingMsg {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 16px;
        width: 30%;
        height: 20%;
        border-radius: 20px;
        background: rgba(0, 0, 0, 0.8);
        font-size: 14px;
        color: #fff;
        text-align: center;
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        transition: all 0.3s ease;
        z-index: 9999;
        overflow: hidden;
    }
    
    .message {
        position: absolute;
        left: 50%;
        bottom: 20%;
        max-width: 100%;
        transform: translateX(-50%);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .layer-enter {
        opacity: 0;
        transition: all 0.3s ease;
    }

    .layer-enter-active {
        opacity: 0;
        transition: all 0.3s ease-out;
    }

    .layer-enter-to {
        opacity: 1;
    }

    .layer-leave-active {
        opacity: 1;
        transition: all 0.3s ease-out;
    }

    .layer-leave-to {
        opacity: 0;
    }

    .success {
        margin: 15% auto;
        width: 40%;
        height: 35%;
        border: 1px solid #fff;
        border-radius: 50%;
    }

    .tick {
        margin: 15% auto;
        width: 25%;
        height: 55%;
        border: 1px solid #fff;
        border-top: 1px solid transparent;
        border-left: 1px solid transparent;
        transform: rotate(45deg);
    }

    .fail {
        margin: 15% auto;
        width: 40%;
        height: 35%;
        border: 1px solid #fff;
        border-radius: 50%;
    }

    .cross {
        position: relative;
        width: 100%;
        height: 100%;
        font-size: 2.5em;
        font-weight: 100;
    }
    .cross:after {
        content: "\2A2F";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .offline {
        display: inline-block;
        position: relative;
        margin: 0 auto;
        width: 70%;
        height: 65%;
        background: url('./font-371.png') no-repeat;
        background-size: 100%;
    }

    .loading-fake {
        position: relative;
        margin: 20% auto;
        width: 40%;
        height: 40%;
        box-sizing: border-box;
    }

    .loadingCircle {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }

    .loadingCircle:before {
        content: '';
        display: block;
        margin: 0 auto;
        width: 10%;
        height: 10%;
        background: #fff;
        border-radius: 50%;
        animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
    }

    .circle1 {
        transform: rotate(0deg);
    }
    .circle2 {
        transform: rotate(30deg);
    }
    .circle3 {
        transform: rotate(60deg);
    }
    .circle4 {
        transform: rotate(90deg);
    }
    .circle5 {
        transform: rotate(120deg);
    }
    .circle6 {
        transform: rotate(150deg);
    }
    .circle7 {
        transform: rotate(180deg);
    }
    .circle8 {
        transform: rotate(210deg);
    }
    .circle9 {
        transform: rotate(240deg);
    }
    .circle10 {
        transform: rotate(270deg);
    }
    .circle11 {
        transform: rotate(300deg);
    }
    .circle12 {
        transform: rotate(330deg);
    }

    .loading-fake .circle2:before {animation-delay: -1.1s; }
    .loading-fake .circle3:before {animation-delay: -1.0s; }
    .loading-fake .circle4:before {animation-delay: -0.9s; }
    .loading-fake .circle5:before {animation-delay: -0.8s; }
    .loading-fake .circle6:before {animation-delay: -0.7s; }
    .loading-fake .circle7:before {animation-delay: -0.6s; }
    .loading-fake .circle8:before {animation-delay: -0.5s; }
    .loading-fake .circle9:before {animation-delay: -0.4s; }
    .loading-fake .circle10:before {animation-delay: -0.3s; }
    .loading-fake .circle11:before {animation-delay: -0.2s; }
    .loading-fake .circle12:before {animation-delay: -0.1s; }

    @-webkit-keyframes sk-circleFadeDelay {
        0%, 39%, 100% { 
            opacity: 0; 
        }
        40% { 
            opacity: 1; 
        }
    }
    @keyframes sk-circleFadeDelay {
        0%, 39%, 100% { 
            opacity: 0; 
        }
        40% { 
            opacity: 1; 
        } 
    }
</style>
