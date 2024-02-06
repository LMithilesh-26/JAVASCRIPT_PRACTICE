const course = {
    courseName: "JS in hindi",
    price: "1000",
    courseInstructor: "Sam"
}

// De-Structuring of Objects

// const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: teacher} = course
console.log(teacher);

// APIs Struture
// {
//     "name": "Mithilesh", 
//     "courseName": "JS",
//     "price": "Free"
// }