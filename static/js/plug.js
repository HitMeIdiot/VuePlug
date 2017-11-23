//  toast组件
Vue.component('v-toast', {
    template: `<transition name="out">
            <div class="toast" v-show="flag">
                <div :class="[site,'m_con']">
                    <p>{{text}}</p>
                </div>
            </div>
        </transition>`,
    data: function () {
        return {
            flag: false
        }
    },
    props: {
        site: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: '欢迎光临'
        }
    },
    created: function () {
    },
    methods: {
        fade: function () {
            this.flag = true;
            // ES6中，箭头函数的this，规定的指向定义这个箭头函数所在的那个函数
            setTimeout(() => {
                this.flag = false;
            }, 800);
            // let that = this;
            // setTimeout(function() {
            //     that.flag = false;
            // },800)
        },
    }
});
function Toast(item) {
    // console.log(typeof item)
    if (typeof item === 'string' || typeof item === 'number') {
        vm.text = item;
        // console.log(1)
    } else if (typeof item == 'undefined' || item === null) {
        vm.text = '这不是演习';
        vm.site = ''
        // console.log(2)
    } else {
        // console.log(3)
        vm.site = item.site;
        vm.text = item.text;
    }
    vm.$refs.sonMet.fade();
};

//  confirm 组件
Vue.component('v-confirm', {
    template: `<transition name="out">
        <div class="confirm"  v-show="flag" >
            <div class="m_over"@tap="flag = false"></div>
            <div class="m_con">
                <div class="m_head">{{contitle}}</div>
                <div class="m_body">
                    <slot> 
                        
                    </slot>        
                </div>
                <div class="m_foot" >
                    <span @tap="flag=false" v-if="contype==='1'">取消</span>
                    <span @tap="conFun">确定</span>
                </div>
            </div>
        </div>
    </transition>`,
    data: function () {
        return {
            flag: false
        }
    },
    props: {
        contitle: {
            type: String,
            default: '操作提示'
        },
        contype: {
            type: String,
            default: '1'
        },
    },
    created: function () {
    },
    methods: {
        conFade: function () {
            this.flag = true;
        },
        conFun: function () {
            // if (this.contype === '1') {
            this.$emit('con', '转过来');
            // }
            this.flag = false;
        }
    }
});

// popup组件
Vue.component('v-popup', {
    template: `<div class="popup" v-show="flags">
        <div @tap="close" class="popup_over"></div>
        <div :class="[flag ? 'active' : 'unactive', 'popup_con']">
            <slot></slot>
        </div>
    </div>`,
    data: function () {
        return {
            flag: false,
            flags: false,
            html: null
        }
    },
    props: {
        height: {
            type: String,
            default: '400px'
        }
    },
    created: function () {

    },
    mounted: function () {
        this.html = document.getElementsByTagName("html")[0];
        if (this.height) {
            document.getElementsByClassName("popup_con")[0].style.height = this.height;
        }
    },
    methods: {
        popFade: function () {
            this.flags = true;
            this.flag = true;
            this.html.style.overflowY = "hidden";
            this.html.style.position = "fixed";
        },
        close: function () {
            this.flag = false;
            setTimeout(() => {
                this.flags = false;
            }, 350);
            this.html.style.overflowY = "scroll";
            this.html.style.position = "static";
        }
    }
});

// popup组件
Vue.component('v-picker', {
    template: `<div class="picker">
        <slot></slot>
    </div>`,
    data: function () {
        return {
        }
    },
    props: {
    },
    created: function () {
    },
    methods: {
        pickerFade: function () {
            alert(111)
        },
        close: function () {
        }
    }
});

// loading组件
Vue.component('v-load', {
    template: `<transition name="out"><div class="loading" v-show="loadFlag">
    <div class='m_over'></div>
    <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    </div></div></transition>`,
    data: function () {
        return {
            loadFlag: false
        }
    },
    props: {
    },
    created: function () {
    },
    methods: {
        loadUp: function () {
            this.loadFlag = true;
        },
        loadDown: function () {
            this.loadFlag = false;
        },
    }
});