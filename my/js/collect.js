// 返回上一页
$(function(){
    $(".right").click(function(){
        // history.go(-1);
    })
})

// 收藏 切换
$("#btn1").click(function () {
    // body...
    
});

$("#btn2").click(function () {
    // body...
    
})





function homeData(that) {
	$.ajax({
		type:"get",
		url:"http://juhuituan.boguyuan.com/juhuituan/reqData?action=listCollect&acode=1&uid=25177",
		dataType:"json",
		// async:false, 
		success:function (data) 
		{	
			// console.log(data.data.items);
			that.list = data.data.items;
			// console.log(that.list);
		}
	});
};

function detailsData(that,id) {
	// console.log(that );
	// console.log( id);

	$.ajax({
		type:"get",
		url:"http://juhuituan.boguyuan.com/juhuituan/reqData?action=viewOrd&acode=1&uid=25177&id="+id,
		// 订单详情viewOrd 
		// // 商品详情 viewPro 数量总价传过来   

		dataType:"json",
		// async:false, 
		success:function (data) 
		{	
			console.log(data.data);
			// that.data = data.data.items;
		},
		error:function (err) {
			// body...
			console.log(err)
		}
	});
}


var home = {
	template:"#home",
	data:function () {
		return{
			list:"",
			test:["rfgf","fgh"],
			id:""
		}
	},
	created:function (argument) {
		// body...  25177
		var that = this;
		homeData(this);
	},
	methods:{
		// body...
		delect:function (id) {
			
			var that = this;
			this.id = id;
			$(".whetherDelect").show();
			
		},
		cancel:function (argument) {
			// body...
			$(".whetherDelect").hide();
		},
		sure:function () {
			$(".whetherDelect").hide();
			var id = this.id;
			var that = this;
			$.ajax({
				type:"post",
				url:"http://juhuituan.boguyuan.com/juhuituan/reqData?action=delCollect&acode=1&uid=25177&id="+id,
				dataType:"json",
				success:function (data) {
					// body...
					
					homeData(that);
					alert(data.msg);
				}
			});
		},
		go_details:function (id) {
			// body...
			// console.log(id);
			// 
			de_id = id;
			// $(".my").text("团购详情");
		},
		btn1:function (argument) {
			$(".group").show();
    		$(".merchant").hide();

    		$("#btn1").css("border-bottom","2px solid #fd6600");
    		$("#btn2").css("border-bottom","#fff");
		},

		btn2:function (argument) {
			$(".group").hide();
    		$(".merchant").show();


    		$("#btn2").css("border-bottom","2px solid #fd6600");
    		$("#btn1").css("border-bottom","none");
		}

	}
};

var de_id;
var details = {
	template:"#details",
	data:function (argument) {
		return {
			data:""
		}
	},
	created:function (argument) {
		// console.log(xq_id);
		setTimeout(function () {
			// console.log(de_id);
			detailsData(this,de_id);
		},10);
	}
}

var router = new VueRouter({
  	"routes" :[
		{path:"/", component: home},
		{path:"/details",component:details}
	]
});

var app = new Vue({
  	"router":router,
  	data:"data",
  	methods:{

  	}
}).$mount('#app');