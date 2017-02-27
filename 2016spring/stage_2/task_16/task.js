/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
/*
对输入内容的过滤处理
1.去除输入内容的多余空格
2.对输入内容的格式合法化判断
 */
//2.当控件失去焦点时判断输入的内容是否合法:检查是不是中文输入
//
//
window.onload = function() {
        function onBlurs_name() {
            var aqi_city_input = document.getElementById('aqi-city-input').value.trim();
            //判断城市是否是中文输入
            var reg = /^[\u4e00-\u9fa5]+$/; //中文字符正则
            if (!reg.test(aqi_city_input)) {

                alert('输入的不是中文城市名称!');
                // document.getElementById('aqi-city-input').setAttribute("placeholder","输入的不是中文城市名称!");
            } else {

                return aqi_city_input;
            }

        }
        //2.当控件失去焦点时判断输入的内容是否合法：检查是不是输入的数字
        function onBlurs_zhishu() {
            //判断指数是不是数字
            var aqi_value_input = document.getElementById('aqi-value-input').value.trim();
            if (isNaN(aqi_value_input)) {

                alert('请输入数值!');
                // document.getElementById('aqi-value-input').setAttribute("placeholder","请输入数值!");
            } else {
                return aqi_value_input;
            }

        }

    };
    /**
     * 从用户输入中获取数据，向aqiData中增加一条数据
     * 然后渲染aqi-list列表，增加新增的数据
     */

function addAqiData(aqi_city_input, aqi_value_input) {

    // aqiData[[aqi_city_input,aqi_value_input]];
    aqiData.push([aqi_city_input, aqi_value_input]);
}
/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    document.getElementById('aqi-table').innerHTML += " <tr><td>城市</td><td>空气质量</td><td>操作</td></tr>"; //表头
    for (var i = 0; i < aqiData.length; i++) {
        document.getElementById('aqi-table').innerHTML +=
            "<tr><td>" + aqiData[i][0] + "</td><td>" + aqiData[i][1] + "</td><td><button>删除</button></td> </tr>";

    }
}
/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle(aqi_city_input, aqi_value_input) {
    addAqiData(aqi_city_input, aqi_value_input);
    renderAqiList();
}
/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
    // do sth.
    renderAqiList();
}

function init() {
    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    // 
    // 
    document.getElementById('add-btn').addEventListener("click", addBtnHandle());
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    // document.getElementsByID('aqi-table').getElementsByTagName('button')
}
init();
