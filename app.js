// window.open('https://icons.getbootstrap.com/', "_self");

const accounts = [
    {
        id: '1',
        userName: 'John',
        email: 'james@example.com',
        passWord: 'John'
    },
    {
        id: '2',
        userName: 'Han',
        email: 'han@example.com',
        passWord: 'Han'
    }
]



let Login = document.querySelector('#login')
Login.onclick = () => {
    var UserName = document.querySelector('input[name="username"]').value
    var Password = document.querySelector('input[name="password"]').value
    // alert(Password)
    let check = accounts.filter((e) => {
        return (e.userName == String(UserName)|| e.email == String(UserName)) && e.passWord == String(Password)
    })
    // window.open('https://ericnguyen123.github.io/JS/')
    if(check.length == 1){
        window.open('https://ericnguyen123.github.io/JS/','_self')
    }
}
// Login.addEventListener('click',() => {
//     var UserName = document.querySelector('input[name="userName"]').value
//     var Password = document.querySelector('input[name="password"]').value
//     let check = accounts.filter((e) => {
//         return (e.userName == UserName || e.email == UserName) && e.passWord == Password
//     })
//     check.forEach((e) => {
//         if (e.passWord == Password){
//             window.open('https://ericnguyen123.github.io/JS/','_self')
//         }
//         else{
//             alert('mk k dung')
//         }
//     })
// }) 