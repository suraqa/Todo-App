
// $(document).ready(function(){

//     $('form').on('submit', function(){

//         var item = $('form input');
//         var todo = {item: item.val()};

//         $.ajax({
//           type: 'POST',
//           url: '/todo',
//           data: todo,
//           success: function(data){
//             //do something with the data via front-end framework
//             location.reload();
//           }
//         });

//         return false;

//     });

//     $('li').on('click', function(){
//         var item = $(this).text().replace(/ /g, "-");
//         $.ajax({
//           type: 'DELETE',
//           url: '/todo/' + item,
//           success: function(data){
//             //do something with the data via front-end framework
//             location.reload();
//           }
//         });
//     });

//   });

// var firebaseConfig = {
//     apiKey: "AIzaSyCKTKUMTAPWMPcj2rg0WL9BxcH1z4mt7JA",
//     authDomain: "todo-app-7ef88.firebaseapp.com",
//     databaseURL: "https://todo-app-7ef88.firebaseio.com",
//     projectId: "todo-app-7ef88",
//     storageBucket: "todo-app-7ef88.appspot.com",
//     messagingSenderId: "481081663488",
//     appId: "1:481081663488:web:65bc3d16c0c6404e7538e5",
//     measurementId: "G-6R94WBK3DQ"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// let database = firebase.database();
// console.log(database)



// var firebaseConfig = {
//     apiKey: "AIzaSyCKTKUMTAPWMPcj2rg0WL9BxcH1z4mt7JA",
//     authDomain: "todo-app-7ef88.firebaseapp.com",
//     databaseURL: "https://todo-app-7ef88.firebaseio.com",
//     projectId: "todo-app-7ef88",
//     storageBucket: "todo-app-7ef88.appspot.com",
//     messagingSenderId: "481081663488",
//     appId: "1:481081663488:web:65bc3d16c0c6404e7538e5",
//     measurementId: "G-6R94WBK3DQ"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// const database = firebase.database()
// let todos = {
//     user: {
//         item: "Do something",
//         item: "Do something",
//         item: "Do something",
//         item: "Do something",
//         item: "Do something"
//     }
// }

// database.ref("/").set();









// let deleteBtns = document.querySelectorAll("[data-delete-btn]");
// console.log(deleteBtns)

// deleteBtns.forEach(button => {
//     button.addEventListener("click", () => {
//         $.ajax({
//             url: '/todo',
//             type: 'DELETE',
//             success: function(result) {
//                 console.log(result)
//             }
//         });
//     })
// })



let deleteBtns = $("[data-delete-btn]");
// let items = [];
// console.log(deleteBtns)


// for (let i = 0; i < deleteBtns.length; i++) {
//     items.push(deleteBtns[i].parentNode.childNodes[0].nodeValue.replace(/ /g, "-"));
//     deleteBtns[i].click(() => {
//         console.log(items[i])
//     })
// }

// deleteBtns.forEach(btn => {
//     items.push(deleteBtns[i].parentNode.childNodes[0].nodeValue.replace(/ /g, "-"));
// });

// console.log(items)

deleteBtns.click(event => {
    const item = event.currentTarget.parentNode.childNodes[0].nodeValue.replaceAll(/ /g, "-").toString()
    $.ajax({
        url: `/todo?item=${item}`,
        type: 'DELETE',
    });
})












