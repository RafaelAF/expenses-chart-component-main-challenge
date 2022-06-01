let maior = 0;
    let indice = 0;
    const altura = document.querySelectorAll(".height");
    const txt = document.querySelectorAll(".text-muted");
    let dias;
    let num;

      fetch("./data.json")
        .then(function (resp) {
          return resp.json();
        })
        .then(function(data){
          const dados = data;
          dados.forEach((props, index, array) => {
            const percent = props.amount;
            const days = props.day;
            if(percent>maior){
              maior = percent;
              indice = index;
            }
            document.querySelectorAll('.height')[index].style.height = (2 * percent)+'px';
            document.querySelectorAll('.text-muted')[index].innerHTML = days;
            document.querySelectorAll('.height')[index].setAttribute('title', percent);

            // fazer verificação do maior para fazer efeito hover
            

            /*console.log(percent) // valores do json item a item
            console.log(days)*/
          });
          document.querySelectorAll('.height')[indice].style.backgroundColor = 'hsl(186, 34%, 60%)';
          document.querySelectorAll('.height')[indice].classList.add('maior');
          
        })
        .catch((error)=>{
          console.log('deu problema')
          console.log(error)
        })
        /*$(function () {
          $('[data-bs-toggle="tooltip"]').tooltip()
        })*/
    