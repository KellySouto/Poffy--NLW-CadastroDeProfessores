const subjects = [

    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Portugês ",
    "Quimica",
]

const weekdays =[
   
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
]
//funcionalidades da aplicação servidor

function getSubject(subjectNumber){
        const position = +subjectNumber - 1
        return subjects[position]
}

function convetHoursToMinutes(time){
    const [hour, minutes] = time.split(":")
    return Number((hour * 60)+  minutes)

}

module.exports ={
    subjects,
    weekdays,
    getSubject,
    convetHoursToMinutes
}