const db = require('../db')
const Location  = require('../models/Location')
// const cors = require('cors');

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const locations = [
    {
        name:'Jackson Hole',
        image:'https://media.istockphoto.com/photos/golden-fiery-sunset-at-grand-teton-picture-id584864408?k=20&m=584864408&s=612x612&w=0&h=k1yHh4WOrwsgfWa_Nhu0gsOSUT91PovvmWxfNyfvmQA='
    },
    {
       name:'Grand Canyon',
       image:'https://https://cdn2.wanderlust.co.uk/media/1231/dreamstime_xxl_14224279.jpg?anchor=center&mode=crop&width=1920&height=858&format=auto&rnd=131455360240000000.istockphoto.com/photos/golden-fiery-sunset-at-grand-teton-picture-id584864408?k=20&m=584864408&s=612x612&w=0&h=k1yHh4WOrwsgfWa_Nhu0gsOSUT91PovvmWxfNyfvmQA='
    },
    {
       name:'Maui',
       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmkshTwFSRi0wZqMd6uHXvEoW_vTBWEfMOtw&usqp=CAU'
    },
    {
        name:'Zion National Park',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_MGdBeglut3OhrUKK95VHFVhdIXJ0iRgaMQ&usqp=CAU'
    },
    
]
    await Location.insertMany(locations)
  console.log('Created Locations!')
}
const run = async () => {
  await main()
  db.close()
}

run()