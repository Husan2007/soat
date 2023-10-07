// gsap.from('.box-1', {
// delay: .7,
// duraction: .7,
// y: -220,
// opasity: 0
// })

// $(window).scroll(function() {
//     if(document.documentElement.scrollTop > 50 || document.body.scrollTop > 50) {
//         $('.box-2').css('transform', 'translateX(0px)')
//         $('.box-2').css('opacity', '1')
//     }
//     else{
//         $('.box-2').css('transform', 'translateX(100px)')
//         $('.box-2').css('opacity', '0')
//     }
// })

// $(window).scroll(function() {
//     if(document.documentElement.scrollTop > 150 || document.body.scrollTop > 150) {
//         $('.box-3').css('transform', 'scale(1)')
//         $('.box-3').css('opacity', '1')
//     }
//     else{
//         $('.box-3').css('transform', 'scale(.8)')
//         $('.box-3').css('opacity', '0')
//     }
// })

// $(window).scroll(function() {
//     if(document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
//         $('.box-4').css('transform', 'translateX(0px)')
//         $('.box-4').css('opacity', '1')
//     }
//     else{
//         $('.box-4').css('transform', 'translateX(-100px)')
//         $('.box-4').css('opacity', '0')
//     }
// })

// $(window).scroll(function() {
//     if(document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
//         $('.box-5').css('transform', 'rotate(0deg)')
//         $('.box-5').css('opacity', '1')
//     }
//     else{
//         $('.box-5').css('transform', 'rotate(45deg)')
//         $('.box-5').css('opacity', '0')
//     }
// })

// $(window).scroll(function() {
//     if(document.documentElement.scrollTop > 380 || document.body.scrollTop > 380) {
//         $('.box-6').css('transform', 'translateY(0px)')
//         $('.box-6').css('opacity', '1')
//     }
//     else{
//         $('.box-6').css('transform', 'translateY(100px)')
//         $('.box-6').css('opacity', '0')
//     }
// })

// $(window).scroll(function() {
//     if(document.documentElement.scrollTop > 440 || document.body.scrollTop > 440) {
//         $('.box-7').css('transform', 'translateY(0px)')
//         $('.box-7').css('opacity', '1')
//     }
//     else{
//         $('.box-7').css('transform', 'translateY(-100px)')
//         $('.box-7').css('opacity', '0')
//     }
// })

// $(window).scroll(function() {
//     if(document.documentElement.scrollTop > 500 || document.body.scrollTop > 500) {
//         $('.box-8').css('transform', 'translateX(0px)')
//         $('.box-8').css('opacity', '1')
//     }
//     else{
//         $('.box-8').css('transform', 'translateX(100px)')
//         $('.box-8').css('opacity', '0')
//     }
// })

// $(window).scroll(function() {
//     if(document.documentElement.scrollTop > 600 || document.body.scrollTop > 600) {
//         $('.box-8').css('transform', 'skew(0deg)')
//         $('.box-8').css('opacity', '1')
//     }
//     else{
//         $('.box-8').css('transform', 'skew(50deg)')
//         $('.box-8').css('opacity', '0')
//     }
// })

// ==========================================yangi=======================================================================

 
// ========================================
// let inp_1 = document.getElementById('inp_1')
// let inp_2 = document.getElementById('inp_2')
// let inp_3 = document.getElementById('inp_3')
// let inp_4 = document.getElementById('inp_4')

// let btn_1 = document.getElementById('btn_1')
// let btn_2 = document.getElementById('btn_2')
// let btn_3 = document.getElementById('btn_3')
// let btn_4 = document.getElementById('btn_4')

// let h1_1 = document.getElementById('h1_1')
// let p_1 = document.getElementById('p_1')
// let h4_1 = document.getElementById('h4_1')
// let btn1 = document.getElementById('btn1')

// btn_1.addEventListener('click', function () {
//     h1_1.innerHTML = inp_1.value
// })

// btn_2.addEventListener('click', function () {
//     p_1.innerHTML = inp_2.value
// })

// btn_3.addEventListener('click', function () {
//     h4_1.innerHTML = inp_3.value
// })

// btn_4.addEventListener('click', function () {
//     btn1.innerHTML = inp_4.value
// })


// // ========================================
// let inp_5 = document.getElementById('inp_5')
// let inp_6 = document.getElementById('inp_6')
// let inp_7 = document.getElementById('inp_7')
// let inp_8 = document.getElementById('inp_8')

// let btn_5 = document.getElementById('btn_5')
// let btn_6 = document.getElementById('btn_6')
// let btn_7 = document.getElementById('btn_7')
// let btn_8 = document.getElementById('btn_8')

// let h1_2 = document.getElementById('h1_2')
// let p_12= document.getElementById('p_2')
// let h4_2 = document.getElementById('h4_2')
// let btn2 = document.getElementById('btn2')

// btn_5.addEventListener('click', function () {
//     h1_2.innerHTML = inp_5.value
// })

// btn_6.addEventListener('click', function () {
//     p_2.innerHTML = inp_6.value
// })

// btn_7.addEventListener('click', function () {
//     h4_2.innerHTML = inp_7.value
// })

// btn_8.addEventListener('click', function () {
//     btn2.innerHTML = inp_8.value
// })

// ==========================================yangi=======================================================================


// $(window).scroll(function() {
//     if(document.documentElement.scrollTop > 50 || document.body.scrollTop > 50) {
//         $('ul').css('margin', '25px, 20px')
//         $('ul').css('background-color', 'rgb(2, 131, 99)')
//     }
//     else{
//         $('ul').css('margin', '15px, 20px')
//         $('ul').css('background-color', 'rgb(8, 207, 157)')

//     }
// })

// ====================JC======================yangi=======================================================================

let ul = document.querySelector('ul')

window.onscroll = function() {
    if(document.documentElement.scrollTop > 50 || document.body.scrollTop > 50) {
        ul.style.backgroundColor = 'rgb(2, 131, 99)'
    }
    else {
        ul.style.backgroundColor = 'rgb(8, 207, 157)'
    }
}

