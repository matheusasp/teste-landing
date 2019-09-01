


var f1         = document.getElementById('f1');
var btn        = document.getElementById('btn');
var btnvoltar  = document.getElementById('btnvoltar');
var nome       = document.getElementById('nome');
var email      = document.getElementById('email');
var telefone   = document.getElementById('telefone');
var txterror   = document.getElementById('txterror');
var txtsucess  = document.getElementById('txtsucess');

btn.addEventListener('click', ()=>{
      if(!nome.value || !email.value ||!telefone.value){
            txterror.style.display= 'block';

      }
      if(nome.value && email.value && telefone.value){
          txterror.style.display  = 'none';
          f1.style.display        = 'none';
          txtsucess.style.display = 'block';
          
      }
     })

 btnvoltar.addEventListener('click', ()=>{
       txtsucess.style.display = 'none';
       f1.style.display        = 'block';
 })    


/*
 img3{
            position: relative;
            top: -120px;  
            left: -600px;
            height: 30%;
            width : 30%;
        }         
        */