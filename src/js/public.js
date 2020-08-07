import '../css/public.css'
// import { none } from 'html-webpack-plugin/lib/chunksorter';
console.log('--gg--')

function GetQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
    if(r!=null)return  unescape(r[2]); return null;
}
var url = GetQueryString('url');
console.log(url)
if(url == 1){
    document.getElementById('box').style.display = 'none';
}
