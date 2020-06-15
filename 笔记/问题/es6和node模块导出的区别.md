ES6和Node模块导出的区别

es6的写法：
export default  => import('')
export => 

node.js写法：
module.exports  => require('')
exports  => 

## ES6:

export 和export default 导出的，需要使用import进行引入模块内容。直接运行不了的

1.一个模块文件只能有最多一个export default。引入默认模块时直接：import 任意名字 from '模块' <br />2.一个模块文件可以有多个export。这样导出的模块必须有定义的名字。import {模块名字} from '模块' <br />3.引入模块的所有内容 import * as mod1 from '模块' 。mod1是起的别名。

import * as mod from './xxx';
import {a,b,c....} from './xxx';
import xxx from './mod';
import './1.jpg'
import './1.css'
//异步引入
let promise = import('./xxx')

## node :

module.exports 和exports导出的，需要使用require进行引入模块

其实exports是这样取得：exports=module.exports。所以在导出的时候不能exports={}...这种等号会改变exports。

```
module.exports.Name="我是电脑";
module.exports.Say=function(){
  console.log("我可以干任何事情"); 
}
执行的结果：
{
  "Name":" 我是电脑",
  "Say":function(){
         　console.log("我可以干任何事情");
     　 }
}
```

