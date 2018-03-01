// 返回上一页
// $(function(){
//     $(".right").click(function(){
//         history.go(-1);
//         console.log("c")
//     })
// });


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
			url:"http://juhuituan.boguyuan.com/juhuituan/reqData?action=listOrd&acode=1&uid=25177&type=1",
			dataType:"json",
			async:false, 
			success:function (data) 
			{
				// console.log(data.data.items);
				that.list =data.data.items; 
			}
		});
	},
	methods:{
		go_details:function (id) {
			// body...
			// console.log(id);
			de_id = id;
		}

	},
	props:[] // 子组件
};

var de_id;
var details = {
	template:"#details",
	created:function () {
		// console.log(de_id);
		$.ajax({
			type:"get",
			url:"http://juhuituan.boguyuan.com/juhuituan/reqData?action=viewPro&acode=1&uid=25177&id="+de_id,
			// 商品详情 viewPro 数量总价传过来   订单详情 viewOrd 请求无效
			dataType:"json",
			async:false, 
			success:function (data) 
			{
				console.log(data.data);
				
			}
		});
	}
}


var router = new VueRouter({
  	"routes" :[
		{ path:"/", component: home},
		{ path:"/details", component: details}
	]
});

var app = new Vue({
  	"router":router,
  	data:"data",
  	methods:{

  	}
}).$mount('#app')