const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const courses = require('./Data/courses.json')
const details = require('./Data/details.json')
app.get('/', (req, res) => {
    res.send('creative shaper is running')
});

app.get('/course-categories', (req, res) => {
    res.send(courses)
})

app.get('/course-details', (req, res) => {
    res.send(details)
})
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const course_details = details.filter(d => d.course_id === id);
    res.send(course_details)

})

app.get('/singlecourse/:id', (req, res) => {
    const id = req.params.id;
    const selectedcourse = details.filter(d => d._id === id);
    res.send(selectedcourse)
})
app.listen(port, () => {
    console.log(`creative shaper on port, ${port}`)
})