// javascript是客户端脚本语言：不需要编译，直接被浏览器解析执行
// 每个浏览器都有其解析引擎。
// 增加动态效果
// javacript=ECMAscript+javacript特有的东西（bom+dom）
// 与html结合方式：内部js:放的位置不同，执行的顺序不同
//                 /外部js
alert("我是外部js文件");
// 基本数据类型：number(整数，小数，NaN=not a number)、string（“”或者’‘都可以）、
//                  boolean、null（空占位符）、undefined（变量没有初始化值会被默认赋值为undefined）
// 变量：javascript为弱类型语言，开辟空间时不定义将来存储的数据类型
// 特殊的运算符：+正号-负号 ===全等于
// 运算数不少运算符所要求的类型，js会自动将运算符进行转换。转换的时候要加+或者-
//          String：字面值不是数字，则将其转NaN
//          boolean转number：true转1，false转0
// 字符串的数字和数字比较，系统会将字符串的数字转为数字再比较
// ===比较类型和数值
// &&和||都有短路效果
// 加！转布尔：
//          number转boolean：0为3假，非0为真
//          string除了空字符串都为true
//          null/undefined都为false

