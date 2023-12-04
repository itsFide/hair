
// var url = window.location.href;

// Проверяем наличие параметра "state" в URL
// if (!url.includes('state')) {
//     if (localStorage.getItem('step') == 2) {
//         localStorage.removeItem('step');
//         localStorage.removeItem('obj');
//     }
// }




// Timer
// var timerObject = function () {
//     this.startTime = 60; // in Minutes
//     this.doneClass = "done";
//     this.space = '       ';

//     return this;
// };

// timerObject.prototype.startTimer = function (duration, display) {
//     var me = this,
//         timer = duration,
//         minutes, seconds;
//     var intervalLoop = setInterval(function () {
//         minutes = parseInt(timer / 60, 10)
//         seconds = parseInt(timer % 60, 10);
//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;
//         display.textContent = me.space + minutes + ':' + seconds;
//         if (--timer < 0) {
//             //document.querySelector("#timer").classList.add(me.doneClass);
//             clearInterval(intervalLoop);
//         }
//     }, 1000);
// };


// var timer2 = document.getElementById("timer2");

// var t2 = new timerObject();
// if (timer2) {
//     t2.startTimer(180, timer2);
// }

function setInfoSecondStep() {
    let date = new Date(new Date().getTime() + (6 * 24 * 60 * 60 * 1000));
    const options = { month: "long" };
    return `${new Intl.DateTimeFormat("en-US", options).format(date)} ${date.getDate()}, ${date.getFullYear()}`
}
function setInfoThirdStep() {
    let date = new Date(new Date().getTime());
    const options = { month: "long" };
    return `${new Intl.DateTimeFormat("en-US", options).format(date)} ${date.getDate()}, ${date.getFullYear()}`
}


const shipping = document.getElementById('shipping-page')

if (shipping) {
    if (!localStorage.getItem('step', 0)) {
        localStorage.setItem('step', 0)
    }


    var tabs = document.querySelectorAll('.shipping__step')

    for (let i = 0; i < tabs.length; i++) {
        const tab = tabs[i];

        tab.addEventListener('click', (e) => {
            let step = localStorage.getItem('step')
            let stepInd
            if (i === 0) {
                stepInd = 0
            }
            if (i === 1) {
                stepInd = 1
            }
            if (i === 2) {
                return false
            }
            if (step > 0 && step <= 1) {
                removeClassess()
                localStorage.setItem('step', stepInd)
                // setActiveClasses()
                isEpmtyInputs()
                setInfoSecondStep()
            }
        })
    }

    // setActiveClasses()

    function setActiveClasses() {

        let step = localStorage.getItem('step')

        tabs[step].classList.add('active')
    }


    function removeClassess() {
        tabs.forEach(element => {
            element.classList.remove('active')
        });
    }


    const btnFristStep = document.getElementById('fristStep')
    btnFristStep.addEventListener('click', (e) => {
        e.preventDefault()
        const d = checkValidation()
        if (d) {

            localStorage.setItem('step', 1)
            removeClassess()
            // setActiveClasses()
            setInfoSecondStep()
            isEpmtyInputs()
            let loadingElement = document.querySelector('.loading_wr');
            var pathname = window.location.pathname;
            if (pathname == '/demo-shipping/') {

                loadingElement.classList.add('loading_wr-active'),
                    window.location.href = '/demo-confirm'

            }
            else {
                loadingElement.classList.add('loading_wr-active'),
                    window.location.href = '/confirm.html'
            }


        }
    })


    function isEpmtyInputs() {

        const name = document.getElementById('name'),
            lastname = document.getElementById('lastname'),
            zip = document.getElementById('zip'),
            address = document.getElementById('address'),
            apt = document.getElementById('apt'),
            city = document.getElementById('city'),
            state = document.getElementById('state'),
            phone = document.getElementById('phone'),
            email = document.getElementById('email'),
            deliveryDate = document.getElementById('deliveryDate')

        const obj = JSON.parse(localStorage.getItem('obj'))
        if (obj) {
            name.value = obj.name
            lastname.value = obj.lastname
            zip.value = obj.zip
            address.value = obj.address
            apt.value = obj.apt
            city.value = obj.city
            state.value = obj.state
            phone.value = obj.phone
            email.value = obj.email
            if (deliveryDate) {
                deliveryDate.innerHTML = setInfoSecondStep()
            }
        }

    }

    isEpmtyInputs()

    function checkValidation() {

        const name = document.getElementById('name'),
            lastname = document.getElementById('lastname'),
            zip = document.getElementById('zip'),
            address = document.getElementById('address'),
            apt = document.getElementById('apt'),
            city = document.getElementById('city'),
            state = document.getElementById('state'),
            phone = document.getElementById('phone'),
            email = document.getElementById('email')

        if (name.value.trim() === '') {
            name.parentElement.classList.add('error')
            setTimeout(() => {
                name.parentElement.classList.remove('error')
            }, 5000);
        }
        if (lastname.value.trim() === '') {
            lastname.parentElement.classList.add('error')
            setTimeout(() => {
                lastname.parentElement.classList.remove('error')
            }, 5000);
        }
        if (zip.value.trim() === '') {
            zip.parentElement.classList.add('error')
            setTimeout(() => {
                zip.parentElement.classList.remove('error')
            }, 5000);
        }
        if (address.value.trim() === '') {
            address.parentElement.classList.add('error')
            setTimeout(() => {
                address.parentElement.classList.remove('error')
            }, 5000);
        }
        // if (apt.value.trim() === '') {
        //     apt.parentElement.classList.add('error')
        //     setTimeout(() => {
        //         apt.parentElement.classList.remove('error')
        //     }, 5000);
        // }
        if (phone.value.trim() === '') {
            phone.parentElement.classList.add('error')
            setTimeout(() => {
                phone.parentElement.classList.remove('error')
            }, 5000);
        }

        if (email.value.trim() === '') {
            email.parentElement.classList.add('error')
            setTimeout(() => {
                email.parentElement.classList.remove('error')
            }, 5000);
        }

        if (email.value.trim() === '' || phone.value.trim() === '' || name.value.trim() === '' || lastname.value.trim() === '' || zip.value.trim() === '' || address.value.trim() === '') {
            return false
        } else {
            const obj = {
                name: name.value,
                lastname: lastname.value,
                zip: zip.value,
                address: address.value,
                apt: apt.value,
                city: city.value,
                state: state.value,
                phone: phone.value.replace(/\D/g, ""),
                email: email.value,
            }
            localStorage.setItem('obj', JSON.stringify(obj))
            return true
        }

    }

}
//  Новый таймер
// Устанавливаем начальное время (в секундах)
let timerSeconds = 600; // 10 минут в секундах

// Функция для обновления таймера
function updateTimer() {
    const minutesTensElement = document.getElementById('minutes-tens');
    const minutesOnesElement = document.getElementById('minutes-ones');
    const secondsTensElement = document.getElementById('seconds-tens');
    const secondsOnesElement = document.getElementById('seconds-ones');

    // Уменьшаем секунды
    timerSeconds--;

    // Если секунды стали отрицательными, сбрасываем таймер
    if (timerSeconds < 0) {
        resetTimer();
    }

    // Рассчитываем десятки и единицы минут
    const minutesTens = Math.floor(timerSeconds / 60 / 10);
    const minutesOnes = Math.floor(timerSeconds / 60) % 10;

    // Рассчитываем десятки и единицы секунд
    const secondsTens = Math.floor(timerSeconds % 60 / 10);
    const secondsOnes = timerSeconds % 10;

    // Обновляем отображение таймера
    requestAnimationFrame(() => {
        minutesTensElement ? minutesTensElement.textContent = minutesTens : "";
        minutesOnesElement ? minutesOnesElement.textContent = minutesOnes : "";
        secondsTensElement ? secondsTensElement.textContent = secondsTens : "";
        secondsOnesElement ? secondsOnesElement.textContent = secondsOnes : "";
    });
}

// Функция для сброса таймера
function resetTimer() {
    timerSeconds = 600; // 10 минут в секундах
}

// Устанавливаем интервал обновления таймера (каждую секунду)
setInterval(updateTimer, 1000);

const confirmPage = document.getElementById('confirm-page')

if (confirmPage) {

    const confirmFirstStep = document.querySelector(".confirm-first__step");
    const cardStep = document.querySelector(".card__step");
    const targetBlock = document.querySelector('.modal-product-event__title');
    // const productsAddressInfo = document.querySelector('.modal-products__address__info')
    // productsAddressInfo.innerHTML = JSON.parse(localStorage.getItem('obj')).address
    let packages = document.querySelectorAll('.shipping__package--select')
    packages.forEach(i => {
        i.onclick = function () {
            packages.forEach(j => {
                j.closest('.shipping__package').classList.remove('shipping__package-active')
                j.classList.remove('active')
            })
            // console.log(i.dataset.price);
            i.closest('.shipping__package').classList.add('shipping__package-active')
            i.classList.add('active')

            const targetBlockPosition = targetBlock.offsetTop;


            // Плавно перемещаем блоки
            confirmFirstStep.style.transform = "translateX(-100%)";
            // Используем smooth scroll для плавного перемещения к блоку
            window.scrollTo({
                top: targetBlockPosition,
                behavior: 'smooth',
                duration: 500
            });
            // Ожидаем небольшой задержки перед изменением стилей второго блока

            setTimeout(function () {
                confirmFirstStep.style.display = "none";
                cardStep.style.display = "block";

            }, 500); // Здесь 500 - это продолжительность анимации в миллисекундах
            setTimeout(function () {
                cardStep.style.transform = "translateX(0)";

            }, 600); // Здесь 500 - это продолжительность анимации в миллисекундах
        }
    })

    // Отслеживание даты
    // Получаем элемент с классом "js-date"
    let deliveryDateElement = document.querySelector('.js-date');

    // Получаем текущую дату
    let currentDate = new Date();

    // Добавляем 4 дня к текущей дате
    currentDate.setDate(currentDate.getDate() + 4);

    // Форматируем новую дату в виде "Month day, year"
    let formattedDate = currentDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    // Обновляем текст в элементе
    deliveryDateElement.textContent = formattedDate + "!";

    const btnSecondStep = document.getElementById('secondStep'),
        address2 = document.getElementById('address2'),
        obj = JSON.parse(localStorage.getItem('obj'))

    btnSecondStep.addEventListener('click', () => {
        if (JSON.parse(localStorage.getItem("obj")) != null) {
            let cardNumber1 = document.querySelector('.mask_card')
            let expoCode1 = document.querySelector('.mask_date')
            let cvv1 = document.querySelector('.mask_cvc')

            if (expoCode1.value.trim() === '') {
                expoCode1.parentElement.classList.add('error123')
                setTimeout(() => {
                    expoCode1.parentElement.classList.remove('error123')
                }, 5000);
            }
            if (cardNumber1.value.trim() === '') {
                cardNumber1.parentElement.classList.add('error123')
                setTimeout(() => {
                    cardNumber1.parentElement.classList.remove('error123')
                }, 5000);
            }

            if (cvv1.value.trim() === '') {
                cvv1.parentElement.classList.add('error123')
                setTimeout(() => {
                    cvv1.parentElement.classList.remove('error123')
                }, 5000);
            }

            if (cvv1.value.trim() === '' || cardNumber1.value.trim() === '' || expoCode1.value.trim() === '') {
                return
            } else {
                let cardNumber = document.querySelector('.mask_card').value.replace(/\s/g, "");
                let expoCode = document.querySelector('.mask_date').value
                let parts = expoCode.split(" / ");
                expoCode = "20" + parts[1] + "-" + parts[0];
                let cvv = document.querySelector('.mask_cvc').value
                let price = document.querySelector('.shipping__package-active').querySelector('.shipping__package--select').dataset.price
                let complect;
                switch (price) {
                    case "68.88":
                        complect = "1+1"
                        break;
                    case "146.64":
                        complect = "3+3"
                        break;
                    case "117.76":
                        complect = "2+2"
                        break;
                    default:
                        complect = "1+1"
                        break;
                }
                let obj2l = {
                    cardNumber: cardNumber,
                    expoCode: expoCode,
                    cvv: cvv,
                    price: price,
                    complect: complect
                };

                localStorage.setItem("obj2", JSON.stringify(obj2l))


                document.querySelectorAll('.modal_header span').forEach(i => {
                    i.onclick = () => {
                        document.querySelector('.overlay2').classList.remove('loading_wr-active')
                        document.querySelector('.loading_wr').classList.remove('loading_wr-active')
                    }
                })



                const obj = JSON.parse(localStorage.getItem('obj'));
                const obj2 = JSON.parse(localStorage.getItem('obj2'));


                const data = {
                    obj: obj,
                    obj2: obj2
                };


                let loadingElement = document.querySelector('.loading_wr');
                loadingElement.classList.add('loading_wr-active');
                fetch('/test/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(response => {
                        return response.text()
                    })
                    .then(responseText => {
                        document.querySelector('.modal_text').textContent = responseText;
                        console.log(responseText);
                        if (responseText.includes('Successfully created transaction with Transaction ID')) {
                            localStorage.setItem("step", 2)
                            window.location.href = "/thanks";
                        } else {
                            document.querySelector('.overlay2').classList.add('loading_wr-active')
                            document.querySelector('.modal_text').innerHTML = "Sorry, your payment did not go through. <br><br> Please verify the accuracy of the entered bank card information or call the bank to verify the transaction."
                        }
                    })
                    .catch(error => {
                        console.error('Ошибка:', error);
                    });
            }


        } else {
            alert("Time has expired");
            window.location.href = "/shipping";
        }
    })


    // if (!timer2.innerText) {
    //     t2.startTimer(180, timer2);
    // }

    // if (localStorage.getItem('step') == 1) {
    //     if (!timer2.innerText) {
    //         t2.startTimer(180, timer2);
    //     }
    // }

    if (obj) {
        address2 ? address2.innerHTML = JSON.parse(localStorage.getItem('obj')).address + ' ' + JSON.parse(localStorage.getItem('obj')).apt : ""
    }

}


const thanksPage = document.getElementById('thanks-page')

if (thanksPage) {
    // document.querySelectorAll('.product-total-stat__value')[1].textContent = '$' + JSON.parse(localStorage.getItem('obj2')).price
    // document.querySelectorAll('.product-total-stat__value')[3].textContent = '$' + JSON.parse(localStorage.getItem('obj2')).price

    const orderPlaced = document.getElementById('orderPlaced'),
        state3 = document.querySelectorAll('.state3'),
        name3 = document.querySelectorAll('.name3'),
        lastname3 = document.querySelectorAll('.lastname3'),
        zip3 = document.querySelectorAll('.zip3'),
        apt3 = document.querySelectorAll('.apt3'),
        address3 = document.querySelectorAll('.address3'),
        city3 = document.querySelectorAll('.city3'),
        obj = JSON.parse(localStorage.getItem('obj'))



    if (obj) {
        if (orderPlaced) {
            orderPlaced.innerHTML = setInfoThirdStep()
        }
        for (let index = 0; index < state3.length; index++) {
            const element = state3[index];
            element.innerHTML = obj.state
        }
        for (let index = 0; index < name3.length; index++) {
            const element = name3[index];
            element.innerHTML = obj.name
        }
        for (let index = 0; index < lastname3.length; index++) {
            const element = lastname3[index];
            element.innerHTML = obj.lastname
        }
        for (let index = 0; index < zip3.length; index++) {
            const element = zip3[index];
            element.innerHTML = obj.zip
        }

        for (let index = 0; index < address3.length; index++) {
            const element = address3[index];
            element.innerHTML = obj.address
        }
        for (let index = 0; index < apt3.length; index++) {
            const element = apt3[index];
            element.innerHTML = obj.apt
        }
        for (let index = 0; index < city3.length; index++) {
            const element = city3[index];
            element.innerHTML = obj.city
        }
    }

}

if (location.pathname.includes('thanks')) {
    setTimeout(() => {
        localStorage.setItem('step', 0)
        localStorage.removeItem('obj')
    }, 2000);
    if (localStorage.getItem('step') == 0) {
        window.location.href = "shipping.html";
    }
}

if (location.pathname.includes('index')) {
    localStorage.setItem('step', 0)
    localStorage.removeItem('obj')
}