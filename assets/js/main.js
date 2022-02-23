// let btn = document.querySelector('button');
// let container = document.getElementsByClassName('umwickeln')[0]
// console.log("container", container);

// let count = -1;
// let duration = 500;

// btn.addEventListener('click', () => {
//     let interval = setInterval(function() {

//         console.log('clicked');

//         count++,
//         console.log(count);

//         let wrapper = document.createElement('div')
//         wrapper.textContent = count;
//         // wrapper.className = 'rechteck'
//         duration -= 20
//         console.log(duration);

//         if (count % 10 == 0) {
//             wrapper.className = 'weiss'
//         } else {
//             wrapper.className = 'rechteck'
//         }


//         if (count >= 42) {
//             clearInterval(interval)
//         } else {
//             container.appendChild(wrapper)
//         }



//     }, 1000);
// })

let btn = document.querySelector('button');
let container = document.getElementsByClassName('umwickeln')[0];

let count = -1;

btn.addEventListener('click', () => {
    count++;

    let wrapper = document.createElement('div');
    wrapper.textContent = count;

    if (count % 10 == 0) {
        wrapper.className = 'weiss';
    } else {
        wrapper.className = 'rechteck';
    }

    container.appendChild(wrapper);
});