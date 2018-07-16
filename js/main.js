var form = document.getElementById('myForm');

var data ={
   open :[],
   close :[]

}


form.addEventListener('submit',function(){
    var descriptionValue = document.getElementById('descriptionValue').value;
    var serverityValue = document.getElementById('serverityValue').value;
    var assignedToValue = document.getElementById('assignedToValue').value;
  if(!descriptionValue && !serverityValue && !assignedToValue) return false;


     var openData = {
       description : descriptionValue,
       serverity : serverityValue,
       assignedTo : assignedToValue
     }
     data.open.push(openData)
     localStorage.setItem('data',JSON.stringify(data));
     

    submitIssue(event,descriptionValue,serverityValue,assignedToValue);
    form.reset();
});


function submitIssue(e,dValue,sValue,aValue){
    e.preventDefault();

    var mainBox = document.getElementById('issueOpen');

    var div = document.createElement('div');
       div.classList.add('jumbotron');

    var h4 = document.createElement('h4');
    h4.innerHTML = dValue;

    var p = document.createElement('p');
    var span = document.createElement('span');
    span.classList.add('S');
    span.innerHTML = sValue;

    var span2 = document.createElement('span');
    span2.classList.add('A');
    span2.innerHTML = aValue;
    p.appendChild(span);
    p.appendChild(span2);

    var buttonClose = document.createElement('button');
    buttonClose.innerText ="Close";
    buttonClose.classList.add('btn');
    buttonClose.classList.add('btn-warning');
    buttonClose.classList.add('btn-md');
    buttonClose.addEventListener('click',closeIssue);

    var buttonDelete = document.createElement('button');
    buttonDelete.innerText ="Delete";
    buttonDelete.classList.add('btn');
    buttonDelete.classList.add('btn-danger');
    buttonDelete.classList.add('btn-md');
    buttonDelete.addEventListener('click',deleteIssue);

    div.appendChild(h4);
    div.appendChild(p);
    div.appendChild(buttonClose);
    div.appendChild(buttonDelete);
    mainBox.appendChild(div);
  console.log(mainBox);
}

function closeIssue(){
  console.log('close issue');
}

function deleteIssue()
{
  var item = this.parentNode;
  var parent = this.parentNode.parentNode;
  var description = document.querySelector('h4').innerText;
  var S = document.querySelector('.S').innerText;
  var A = document.querySelector('.A').innerText;
      console.log(description + ' '+ S +' '+A);
      var openData = {
        description : description,
        serverity : S,
        assignedTo : A
      }
  data.open.splice(data.open.indexOf(openData),1);
  localStorage.setItem('data',JSON.stringify(data));
  parent.removeChild(item);
}