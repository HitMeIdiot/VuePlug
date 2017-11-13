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
        <div class="confirm" v-show="flag" @tap="flag = false">
            <div class="m_con">
                <div class="m_head">{{contitle}}</div>
                <div class="m_body">
                    <slot name="conText"> 
                        
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