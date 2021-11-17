let btn = document.getElementById('btn');

btn.addEventListener("click" , calculate);

function calculate() {

  let price = document.getElementById('price').value;
  let  service= document.getElementById('service').value;
  let  people_sharing= document.getElementById('people_sharing').value;


            // edge cases

  if(price===""){
          alert("Enter value");
          return;
    }
    if (people_sharing < "0") {
      alert('please enter valid number of people')
    }
    if (people_sharing==="" || people_sharing==="0") {
        people_sharing = 1;
    }




          // calculations
 console.log(people_sharing);

  let tip_total = parseFloat(price *(service/100));

  tip_total = tip_total.toFixed(2);

  let number_people = parseFloat(tip_total/people_sharing);
  number_people = number_people.toFixed(2);

    let total_price = price+tip_total;

    if (people_sharing===1) {
        number_people = tip_total;
    }
  document.getElementById('tip_amount_text').value = tip_total;
  document.getElementById('tip_amount_each').value = number_people;




};
