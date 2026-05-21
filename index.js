const express = require('express');
const app = express();
const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
]
app.get('/', (req, res) =>{
    res.send('Hello World!');
})

app.get('/api/courses', (req, res)=>{
    return res.status(200).send(courses);

})

app.get('/api/courses/:id', (req,res) => {
  const course =  courses.find(c => c.id === parseInt(req.params.id))
    if(!course)  res.status(404).send('The course with the given ID was not found')
        res.status(200).send(course);
    })


app.listen(4000, ()=>{
    console.log('Server is running on port http://localhost:4000');
})