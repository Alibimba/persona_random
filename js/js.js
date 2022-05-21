let manMoment = {
    names:[
        'насез',
        'гомез',
        'Геннадий',
        'Без Собянина',
        'Река',
        'Григорой',
        'Обэмэ',
        'ыыыыыы',
        'Саша быдло',
    ],
    fam:[
        'При Собянине',
        'гомезов',
        'Геннадийов',
        'ПриСобянине',
        'ПриСобянине',
        'ПриСобянине',
        'Обэмов',
        'ыыыыов',
        'Саша быдлов',
    ]
}
let womanMoment = {
    names:[
        'Гриб',
        'Мыш',
        'INSERT',
        'Посудомойка',
        'Пылесос',
        'Швабра',
        'РОма быдло',
        'ыыыыы(',
        'Неправд',
    ],
    fam:[
        'Ыывова',
        'Зозовова',
        'Шлакоблокова',
        'При Собянине',
        'При Собянине',
        'Абоба',
        'Рома быдловна',
        'При Собянине',
        'Обэмовна',
    ]
}
let genders = [
    "AttackHelicopter",
    "biGenderSexualATEIST"
]
let sposobnosti = [
    "Слепой",
    "Глухой",
    "Потерял ногу во Вьетнаме",
    "Диабетик",
    "Укусил радиоактивного паука",
    "Некрофил",
    "Сатанист",
    "Зоофил",
    "Педофил",
    "Сексуально озабоченный",
    "Живёт с бабушкой",
    "При собянине",
];



let knopka = document.querySelector('#knopka')
let kart = document.querySelector('.kart')
let ostalnoe = document.querySelector('.ostalnoe')




knopka.addEventListener('click', function (){
    kart.innerHTML = ''
    ostalnoe.innerHTML = ''


    let gender = genders[Math.floor(Math.random()* (genders.length))];

    if (gender === 'AttackHelicopter' ){
        let randIndexNames = Math.floor(Math.random() * (manMoment.names.length))
        let randIndexfam = Math.floor(Math.random() * (manMoment.fam.length))
        let voz = Math.floor(Math.random() * 100)
        ostalnoe.innerHTML = 'Фамилия and имя: ' + manMoment.fam[randIndexfam] + ' ' + manMoment.names[randIndexNames] + '<br>' + 'Гендер: ' + 'Аттак хеликоптер' + '<br>' + 'Возраст ' + voz
    }else if (gender === 'biGenderSexualATEIST'){
        let randIndexNames = Math.floor(Math.random() * (womanMoment.names.length))
        let randIndexfam = Math.floor(Math.random() * (womanMoment.fam.length))
        let voz = Math.floor(Math.random() * 100)
        ostalnoe.innerHTML = 'Фамилия and имя: ' + womanMoment.fam[randIndexfam] + ' ' + womanMoment.names[randIndexNames] + '<br>' + 'Гендер: ' + 'Бигендер сексуал атеист' + '<br>' + 'Возраст ' + voz
    }
})







