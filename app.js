



const div = document.querySelector("div");
import { collection, addDoc, getDocs , deleteField ,updateDoc, deleteDoc,  doc  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { db } from './config.js'; // Ensure karen ki path sahi hai

const form = document.querySelector("#form");
const input = document.querySelector('#input');


let arr = [];

function render(){



  div.innerHTML = '';
         for (let index = 0; index < arr.length; index++) {
           
          div.innerHTML += `
          
          <h1> TODO IS HERE ${arr[index]}</h1>
              <button class="editbtn">EDIT</button>
                  <button data-id="documentID" class="delbtn">DELETE</button>

          `
          
         }
        attached();


}



form.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("CHAL RHA HAI");

    try {
        const docRef = await addDoc(collection(db, "users"), {
            input: input.value,
            
        });

        arr.push(input.value)
        console.log(arr);
        
        
        render();
        console.log("Document written with ID: ", docRef.id , input.value);
  
        arr.pop();
        console.log("kati huwi array ="  + arr);
        
        arr.push({
           input : input.value,
          id : docRef.id
        });
        console.log("ZINDABAD" + arr);
        
      


    } catch (e) {
        console.error("Error adding document: ", e);
    }
});

async  function attached(){
  const edit = document.querySelectorAll(".editbtn");
const del = document.querySelectorAll(".delbtn");



del.forEach((btn , index)=>{


  btn.addEventListener("click" , async()=>{


console.log(arr);
const docId = event.target.getAttribute("data-id");

    await deleteDoc(doc(db, "users", arr[index].id));
 arr.splice(index , 1);
 console.log(arr);
 render();
 
   
  
  })


  const edit = document.querySelectorAll(".editbtn");


edit.forEach((btn , index) => {

btn.addEventListener("click", async()=>{

console.log("EDIT BH BARABR HY");
let updated = prompt("ENTER UPDATED VALUE HERE")
const washingtonRef = doc(db, "users", arr[index].id);

// Set the "capital" field of the city 'DC'
await updateDoc(washingtonRef, {
  capital: updated,
});

arr.splice(index , 1 , updated)

render();
})

})



})
}


let array = [];







if(arr.length === 0){
  

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
  array.push(doc.data());
  console.log(array);
});


  for (let index = 0; index < array.length; index++) {
      
         div.innerHTML += `
          
         <h1>${array[index].input}</h1>
         
         `
    
  } 
       } else {
        arr.push(input.value)
        console.log(arr);
        
     render();
                  
                 
       }



