function Student(name, lastName, indexNumber, grades) {
    this.name = name;
    this.lastName = lastName;
    this.indexNumber = indexNumber;
    this.grades = grades;

    this.getName = function () {
        return name;
    }

    this.getLastName = function () {
        return lastName;
    }

    this.getAvgOfGrades = function () {
        let sum = 0;
        for (let i = 0; i < grades.length; i++) {
            sum +=grades[i];
        }
        return sum/grades.length;
    }
}

let student = new Student('Jan', 'Kowalski', 's11111', [2,3,4,5]);

console.log(student.getName());
console.log(student.getLastName());
console.log(student.getAvgOfGrades());