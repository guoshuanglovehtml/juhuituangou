// console.log("fgb");
// var collect = "collect";
// var collectArr = JSON.parse(window.localStorage.getItem(collect));
// console.log(collectArr);

var app = new Vue({
	el:"#app",
	data:{
		banner:""
	},
	created:function (argument) {
		// body...  25177
		$.ajax({
			type:"get",
			url:"http://juhuituan.boguyuan.com/juhuituan/reqData?action=listCollect&acode=1&uid=25177",
			dataType:"json",
			success:function (data) 
			{
				console.log(data.data.items);
				
				// this.banner = data.data.items;

			}
		});
	},
	methods:{
		// body...
	}
});
