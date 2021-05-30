document.addEventListener('DOMContentLoaded', () => {

    const featureLinkElems = document.querySelectorAll('.feature__link');
    const featureSubElems = document.querySelectorAll('.feature-sub');

    // for (let i = 0; i < featureLinkElems.length; i++) {
    //     featureLinkElems[i].addEventListener('click', () => {
    //         featureSubElems[i].classList.toggle('hidden')
    //         featureLinkElems[i].classList.toggle('feature__link_active')
    //     })
    // }

    featureLinkElems.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('feature__link_active')) {
                btn.classList.remove('feature__link_active');
                featureSubElems[index].classList.add('hidden');
            } else {
                featureSubElems.forEach((featureSubElem) => {
                featureSubElem.classList.add('hidden');
                });
                featureLinkElems.forEach((featureLinkElem) => {
                    featureLinkElem.classList.remove('feature__link_active');
                });
                featureSubElems[index].classList.remove('hidden');
                btn.classList.add('feature__link_active');
            }
            
        })
    })
});

// const featureSubbElem = document.querySelector('.feature-sub');
// const featureSubbElems = document.querySelectorAll('.feature-sub__item');

// characteristicsItemElems.forEach(elem => {
//   if (elem.children[1].classList.contains('active')) {
//     elem.children[1].style.height = elem.children[1].scrollHeight + 'px';
//   }
// })

// const open = (button, dropDown) => {
//   closeAllDrops(button, dropDown);
//   dropDown.style.height = dropDown.scrollHeight + 'px';
//   button.classList.add('feature__link_active');
//   dropDown.classList.add('feature__link_active');
// };

// const close = (button, dropDown) => {
//   button.classList.remove('feature__link_active');
//   dropDown.classList.remove('feature__link_active');
//   dropDown.style.height = '';
// };

// const closeAllDrops = (button, dropDown) => {
//   characteristicsItemElems.forEach((elem) => {
//     if (elem.children[0] !== button && elem.children[1] !== dropDown) {
//       close(elem.children[0], elem.children[1]);
//     }
//   })
// }

// characteristicsListElem.addEventListener('click', (event) => {
//   const target = event.target;
//   if (target.classList.contains('feature__link')) {
//     const parent = target.closest('.feature__item');
//     const description = parent.querySelector('.characteristics__description');
//     description.classList.contains('feature__link_active') ?
//       close(target, description) :
//     open(target, description);
//   } 
// });
