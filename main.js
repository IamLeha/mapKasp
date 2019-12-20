$(document).ready(function() {
    $('select').niceSelect();

    let tagan = [
        [47.216398, 38.929768],
        [47.205301, 38.939632],
        [47.217482, 38.898857]
    ],
    adler = [
        [43.403639, 39.963487],
        [43.392641, 39.977842]
    ],
    rostov = [
        [47.209231, 39.736752],
        [47.228369, 39.714788],
    ],
    piter = [
        [59.944485, 30.303139],
        [59.934060, 30.339170],
    ],
    krasnodar = [
        [45.060402, 38.920399],
        [45.039515, 38.974424],
    ],

    dubai =[
        [25.232124, 55.276043]
    ];



    ymaps.ready( () => {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 5
        }, {
            searchControlProvider: 'yandex#search'
        }),
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
            iconLayout: 'default#image',
            iconImageHref: './map-point.svg',
            iconImageSize: [50, 50],
        })
    let elements = document.querySelectorAll(".btnSelect");
    myMap.geoObjects.add(myPlacemark)
    elements.forEach((el, index) => {
        el.onclick = (e) => {
            let rem = e.target;
            let arr = [];
            let offices;
            arr.push(rem.dataset.x, rem.dataset.y);
            myMap.setCenter(arr).update;
            myMap.geoObjects.removeAll();
            switch (rem.value) {
                case 'rostov':
                    offices = rostov;
                    break;
                case 'krasnodar':
                    offices = krasnodar;
                    break;
                case 'piter':
                    offices = piter;
                    break;
                case 'adler':
                    offices = adler;
                    break;
                case 'tagan':
                    offices = tagan;
                    break;
                case 'dubai':
                    offices = dubai;
                    break;
            }
            offices.forEach(el => {
                mark = new ymaps.Placemark(el, {}, { iconLayout: 'default#image',iconImageHref: './map-point.svg',iconImageSize: [50, 50],});
                myMap.geoObjects.add(mark);
                myMap.setZoom(10, {
                    smooth: true,
                    duration: 2000
                });
            })
        };
    })
    });


    let selectList = document.querySelector('.select-country');
    let cityList = document.querySelectorAll('.btnSelect');
    let valueSelect = selectList.value;

    cityList.forEach( el => {
        if(el.classList.contains('dn')){
            el.classList.remove('dn');
        }
        if(el.dataset.country !== valueSelect){
            el.classList.add('dn');
        }
    })

    selectList.onchange = (e) =>{
        let valueSelect = selectList.value;
        cityList.forEach( el => {
            if(el.classList.contains('dn')){
                el.classList.remove('dn');
            }
            if(el.dataset.country !== valueSelect){
                el.classList.add('dn');
            }
        })
    }

    


});


