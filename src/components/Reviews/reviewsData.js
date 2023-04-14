import reviewImg1 from "./review-1.jpeg";
import reviewImg2 from "./review-2.jpeg";

let reviews = [

{
    userName: "Марк.Г",
    userImage: reviewImg1,
    rate: 5,
    usageExperience: `менее месяца`,
    advantages: `это мой первый айфон после после огромного количества телефонов на андроиде. 
    всё плавно, чётко и красиво. довольно шустрое устройство. камера весьма неплохая,ширик тоже на высоте.`,
    disadvantages: `к самому устройству мало имеет отношение, но перенос данных с андроида - адскаявещь) 
    а если нужно переносить фото с компа, то это только через itunes, которыйурезает 
    качество фотографий исходное`
},

{
    userName: "Валерий Коваленко",
    userImage: reviewImg2,
    rate: 4,
    usageExperience: `менее месяца`,
    advantages: `OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго.`,
    disadvantages: `Плохая ремонтопригодность`
} 
];

export default reviews;

