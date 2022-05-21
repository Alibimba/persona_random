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

setInterval(function (){
    let gender = genders[Math.floor(Math.random()* (genders.length))];

    if (gender === 'AttackHelicopter' ){
        let randIndexNames = Math.floor(Math.random() * (manMoment.names.length))
        let randIndexfam = Math.floor(Math.random() * (manMoment.fam.length))
        console.log('Это атак хеликоптер', manMoment.fam[randIndexfam], manMoment.names[randIndexNames])
    }else if (gender === 'biGenderSexualATEIST'){
        let randIndexNames = Math.floor(Math.random() * (womanMoment.names.length))
        let randIndexfam = Math.floor(Math.random() * (womanMoment.fam.length))
        console.error('Это бигендерный сексуальный атеист', womanMoment.fam[randIndexfam], womanMoment.names[randIndexNames])
    }
}, 500)







