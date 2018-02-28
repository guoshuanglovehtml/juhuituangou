// 返回上一页
$(function(){
    $(".right").click(function(){
        history.go(-1);
        console.log("xx")
    })
})

var home = {
    template:"#home",
    data:function () 
    {
        return {
            test:"test",
            list:""
        }
    },
    created:function () 
    {   
        var that = this;
        $.ajax({
            type:"get",
            url:"http://juhuituan.boguyuan.com/juhuituan/reqData?action=listOrd&acode=1&uid=25177&type=2",
            
            dataType:"json",
            async:false, 
            success:function (data) 
            {
                console.log(data.data.items);
                that.list =data.data.items; 
            }
        });
    },
    methods:{},
    props:[] // 子组件
}



var router = new VueRouter({
    "routes" :[
        { path:"/", component: home}
    ]
});

var app = new Vue({
    "router":router,
    data:"data",
    methods:{

    }
}).$mount('#app')