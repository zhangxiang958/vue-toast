<script>
    export default {
        data() {
            return {
                messages: [],
            }
        },
        methods: {
        }
    }
</script>
<template>
    <div class="toast">
        <transition-group 
            tag='div'
            name="toastShow"
        >
            <div class="toastMsg" 
                v-for="message in messages"
                :key="message.id"
                v-if="message.show"
                :class="message.cssClass"
                :style="message.style"
            >
                {{ message.content }}
            </div>
        </transition-group>
    </div>
</template>

<style scoped>
    .toast {
        position: fixed;
        bottom: 15%;
        left: 50%;
        transform: translateX(-50%);
        z-index: 999;
    }
    .toastMsg {
        margin-bottom: 5px;
        padding: 0 16px;
        width: auto;
        height: 32px;
        line-height: 32px;
        border-radius: 20px;
        background: rgba(0, 0, 0, 0.8);
        font-size: 14px;
        color: #fff;
        white-space: nowrap;
        transition: all 0.3s ease;
    }

    .toastShow-enter {
        opacity: 0;
        transition: all 0.3s ease;
    }

    .toastShow-enter-active {
        opacity: 0;
        transition: all 0.3s ease-out;
    }

    .toastShow-enter-to {
        opacity: 1;
    }

    .toastShow-leave-active {
        opacity: 1;
        transition: all 0.3s ease-out;
    }

    .toastShow-leave-to {
        transform: translateY(-100%);
        opacity: 0;
    }
</style>
