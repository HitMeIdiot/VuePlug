//toast组件
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
        }
    }
});
function toaFun(item) {
    console.log(typeof item)
    if (typeof item === 'string' || typeof item === 'number' ) {
        vm.toastText = item;
        console.log(1)
    } else if (typeof item == 'undefined' || item ===null) {
        vm.toastText = '这不是演习';
        console.log(2)
    } else {
        console.log(3)
        vm.site = item.position;
        vm.toastText = item.text;
    }
    vm.$refs.sonMet.fade();
}