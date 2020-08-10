//Procurar o botão
document.querySelector("#add-time")
//quando clicar no botão
.addEventListener('click',cloneField)

//executar uma ação
    function cloneField(){
        //duplicar os campos. que campo?
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

   //limpar os cmapos.Que campos?

   const fieds = newFieldContainer.querySelectorAll('input')
  
    //para cada campo limpar
    fieds.forEach(function(fieds) {
        //pega o field do momento e limpa e
        fieds.value=""
        
    });

    document.querySelector('#schedule-items').appendChild(newFieldContainer);


    }
