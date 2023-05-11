/*1. USING JAVASCRIPT, create a <div> element
  2. add the "container" class
  3. append as a child, to the body*/
  
  const container = document.createElement('div');
  container.classList.add('container');
  document.body.appendChild(container);

  container.style.backgroundColor = 'lightsalmon';
  
  container.style.margin = '10px 0px';
  container.style.padding = '1px 15px';
  container.style.borderRadius = '5px';


/*1. USING JAVASCRIPT create 3 <p> elements
  2. fill them with the text...
  [1] "Yesterday was good" [2] "Today is great" [3] "Tomorrow will be better"
  3. append them as children, to the "container" above*/

  const paragraphElement1 = document.createElement('p');
  paragraphElement1.textContent = "Yesterday was good";
  paragraphElement1.style.color = "white";
  paragraphElement1.classList.add('paragraph');
  container.appendChild(paragraphElement1);

  const paragraphElement2 = document.createElement('p');
  paragraphElement2.textContent = "Today is great";
  paragraphElement2.style.color = "white";
  paragraphElement2.classList.add('paragraph');
  container.appendChild(paragraphElement2);

  const paragraphElement3 = document.createElement('p');
  paragraphElement3.textContent = "Tomorrow will be better";
  paragraphElement3.style.color = "white";
  paragraphElement3.classList.add('paragraph');
  container.appendChild(paragraphElement3);

  container.appendChild(document.createElement('br'));

/*Now, REFACTOR (update) the code above to use forEach on this array of strings:
  var copy = ["Yesterday was good", "Today is great", "Tomorrow will be better"];*/

  const copy = ["Yesterday was good", "Today is great", "Tomorrow will be better"];
  copy.forEach(copyItem => {
    let myNewP = document.createElement('p');
    myNewP.textContent =  copyItem;
    myNewP.classList.add('paragraph');
    myNewP.style.color = "white";
    container.appendChild(myNewP);
  })

/*1. create a button element
  2. set its text to be "enable dark mode"
  3. set style: 15px padding, no border, "black" background, "white" (text) color -- CAN YOU DO THIS WITH A LOOP?
  4. append as a child, to the "container" class div*/

  let myBtn = document.createElement('button');
  myBtn.textContent = "Enable dark mode";
  myBtn.style.borderRadius = '5px';
  const styles = {
    'padding': '15px',
    'border': 'none',
    'backgroundColor': 'darkcyan',
    'color': 'white'
  }
  
  document.body.appendChild(myBtn);
  for(let key in styles) {
    myBtn.style[key] = styles[key];
  }

/*1. add a click event listener to the black button
  - change the background color of the html "body" to "black"
  - change the background of ".container" to "#777" and color to white
  - change the button text to black, and the background to white*/

/*BONUS (CHALLENGING): 
   Once dark mode is enabled, can you write code to switch it back to light mode?
       HINT #1: create a boolean variable that indicates whether dark mode is active
       HINT #2: use this for an if statement inside your event listener
       HINT #3: change the button text as well, depending on the state*/

  let paragraphArray = document.querySelectorAll('.paragraph');
  let darkModeIsActive = false;

  myBtn.addEventListener('click', function() {
    if(!darkModeIsActive) {
      for (let p of paragraphArray) {
        p.style.color = 'darkred';
      }
      document.body.style.backgroundColor = 'darkslategray';
      container.style.backgroundColor = 'darksalmon';
      myBtn.style.color = 'maroon';
      myBtn.style.fontWeight = '600';
      myBtn.style.backgroundColor = 'plum';
      myBtn.textContent = 'Disable dark mode';
      darkModeIsActive = true;
    } else {
      for (let p of paragraphArray) {
        p.style.color = 'white';
      }
      document.body.style.backgroundColor = 'white';
      container.style.backgroundColor = 'lightsalmon';
      container.style.color = 'white';
      myBtn.style.color = 'white';
      myBtn.style.fontWeight = '400';
      myBtn.style.backgroundColor = 'darkcyan';
      myBtn.textContent = 'Enable dark mode';
      darkModeIsActive = false;
    }
  })

/*Personal Challenge: Make a new button and apply styles using the cssText property*/

  let btn = document.createElement('button');
  btn.textContent = "Enable cssText styles";
  document.body.appendChild(btn);

  let textStyles = "border: none; border-radius: 5px; margin-left: 20px; padding: 15px; color: white; background-color: darkcyan";
  let enabled = false;
  btn.addEventListener('click', () => {
    console.log(enabled);
    console.log(textStyles);
    if(enabled) {
      textStyles = "";
      btn.style.cssText = textStyles;
      enabled = false; 
    } else {
      textStyles = "border: none; border-radius: 5px; margin-left: 20px; padding: 15px; color: white; background-color: darkcyan";
      btn.style.cssText = textStyles;
      enabled = true;
    }
  })