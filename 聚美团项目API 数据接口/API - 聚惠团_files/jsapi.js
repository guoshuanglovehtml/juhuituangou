/**
* API接口定义
* 服务器，接口方法，接口参数及说明，测试数据，
*/
var bxsAPI = {};
bxsAPI.local = location.toString().indexOf("guyuan.com")>-1?0:1;
bxsAPI.apis = [];
bxsAPI.server = location.toString().split("/api")[0];

//bxsAPI.uid = bxsAPI.local?"22433":"22391";
//bxsAPI.uid = bxsAPI.local?"22408":"22408";
bxsAPI.uid = bxsAPI.local?"22285":"22285";
//bxsAPI.un = "13212345678";
bxsAPI.un = "15012345678";

//API最新版本号，更新需要调整版本号，并更新下面的记录
bxsAPI.version = "v1.6";
bxsAPI.updated = [
	{
		ver:"v1.1",
		dt:"2014-10-29",
		con:[
			"1.全部类型接口<a href='#/reqData?action=allCate'>全部类型</a>接口"
		]
		
	},
	{
		ver:"v1.2",
		dt:"2014-11-07",
		con:[
			"1.更新首页广告条接口<a href='#/reqData?action=listCate'>链接类型lnkType有三种情况</a>"
		]
		
	},
	{
		ver:"<strong>v1.3</strong><new> [新增功能]</new>",
		dt:"2015-01-23",
		con:[
			"<redlight>v1.3新增 <strong>商家栏目</strong> 功能更新，新增商家部分功能跟原来团购功能没有直接关系，都是新增接口，请注意</redlight>，<a href='#/reqData?action=sellerMainFocus'>[直达新增接口]</a>"
		]
		
	},
	{
		ver:"<strong>v1.5</strong><new> [新增功能]</new>",
		dt:"2015-03-18",
		con:[
			"<redlight>v1.5新增 <strong>启动页广告和首页弹出广告，商家收藏中增加商家名称字段[sellerName]</strong></redlight>，<a href='#/reqData?action=launchAd'>[直达新增接口]</a>"
		]
		
	},
	{
		ver:"<strong>v1.6</strong><new> [新增银联支付]</new>",
		dt:"2015-06-10",
		con:[
			
		]
		
	}
	
];


/**
 * 接口模块定义
 * 主要用于分类接口，看起来更清楚
 */
bxsAPI.apicates = [//api模块
	{cid:1,name:"<font color='green'>登录注册</font>"},
	{cid:2,name:"<font color='green'>信息管理</font>"},
//	{cid:12,name:"文件上传"},
//	{cid:6,name:"广告赚分"},
	{cid:3,name:"<font color='green'>订单相关</font>"},
//	{cid:13,name:"好运来"},
//	{cid:14,name:"益智生肖"},
	{cid:5,name:"<font color='green'>我的</font>"},
	{cid:6,name:"<font color='green'>商家版</font>"},
	{cid:15,name:"<font color='green'>更多</font>"},
	{cid:16,name:"商家栏目 <new>[新增功能][<a href='info/juhuituan_new.png' target='_blank'>功能图</a>]</new>"}
];

/**
 * 接口定义
 * 直接拷贝一个push方法，修改新接口相应信息
 */
//------登录注册----------------------
bxsAPI.apis.push({
	name:"注册",
	method:"/loginApp?action=reg",
	cid:1,
	params:{
		acode:"*固定参数acode=1",
		un:"*用户名",
		pwd:"*密码",
		mcode:"*手机短信验证码"
	},
	desc:"手机号+短信验证注册，邀请码可以选择填写",
	test:"acode=1&un="+bxsAPI.un+"&pwd=111111&mcode=123456"
});
bxsAPI.apis.push({
	name:"发送验证码",
	method:"/smsApp?action=sendCode",
	cid:1,
	params:{
		acode:"*固定参数acode=1",
		un:"*用户名",
		loginType:"*loginType = 1 第三方发送验证，null 注册APP用户",
		type:"type=1用于注册接口，type=2用于忘记密码接口和提交订单获处"
	},
	desc:"",
	test:""
});
bxsAPI.apis.push({
	name:"登录",
	method:"/loginApp?action=login",
	cid:1,
	params:{
		acode:"*固定参数acode=1",
		un:"*用户名",
		pwd:"*密码"
	},
	desc:"",
	test:"acode=1&un="+bxsAPI.un+"&pwd=123456"
});
bxsAPI.apis.push({
	name:"修改密码",
	method:"/loginApp?action=pwd",
	cid:1,
	params:{
		acode:"*固定参数acode=1",
		uid:"*用户id",
		pwd:"*密码",
		repwd:"*重复密码"
	},
	desc:"",
	test:"acode=1&uid="+bxsAPI.uid+"&pwd=123456&repwd=123458"
});
bxsAPI.apis.push({
	name:"注销登录",
	method:"/loginApp?action=logout",
	cid:1,
	params:{
		acode:"*固定参数acode=1",
		uid:"*用户id"
	},
	desc:"",
	test:"acode=1&uid="+bxsAPI.uid
});
bxsAPI.apis.push({
	name:"第三方登录",
	method:"/loginThreeApp?action=login",
	cid:1,
	params:{
		nickname:"*用户名",
		profileImage:"*头像地址",
		uid:"*第三方平台的用户ID",
		loginType:"*1 QQ 2 微博"
	},
	desc:"",
	test:"nickname="+bxsAPI.un+"&profileImage=images/mantis_logo.png&uid=55555"
});
bxsAPI.apis.push({
	name:"绑定手机号",
	method:"/loginApp?action=bindTele",
	cid:1,
	params:{
		acode:"*固定参数acode=1",
		un:"*用户名",
		telephone:"*绑定手机号",
		mcode:"*输入的验证码",
	},
	desc:"",
	test:"acode=1&un="+bxsAPI.un+"&telephone=1501111111&mcode=55555"
});

bxsAPI.apis.push({
	name:"三方登录控制 <new>[新增v20150501]</new>",
	method:"/loginApp?action=thirdSwitch",
	cid:1,
	params:{
		acode:"*固定参数acode=1",
	},
	desc:"0表示关闭(默认) 1表示打开",
	test:"acode=1"
});

//-----2商品信息------------------------------------
bxsAPI.apis.push({
	name:"轮播列表",
	desc:"",
	method:"/reqData?action=listFocusAd",
	cid:2,
	params:{
		acode:"*固定参数acode=1",
		uid:"用户id"
	},
	test:"acode=1&uid="+bxsAPI.uid
});
bxsAPI.apis.push({
	name:"分类列表",
	desc:"分类列表统一接口，由type决定显示分类级别<br>"+
		"<strong>【adItems】数组是首页两个广告条，有三个种类型：<br>" +
		"lnkType=1链接网页app内打开lnk字段；<br>"+
		"lnkType=2链接单个商品详情，打开lnkId;<br>"+
		"lnkType=3链接二级分类列表,打开lnkId(二级分类id)，lnkCateId(父类id)，同：热买(顶部的分类和排序不要)<br><strong>",
	method:"/reqData?action=listCate",
	cid:2,
	params:{
		acode:"*固定参数acode=1",
		uid:"用户id",
		type:"*类型：1 父类型（首页类型） 2子类型 3 父类型下面的子类型，父类就是首页类型 4 商品列表（首页类型） ",
		id:"分类的ID(type为3，需要加上参数id（父类）)"
	},
	testData:[
	  		{ti:"首页类型：",test:"acode=1&uid="+bxsAPI.uid+"&type=1"},
	  		{ti:"商品列表（首页类型）：",test:"acode=1&uid="+bxsAPI.uid+"&type=4"},
	  		{ti:"子类型：",test:"acode=1&uid="+bxsAPI.uid+"&type=2"},
	  		{ti:"父类型下面的子类型：",test:"acode=1&uid="+bxsAPI.uid+"&type=3&id=12"}
	  	]
});
bxsAPI.apis.push({
	name:"全部类型列表",
	desc:"首页八大类型的状态：type = 1 （更多）",
	method:"/reqData?action=allCate",
	cid:2,
	params:{
		acode:"*固定参数acode=1"
	},
	test:"acode=1&uid="+bxsAPI.uid
});
bxsAPI.apis.push({
	name:"商品列表",
	desc:"返回参数:person 人数,deduc 推广标题，color 推广自体颜色, ",
	method:"/reqData?action=listPro",
	cid:2,
	params:{
		acode:"*固定参数acode=1",
		uid:"*用户id",
		type:"类型：1 首页全部商品2 父类型商品3 子类商品列表4 热卖商品",
		id:"分类ID （type =2 :首页下面的类型下的商品，id是子类下的商品分类）",
		pgnm:"页码（默认是第一页，第二页开始传参数）"
	},
	testData:[
		{ti:"首页商品：",test:"acode=1&uid="+bxsAPI.uid+"&type=1"},
		{ti:"父类类型商品（id(父类型ID)）：",test:"acode=1&uid="+bxsAPI.uid+"&type=2&id=12"},
		{ti:"子类型商品（id(子类型ID)）：",test:"acode=1&uid="+bxsAPI.uid+"&type=3&id=122"},
		{ti:"热卖商品：",test:"acode=1&uid="+bxsAPI.uid+"&type=4"}
//		{ti:"商品中介：",test:"acode=1&uid="+bxsAPI.uid+"&type=2&id=19"},
//		{ti:"便民服务：",test:"acode=1&uid="+bxsAPI.uid+"&type=2&id=98"},
//		{ti:"积分兑换：",test:"acode=1&uid="+bxsAPI.uid+"&type=2&id=13"}
		
	]
});
bxsAPI.apis.push({
	name:"商品排序",
	desc:"",
	method:"/reqData?action=ordPro",
	cid:2,
	params:{
		acode:"*固定参数acode=1",
		uid:"*用户id",
		id:"*分类id",
		inid:"首页的子类型ID",
		ord:"*排序类型：0 默认排序 ，2 销量最高 ,3 价格最低 ，4 价格最高"
		
	},
	test:"acode=1&uid="+bxsAPI.uid+"&id=12&ord=0"
});
bxsAPI.apis.push({
	name:"商品详情",
	desc:"",
	method:"/reqData?action=viewPro",
	cid:2,
	params:{
		acode:"*固定参数acode=1",
		uid:"用户id",
		id:"*商品id",
	},
	test:"acode=1&uid="+bxsAPI.uid+"&id=121"
});
bxsAPI.apis.push({
	name:"商品搜索",
	desc:"",
	method:"/reqData?action=search",
	cid:2,
	params:{
		acode:"*固定参数acode=1",
		con:"搜索内容",
		pgnm:"*页码（默认是第一页，第二页开始传参数）"
	},
	test:"acode=1&con=美酒"
});
bxsAPI.apis.push({
	name:"启动广告<new title='cuisy.20150317'>[新增]</new>",
	desc:"启动页之后调用此接口，后台可设置开关，全屏展示，一张广告。<redlight>[显示3秒后自动关闭并进入首页]</redlight>",
	method:"/reqData?action=launchAd",
	cid:2,
	params:{
		acode:"<require>[必选]</require>固定参数acode=1",
		adType:"<optional>[测试可选]</optional>仅用于App端测试数据用，默认为0",
		openFlag:"<optional>[测试可选]</optional>仅用于App端测试数据用，默认为1"
	},
	testData:[
	  		{ti:"正常：",test:"acode=1"},
	  		{ti:"传递参数测试：",test:"acode=1&adType=1&openFlag=1"},
	  	],
	returns:{
		code:"状态值",
		msg:"提示",
		data:"返回的数据对象",
		openFlag:"<parent>[data]</parent>广告开关 <bluelight>[0=关闭,1=打开]</bluelight>",
		adType:"<parent>[data]</parent>广告链接类型 <bluelight>[0=无链接，1=网页地址，2=产品详情,3=商家详情]</bluelight>",
		adUrl:"<parent>[data]</parent>广告实体(网页中包含图片)",
		linkUrl:"<parent>[data]</parent><optional>[adType关联][adType=1时返回]</optional>",
		productId:"<parent>[data]</parent><optional>[adType关联][adType=2时返回]</optional>",
		sellerId:"<parent>[data]</parent><optional>[adType关联][adType=3时返回]</optional><new>[新增]</new>"
	}
});
bxsAPI.apis.push({
	name:"启动首页广告<new title='cuisy.20150317'>[新增]</new>",
	desc:"进入首页后，在其他方法调用完后再调用此接口，后台可设置开关，窗口居中展示，一张图片广告。<redlight>[手动关闭并进入首页]</redlight>",
	method:"/reqData?action=launchHomeAd",
	cid:2,
	params:{
		acode:"<require>[必选]</require>固定参数acode=1",
		adType:"<optional>[测试可选]</optional>仅用于App端测试数据用，默认为0",
		openFlag:"<optional>[测试可选]</optional>仅用于App端测试数据用，默认为1"
	},
	testData:[
	  		{ti:"正常：",test:"acode=1"},
	  		{ti:"传递参数测试：",test:"acode=1&adType=1&openFlag=1"},
	  	],
	returns:{
		code:"状态值",
		msg:"提示",
		data:"返回的数据对象",
		openFlag:"<parent>[data]</parent>广告开关 <bluelight>[0=关闭,1=打开]</bluelight>",
		adType:"<parent>[data]</parent>广告链接类型 <bluelight>[0=无链接，1=网页地址，2=产品详情,3=商家详情]</bluelight>",
		adImgUrl:"<parent>[data]</parent>广告图上绝对地址 <bluelight>[宽/高=1.5][480x320]</bluelight>",
		linkUrl:"<parent>[data]</parent><optional>[adType关联][adType=1时返回]</optional>",
		productId:"<parent>[data]</parent><optional>[adType关联][adType=2时返回]</optional>",
		sellerId:"<parent>[data]</parent><optional>[adType关联][adType=3时返回]</optional><new>[新增]</new>"
	}
});

//-----订单相关-------------------------
bxsAPI.apis.push({
	name:"订单列表",
	desc:"",
	method:"/reqData?action=listOrd",
	cid:3,
	params:{
		acode:"*固定参数acode=1",
		uid:"*用户id",
		type:"*类型：1 全部账单 2 待付款 3 待使用 4 待评价 ",
		pgnm:"页码（默认是第一页，第二页开始传参数）"
	},
	test:"acode=1&uid="+bxsAPI.uid+"&type=1"
});
bxsAPI.apis.push({
	name:"订单详情",
	desc:"",
	method:"/reqData?action=viewOrd",
	cid:3,
	params:{
		acode:"*固定参数acode=1",
		uid:"*用户id",
		id:"*订单id"
	},
	  test:"acode=1&uid="+bxsAPI.uid+"&id=744"
});
bxsAPI.apis.push({
	name:"订单提交",
	desc:"",
	method:"/reqData?action=addOrd",
	cid:3,
	params:{
		acode:"*固定参数acode=1",
		uid:"*用户id",
		id:"商品id",
		zpri:"购买总金额",
		num:"购买数量"
	},
	test:""
});
bxsAPI.apis.push({
	name:"订单支付<update>更新v1.6</update>",
	desc:"",
	method:"/reqData?action=payOrd",
	cid:3,
	params:{
		acode:"*固定参数acode=1",
		uid:"*用户id",
		id:"订单id",
		type:"类型 1 支付宝支付 2 银联支付 <!--3 翼支付-->",
		moy:"金额"
	},
	test:"acode=1&uid="+bxsAPI.uid+"&id=744&type=1&moy=100",
	returns:{
		code:"状态值",
		msg:"提示",
		data:"返回的数据",
		obj:"<parent>[data]</parent>基本的订单需要信息",
		
		pid:"<parent>[data.obj]</parent>商户合作id",
		key:"<parent>[data.obj]</parent>商户密钥",
		notifyurl:"<parent>[data]</parent>异步回调地址",
		
		"-":"下面是新增银联支付返回值",
		unionpayObj:"<parent>[data]</parent><redlight>银联信息</redlight><update>新增v1.6</update>",
		orderId:"<parent>[data.alipayObj]</parent>系统订单ID<update>新增v1.6</update>",
		respCode:"<parent>[data.alipayObj]</parent>生<update>新增v1.6</update>成流水单号码 00表示成功<update>新增v1.6</update>",
		tn:"<parent>[data.alipayObj]</parent>流水单号",
		txnTime:"<parent>[data.alipayObj]</parent>交易时间<update>新增v1.6</update>"
	}
});
bxsAPI.apis.push({
	name:"订单支付回调",
	desc:"",
	method:"/reqData?action=payOrdCallback",
	cid:3,
	params:{
		acode:"*固定参数acode=1",
		uid:"*用户id",
		id:"*订单id",
		stat:"*状态：1 支付成功 0 支付失败",
		zpri:"*用户支付的总金额"
	},
	test:""
});
//bxsAPI.apis.push({
//	name:"确认支付（订单详情进入）",
//	desc:"",
//	method:"/reqData?action=viewPay",
//	cid:3,
//	params:{
//		acode:"*固定参数acode=1",
//		uid:"*用户id",
//		id:"订单id",
//	},
//	test:"acode=1&uid="+bxsAPI.uid+"&id=183"
//});
bxsAPI.apis.push({
	name:"订单数量（待付款，待使用，待评价）",
	desc:"",
	method:"/reqData?action=conOrd",
	cid:3,
	params:{
		acode:"*固定参数acode=1",
		uid:"*用户id"
	},
	test:"acode=1&uid="+bxsAPI.uid
});
bxsAPI.apis.push({
	name:"取消订单",
	desc:"",
	method:"/reqData?action=calOrd",
	cid:3,
	params:{
		acode:"*固定参数acode=1",
		uid:"*用户id",
		id:"订单id"
	},
	test:"acode=1&uid="+bxsAPI.uid+"&id=746"
});
bxsAPI.apis.push({
	name:"评价列表",
	desc:"",
	method:"/reqData?action=listComment",
	cid:3,
	params:{
		acode:"*固定参数acode=1",
		id:"*商品id",
		type:"*类型： type =1  最多显示5条数据  ， type = 2 显示全部   ",
		pgnm:"页码（默认是第一页，第二页开始传参数）"
	},
	test:"acode=1&id=408&type=1"
});
bxsAPI.apis.push({
	name:"评价提交",
	desc:"",
	method:"/reqData?action=addComment",
	cid:3,
	params:{
		acode:"*固定参数acode=1",
		uid:"*用户id",
		id:"*商品id",
		inid:"订单评价需要传订单ID",
		star:"星星评价数量，半个星星为0.5",
		con:"评价内容",
		imgurl:"*图片地址，多个图片用英文逗号分开"
	},
	test:"acode=1&uid="+bxsAPI.uid+"&id=727&star=5&con=good&inid=1025"
});
//---------------文件上传--------------
bxsAPI.apis.push({
	name:"上传文件",
	desc:"app数据文件上传，通过post方式上传--demo",
	cid:3,
	method:"/upData?action=upfile",
	params:{
		uid:"*用户id"
	},
	test:"uid="+bxsAPI.uid+"&id=1",
	testForm:"<form method='post' target='_blank' enctype='multipart/form-data' action='../upData?action=upfile'>" +
			"<input type='hidden' name='uid' value='"+bxsAPI.uid+"'/>"+
			"<input type='hidden' name='id' value='1'/>"+
			"<input type='file' name='fil'/><input type='submit' value='upfile'/>"+
			"</form>"
});
//bxsAPI.apis.push({
//	name:"评价删除",
//	desc:"",
//	method:"/reqData?action=delComment",
//	cid:3,
//	params:{
//		acode:"*固定参数acode=1",
//		uid:"*用户id",
//		id:"评价id"
//	},
//	test:"acode=1&uid="+bxsAPI.uid+"&id=1"
//});
//------------我的 ---------------------
bxsAPI.apis.push({
	name:"个人设置",
	desc:"",
	method:"/reqData?action=profile",
	cid:5,
	params:{
		acode:"*固定参数acode=1",
		uid:"*用户id",
	},
	test:"acode=1&uid="+bxsAPI.uid
});
bxsAPI.apis.push({
	name:"个人设置提交",
	desc:"",
	method:"/reqData?action=addProfile",
	cid:5,
	params:{
		acode:"*固定参数acode=1",
		uid:"*用户id",
		unm:"*用户昵称"
	},
	test:"acode=1&uid="+bxsAPI.uid+"&unm=mynickname"
});
bxsAPI.apis.push({
	name:"收藏列表",
	method:"/reqData?action=listCollect",
	cid:5,
	params:{
		acode:"*固定参数acode=1",
		uid:"*用户id",
		pgnm:"页码（默认是第一页，第二页开始传参数）"
	},
	desc:"",
	test:"acode=1&uid="+bxsAPI.uid
});

bxsAPI.apis.push({
	name:"收藏提交",
	desc:"",
	method:"/reqData?action=addCollect",
	cid:5,
	params:{
		acode:"*固定参数acode=1",
		uid:"*用户id",
		id:"*商品id"
	},
	test:"acode=1&uid="+bxsAPI.uid+"&id=66"
});
bxsAPI.apis.push({
	name:"收藏删除",
	desc:"",
	method:"/reqData?action=delCollect",
	cid:5,
	params:{
		acode:"*固定参数acode=1",
		uid:"*用户id",
		id:"*收藏id"
	},
	test:"acode=1&uid="+bxsAPI.uid+"&id=178"
});

//---------------更多--------------
bxsAPI.apis.push({
	name:"我的留言",
	desc:"",
	method:"/reqData?action=addFeedback",
	cid:15,
	params:{
		acode:"*固定参数acode=1",
		uid:"*用户id",
		con:"*反馈内容"
	},
	test:"acode=1&uid="+bxsAPI.uid+"&con=我的反馈"
});
bxsAPI.apis.push({
	name:"联系我们",
	desc:"",
	method:"/reqData?action=contact",
	cid:15,
	params:{
		acode:"*固定参数acode=1",
		uid:"*用户id"
	},
	test:"acode=1&uid="+bxsAPI.uid
});
bxsAPI.apis.push({
	name:"版本更新",
	desc:"",
	method:"/reqData?action=version",
	cid:15,
	params:{
		acode:"*固定参数acode=1",
		uid:"*用户id",
		ver:"传递过来的app版本号",
		type:"类型：1 苹果 2 安卓",
		verType:"App类型 1团购版(默认) 2商家版本<sup style='color:red'>new</sup>"
	},
	test:"acode=1&uid="+bxsAPI.uid+"&ver=1.0&type=2&verType=1"
});

//---------------商家版--------------
bxsAPI.apis.push({
	name:"商家登录",
	method:"/loginApp?action=BIZLogin",
	cid:6,
	params:{
		acode:"*固定参数acode=1",
		un:"*用户名",
		pwd:"*密码"
	},
	desc:"",
	test:"acode=1&un=YX&pwd=yx954821"
});
bxsAPI.apis.push({
	name:"消费码查询",
	desc:"",
	method:"/reqData?action=findXfCode",
	cid:6,
	params:{
		acode:"*固定参数acode=1",
		xfCode:"*消费码",
		bizId:"*商家ID",
	},
	test:"acode=1&xfCode=00010051091216&bizId=22629"
});
bxsAPI.apis.push({
	name:"消费码详情(未激活)",
	desc:"",
	method:"/reqData?action=xfCodeDetail",
	cid:6,
	params:{
		acode:"*固定参数acode=1",
		xfCode:"*消费码",
		bizId:"*商家ID",
	},
	test:"acode=1&xfCode=00010051091216&bizId=22629"
});
bxsAPI.apis.push({
	name:"消费码详情(已激活)",
	desc:"",
	method:"/reqData?action=xfCodeDetail",
	cid:6,
	params:{
		acode:"*固定参数acode=1",
		xfCode:"*消费码",
		bizId:"*商家ID",
	},
	test:"acode=1&xfCode=7&bizId=22597"
});
bxsAPI.apis.push({
	name:"消费码激活",
	desc:"",
	method:"/reqData?action=xfCodeJiHuo",
	cid:6,
	params:{
		acode:"*固定参数acode=1",
		xfCode:"*消费码",
		bizId:"*商家ID",
	},
	test:"acode=1&xfCode=00010051091216&bizId=22629"
});

//--------------------商家栏目新增加功能 ------------------
bxsAPI.apis.push({
	name:"商家主页轮播 <new>[新增]</new>",
	desc:"商家栏目主页顶部的轮播图片，<redlight>[支持多张图][自动间隔5秒轮播][点击进入商品详情界面]</redlight>",
	method:"/reqData?action=sellerMainFocus",
	cid:16,
	params:{
		"":"<note>不需要参数</note>"
	},
	test:"",
	returns:{
		code:"状态值",
		msg:"提示",
		data:"返回的数据对象",
		items:"<parent>[data]</parent>数据集合",
		imgUrl:"<parent>[data.items]</parent>图片绝对地址 <bluelight>[图片宽/高=2.1][720x328][640x305]</bluelight>",
		productId:"<parent>[data.items]</parent>商品id，图片点击事件链接的商品id <note>注意：如果prodctId=0则表示无链接，做无点击事件处理</note>"
	}
});
bxsAPI.apis.push({
	name:"商家主分类<new>[新增]</new>",
	desc:"商家分类数据，能展示所有商家分类，包括图片和标题，一行显示两个分类，支持滚动",
	method:"/reqData?action=sellerCate",
	cid:16,
	params:{
		"":"<note>不需要参数</note>"
	},
	test:"",
	returns:{
		code:"状态值",
		msg:"提示",
		data:"返回的数据对象",
		items:"<parent>[data]</parent>数据集合",
		cateId:"<parent>[data.items]</parent>商家分类id",
		title:"<parent>[data.items]</parent>商家分类标题",
		imgUrl:"<parent>[data.items]</parent>商家分类图片绝对地址 <bluelight>[图片宽/高=1.56][328x210]</bluelight>"
	}
});
bxsAPI.apis.push({
	name:"商家分类主页轮播<new>[新增]</new>",
	desc:"商家分类主页顶部的轮播图片，<redlight>[支持多张图][自动间隔5秒轮播][点击进入商品详情界面]</redlight>",
	method:"/reqData?action=sellerCateFocus",
	cid:16,
	params:{
		"cateId":"<require>[必选]</require>商家分类id"
	},
	test:"cateId=18",
	returns:{
		code:"状态值",
		msg:"提示",
		data:"返回的数据对象",
		items:"<parent>[data]</parent>数据集合",
		imgUrl:"<parent>[data.items]</parent>图片绝对地址 <bluelight>[图片宽/高=3.2][720x225][640x200]</bluelight>",
		productId:"<parent>[data.items]</parent>商品id，图片点击事件链接的商品id <note>注意：如果prodctId=0则表示无链接，做无点击事件处理</note>"
	}
});
bxsAPI.apis.push({
	name:"商家列表<note>[商家分类下]</note><new>[新增]</new>",
	desc:"显示当前商家分类下的商家(Logo+标题)，一行显示两个商家。<redlight>支持手势分页</redlight>",
	method:"/reqData?action=sellerList",
	cid:16,
	params:{
		"cateId":"<require>[必选]</require>商家分类id",
		"pgnm":"<optional>[可选]</optional>页码 <note>默认为1，第二页起必须传参数[pgnm=2]。"
	},
	test:"cateId=18",
	returns:{
		code:"状态值",
		msg:"提示",
		data:"返回的数据对象",
		items:"<parent>[data]</parent>数据集合",
		pgnm:"<parent>[data]</parent>当前页码",
		totalNum:"<parent>[data]</parent>总记录数",
		pageNum:"<parent>[data]</parent>当前页记录数",
		pageSize:"<parent>[data]</parent>每页设定标准记录数",
		
		"-":"<redlight>下面是[items]数组返回的数据: [商家列表]</redlight>",
		sellerId:"<parent>[data.items]</parent>商家id",
		sellerName:"<parent>[data.items]</parent>商家名称",
		imgUrl:"<parent>[data.items]</parent>商家logo图片绝对地址 <bluelight>[图片宽/高=1.6][240x150]</bluelight>",
	}
});
bxsAPI.apis.push({
	name:"商家信息<new>[新增]</new>",
	desc:"单个商家信息+下面所有新发布商品列表信息<note>手势分页</note>",
	method:"/reqData?action=sellerInfo",
	cid:16,
	params:{
		"sellerId":"<require>[必选]</require>商家id",
		//"cateId":"<require>[必选]</require>商家分类id",
		"pgnm":"<optional>[可选]</optional>页码 <note>默认为1，第二页起必须传参数[pgnm=2]，针对商家商品列表。"
	},
	test:"sellerId=22674",
	returns:{
		code:"状态值",
		msg:"提示",
		data:"返回的数据对象",
		obj:"<parent>[data]</parent>实体对象",
		items:"<parent>[data]</parent>数据集合",
		pgnm:"<parent>[data]</parent>当前页码",
		totalNum:"<parent>[data]</parent>总记录数",
		pageNum:"<parent>[data]</parent>当前页记录数",
		pageSize:"<parent>[data]</parent>每页设定标准记录数",
		
		"-":"<redlight>下面是[obj]对象返回数据: [商家基本信息]</redlight>",
		sellerName:"<parent>[data.obj]</parent>商家名称",
		sellerPhone:"<parent>[data.obj]</parent>商家电话",
		sellerAddr:"<parent>[data.obj]</parent>商家地址",
		productCount:"<parent>[data.obj]</parent>商家商品数量统计",
		logoUrl:"<parent>[data.obj]</parent>商家Logo图片绝对地址 <bluelight>[图片宽/高=1.6][240x150]</bluelight>",
		imgAdUrl:"<parent>[data.obj]</parent>商家宣传图片<del>[宽/高=1.6][640x400][450x280]</del> <bluelight>[宽/高=3.2][720x225][450x140]</bluelight><update><sup>[更新]</sup></update>",
		
		"--":"<redlight>下面是[items]数组返回的数据: [商家商品列表]</redlight>",
		
		title:"<parent>[data.items]</parent>商品标题",
		summary:"<parent>[data.items]</parent>商品概要/简介",
		price:"<parent>[data.items]</parent>商品价格 <note>用人民币符号[¥]</note>",
		imgUrl:"<parent>[data.items]</parent>商品缩略图片 <bluelight>[宽/高=1.6][240x150]</bluelight>",
	}
});
bxsAPI.apis.push({
	name:"商家商品详情<new>[新增]</new>",
	desc:"单个商家商品(新品)详情信息",
	method:"/reqData?action=sellerProductInfo",
	cid:16,
	params:{
		"productId":"<require>[必选]</require>商品id",
		"uid":"<optional>[可选]</optional>用户id，<note>用户登录时传递，未登录不用传</note> <update>[更新]</update>"
	},
	test:"productId=658",
	returns:{
		code:"状态值",
		msg:"提示",
		data:"返回的数据对象",
		obj:"<parent>[data]</parent>实体对象",
		items:"<parent>[data]</parent>数据集合",
		
		"-":"<redlight>下面是[obj]对象返回数据: [商品基本信息]</redlight>",
		title:"<parent>[data.obj]</parent>商品标题",
		summary:"<parent>[data.obj]</parent>商品概要/简介",
		content:"<parent>[data.obj]</parent>商品详情",
		price:"<parent>[data.obj]</parent>商品价格",
		isCollect:"<parent>[data.obj]</parent>商品是否收藏<note>[0=未收藏][1=已收藏]</note>",
		imgUrl:"<parent>[data.obj]</parent>商品图片<note>[主图片]</note> <bluelight>[宽/高=1.6][640x400]</bluelight>",
		lnkUrl:"<parent>[data.obj]</parent>商品详情网页绝对地址 用途：<note>[分享]</note>",
		"--":"<redlight>下面是[items]数组返回的数据: [商家商品图片]</redlight>",
		imgAhUrl:"<parent>[data.items]</parent>商品图片 <bluelight>[宽/高=1.6][640x400]</bluelight>",
	}
});

bxsAPI.apis.push({
	name:"商家商品搜索<new>[新增]</new>",
	desc:"搜索所有商家发布的新品，列表结果为产品展示，点击进入产品详情。",
	method:"/reqData?action=sellerProductSearch",
	cid:16,
	params:{
		"keyword":"<require>[必选]</require>搜索关键字，包括：<note>关键字搜索，包括：商家名称，商品名称，商家分类</note>",
		"pgnm":"<optional>[可选]</optional>页码 <note>默认为1，第二页起必须传参数[pgnm=2]。"
	},
	test:"keyword=斯羽绒服",
	returns:{
		code:"状态值",
		msg:"提示",
		data:"返回的数据对象",
		obj:"<parent>[data]</parent>实体对象",
		items:"<parent>[data]</parent>数据集合",
		pgnm:"<parent>[data]</parent>当前页码",
		totalNum:"<parent>[data]</parent>总记录数",
		pageNum:"<parent>[data]</parent>当前页记录数",
		pageSize:"<parent>[data]</parent>每页设定标准记录数",
		
		"--":"<redlight>下面是[items]数组返回的数据: [商家商品列表]</redlight>",
		title:"<parent>[data.items]</parent>商品标题",
		summary:"<parent>[data.items]</parent>商品概要/简介",
		price:"<parent>[data.items]</parent>商品价格 <note>用人民币符号[¥]</note>",
		imgUrl:"<parent>[data.items]</parent>商品缩略图片 <bluelight>[宽/高=1.6][240x150]</bluelight>"
	}
});

bxsAPI.apis.push({
	name:"商家商品收藏<new>[新增]</new><update title='cuisy.v20150317'>[更新]</update>",
	desc:"<redlight>[注] 跟团购的收藏列表接口[ <a href='#/reqData?action=listCollect'>listCollect</a> ]分开，但提交[ <a href='#/reqData?action=addCollect'>addCollect</a> ]和删除[ <a href='#/reqData?action=delCollect'>delCollect</a> ]接口用原来的不变</redlight>",
	method:"/reqData?action=sellerListCollect",
	cid:16,
	params:{
		"uid":"<require>[必选]</require>用户id",
		"pgnm":"<optional>[可选]</optional>页码 <note>默认为1，第二页起必须传参数[pgnm=2]。"
	},
	test:"uid=22285",
	returns:{
		code:"状态值",
		msg:"提示",
		data:"返回的数据对象",
		obj:"<parent>[data]</parent>实体对象",
		items:"<parent>[data]</parent>数据集合",
		pgnm:"<parent>[data]</parent>当前页码",
		totalNum:"<parent>[data]</parent>总记录数",
		pageNum:"<parent>[data]</parent>当前页记录数",
		pageSize:"<parent>[data]</parent>每页设定标准记录数",
		
		"--":"<redlight>下面是[items]数组返回的数据: [用户新品收藏列表]</redlight>",
		collectId:"<parent>[data.items]</parent>收藏记录id <redlight>请在原收藏删除接口中传这个参数id=${collectId}</redlight>",
		productId:"<parent>[data.items]</parent>商品id",
		title:"<parent>[data.items]</parent>商品标题",
		summary:"<parent>[data.items]</parent>商品概要/简介",
		price:"<parent>[data.items]</parent>商品价格 <note>用人民币符号[¥]</note>",
		imgUrl:"<parent>[data.items]</parent>商品缩略图片 <bluelight>[宽/高=1.6][240x150]</bluelight>",
		sellerName:"<parent>[data.items]</parent>商家名称 <new title='cuisy.v20150317'>[新增]</new>"
	}
});

/**
 * 数据字典定义
 */
bxsAPI.fieldDict = {
	id:"数据自增id",
	code:"状态代码",
	acode:"定义在APP一个常量值为1，所有接口必须带上这个参数（acode=1)",
	msg:"状态对应提示文字",
	uid:"用户ID",
	un:"登录名（账号）",
	unm:"姓名、名字，真实姓名",
	nic:"昵称",
	pwd:"登录密码",
	repwd:"重复密码",
	mcode:"手机短信验证码",
	ivcode:"邀请码",
	bth:"生日",
	addr:"地址",
	job:"职业、工作",
	numb:"订单号",
	data:"数据对象",
	items:"数组对象",
	size:"数组大小",
	ti:"标题",
	sti:"子标题",
	con:"内容",
	scon:"团购内容",
	xcon:"消费提醒",
	jcon:"商家信息",
	type:"类型，分类等",
	num:"数字、数量",
	pnum:"页码，单位数量",
	tnum:"总数量，总数",
	count:"数量，统计数量",
	person:"人数，如购买，评论等",
	score:"分数",
	dfknum:"待付款",
	dsynum:"待使用",
	dpjnum:"待评价",
	dt:"日期时间",
	flg:"标识或状态",
	url:"图片、文件链接地址或网址",
	weburl:"用户静态页面地址",
	lnk:"链接地址",
	img:"图片地址",
	imgs:"小图片地址",
	imgb:"大图上地址",
	att:"附件名称",
	aurl:"附件地址",
	pri:"价格，",
	dpri:"打折价格，优惠价格",
	fpri:"最终价格，活动价格",
	zpri:"总金额",
	sta:"0 非免预约 1 免预约",
	stat:"状态",
	min:"最小，至少",
	star:"星级评价数量",
	pjper:"评价人数",
	myj:"蚂蚁卷",
	inid:"商品ID",
	ver:"版本号",
	paytime:"付款时间",
	actime:"激活时间（ac为activate的缩写）",
	paymon:"付款金额"
	
};

/**
 * 数据字典定义
 */
bxsAPI.returnCode = {
	100:"操作成功",
	102:"参数错误",
	103:"必要参数不能为空",
	105:"账号和密码错误",
	106:"账号已存在",
	120:"请求错误",
	127:"有效手机号",
	128:"验证码错误",
	129:"已经最新版本"
};

/**
 * 第三方信息
 */
bxsAPI.thirdInfo = {
	share:{ti:"分享",items:[
		{ti:"新浪微博",keys:[
			"App Key：2908791946",
			"App Secret：47e556486bbc05953b265356f88557b6"
		]},
		{ti:"腾讯微博",keys:[
			"App Key： 801539751",
			"App Secret：1cbe6f3532efbacc9682b680af6edf33"
		]},
		{ti:"微信/朋友圈",keys:[
			"AppID：wx75f7ae481d8e6c84",
			"AppSecret：f8dc44e04420371b895c4a72f30c6d38"
		]},
		{ti:"QQ空间",keys:[
			"APP ID:1102808453",
			"APP KEY:R93bK9AYXJm7Oqtw"
		]}
	]},
	ad:{ti:"广告组件",items:[
		{ti:"有米",keys:[
			"苹果版ios:",
			"发布ID：5ef6cbed79f7d9a9",
			"应用密钥：ac7d34d0387918f6",
			"-------------------------",
			"安卓版Android:",
			"发布ID：42081acf9f090c91",
			"应用密钥：7f78e43a690dd0c1"
		]},
	]}
};
 
 
 