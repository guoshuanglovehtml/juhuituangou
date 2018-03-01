$.ajax({
    type:"get",
    url:"http://juhuituan.boguyuan.com/juhuituan/reqData?action=conOrd&acode=1&uid=25177",
    dataType:"json",
    success:function (data) 
    {
        console.log(data.data);
        if (data.data.dfknum!=0) {
            $(".dfknum").text(data.data.dfknum).show();
        }
        else{
            $(".dfknum").hide();
        }

        if (data.data.dsynum!=0) {
            $(".dsynum").text(data.data.dsynum).show();
        }
        else{
            $(".dsynum").hide();
        }

        if (data.data.dpjnum!=0) {
            $(".dpjnum").text(data.data.dpjnum).show();
        }
        else{
            $(".dpjnum").hide();
        }
        
    }
});