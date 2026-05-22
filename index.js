import { string, validate } from 'joi';
import express, { json } from 'express';
const app = express();

app.use(json());

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
        res.status(200).send(course);``
    })

app.post('/api/courses', (req, res) => {
    const schema = {
        name: string().min(3).required()
    }

    const result = validate(req.body, schema)
    if(result.error){
        res.status(400).send(result.error)
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.status(201).send(course); 
})





















app.listen(4000, ()=>{
    console.log('Server is running on port http://localhost:4000');
})