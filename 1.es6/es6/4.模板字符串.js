
/* <div class="className1 className2">
  <label for="input1">
    name
  </label>
  <input type="text" id="input1" name="user" />
</div> */


// let name = 'wlp';
// const html =
//   "<div class='className1 className2'>" +
//   "<label for='input1'>" +
//   name +
//   "</label>" +
//   "<input type='text' id='input1' name='user' />" +
//   "</div>";
// console.log("1", html);
//模板字符串
// let html1 = `
//   <div class="className1 className2">
//   <label for="input1">
//     ${name }
//   </label>
//   <input type="text" id="input1" name="user" />
//   </div>
// `
// console.log("2", html1);




//startsWith和endsWith的用法
const url = "http://www.baidu.com"

if (url.startsWith('http:')) {
  console.log('http');
} else {
  console.log('https')
}
