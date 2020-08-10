const DataBase = require('./db')
const createProffy = require('./createProffy')


DataBase.then(async(db)=>{
 //inerir dados

    proffyValue ={
        name:"Diego Fernandes",
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp:"6495953345",
        bio:"Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject:"1",
        cost:"20",
       //proff id virá pelo banco de dados
    }

    classScheduleValues = [
        {
            weekday:1,
            time_from:720,
            time_to:1220
        },
        
        {
            weekday:0,
            time_from:520,
            time_to:1220
     },
        
 ]
    
//await createProffy(db,{proffyValue,classValue,classScheduleValues})
 // consultar dadosnpm
//todo os proffys
const slectedProffys = await db.all("SELECT * FROM proffys")
//console.log(slectedProffys)
 
//consultar as classes de um determinado professor
//e trazer junto os dados do professor
const selectClassesAndProffys = await db.all(`
        SELECT classes.*,proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
`)
//console.log(selectClassesAndProffys)

//horario que apessoa trabalha e da 8 ás 18
//o horario do time_from (8h) prescisa ser antes ou igual ao horário solicitado
//o time_to prescisa ser acima
const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        Where class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <="520"
        AND class_schedule.time_to > "520"

`)  

console.log(selectClassesSchedules)

})