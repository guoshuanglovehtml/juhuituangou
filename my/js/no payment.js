// 返回上一页
$(function(){
    $(".right").click(function(){
        history.go(-1);
        // console.log("xx")
    })
});

function homeData(that) {
    $.ajax({
        type:"get",
        url:"http://juhuituan.boguyuan.com/juhuituan/reqData?action=listOrd&acode=1&uid=25177&type=2",
        
        dataType:"json",
        async:false, 
        success:function (data) 
        {
            // console.log(data.data.items);
            that.list =data.data.items; 
        }
    });
}

var home = {
    template:"#home",
    data:function () 
    {
        return {
            test:"test",
            list:"",
            id:""
        }
    },
    created:function () 
    {   
        var that = this;
        homeData(this);
    },
    methods:{
        // 是否取消
        cancelForm:function (id) {
            $(".whetherDelect").show();
            this.id = id;
            // console.log(id);
        },
        // 不取消
        cancel:function (argument) {
            // body...
            $(".whetherDelect").hide();
        },
        // 确认取消
        sure:function () {
            $(".whetherDelect").hide();
            var id = this.id;
            var that = this;
            $.ajax({
                type:"post",
                url:"http://juhuituan.boguyuan.com/juhuituan/reqData?action=calOrd&acode=1&uid=25177&id="+id,
                dataType:"json",
                success:function (data) {
                    // body...
                    
                    homeData(that);
                    alert(data.msg);
                }
            });
        },
        // 去支付
        go_pay:function (id,inid,ti,fpri,num) {
            // body...
            // console.log(id);
            pay_id = id;
            inid = inid;
            pay_ti = ti;
            one_price = fpri;
            p_num = num;

            console.log(num)

            $(".my").text("确认支付");
        }

    },
    props:[] // 子组件
}

// pay
var pay_id,inid,pay_ti,one_price,p_num,all_price;
var pay = {
    template:"#pay",
    data:function (argument) {
        return {
            id:pay_id,
            inid:inid,

            ti:pay_ti,
            price:one_price,
            num:p_num,
            all_price:p_num*one_price
        }
    },
    created:function () {
    
    }
}

var router = new VueRouter({
    "routes" :[
        { path:"/", component: home},
        { path:"/pay", component: pay},

    ]
});

var app = new Vue({
    "router":router,
    data:"data",
    methods:{

    }
}).$mount('#app')