router
BrowserRouter   =>浏览器做router,history进行做路由，但是低版本浏览器不兼容
				  如果发布的话，刷新页面会not Found。。需要服务器支持，服务器可以获取路径
HashRouter      =>可以兼容低版本浏览器，#号后面的路由，如：http://localhost:8080/#/list。list就是路由
				  不需要服务器支持，服务器也无法获取的路由变化。
MemoryRouter    =>是在内存中保留路由的状态
				  无法维持状态，服务器也无法感知
				  APP就是。react-Native

