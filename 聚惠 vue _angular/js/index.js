window.onload = function () 
{
	// 一 
	var vue = new Vue(
	{   
		// 1
		el:"#app",


		// 数据 2
		data:{data:""},


		// 3 data 之后
		created:function () 
		{
			var that = this;
			// 链接 一 二

			// 二
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function () 
			{
				if (xhr.readyState==4) 
				{
					// console.log(xhr.responseText);
					            // json字符串 转为json   反之 stringify
					that.data = JSON.parse(xhr.responseText).data;
					// console.log(that);
				}
			};

			// 三
			// 1、                                                             异步
			xhr.open("POST","http://juhuituan.boguyuan.com/juhuituan/reqData?",true);

			// 2、POST 请求头
			xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

			// 参数
			xhr.send("action=listPro&acode=1&uid=25177&type=1");
		},

		methods:{
			clickIndex (Index) 
			{
				// console.log(Index);

				var xhr = new XMLHttpRequest();
				xhr.onreadystatechange = function () 
				{
					if (xhr.readyState==4) 
					{
						datas = JSON.parse(xhr.responseText).data;
						console.log(datas);
					}
				};

				xhr.open("POST","http://juhuituan.boguyuan.com/juhuituan/reqData?",true);

				xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

				xhr.send("action=viewPro&acode=1&uid=25177&id=" +Index);
			}
		}

	});

}


