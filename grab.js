let button = document.getElementById('save');
let users = []
 function addUser(){
     let applicant={
         name: document.getElementById('name').value,
         surname: document.getElementById('surname').value,
         id: document.getElementById('idno').value,
         choice1: document.getElementById('choice1').value,
         choice2: document.getElementById('choice2').value,
         choice3: document.getElementById('choice3').value,
         passcode: Date.now(),
         waiting_for_decision: "Waiting for decision",
         firm_offer: "firm Offer",
         unsuccessful: "Unsuccessful",
         waiting_for_results: "Waiting for results"
     }
     users.push(applicant);
     let applied = JSON.stringify(users);
     localStorage.setItem('Esgela_Applicants',applied);
     document.querySelector('form').reset();
 }
 button.addEventListener('click',(e)=>{
     e.preventDefault();
     addUser();
 });