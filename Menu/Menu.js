/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
// const menuComponent = document.querySelector('.header');

// menuItems.forEach(element =>{
//   menuComponent.appendChild(createMenu(element))
// })

function createMenu(items){
  //define new elements from teh template above
  const menuBox = document.createElement('div');
  const uList = document.createElement('ul');


  //add classes
  menuBox.classList.add('menu');

  for (let i=0; i <items.length; i++){
    let li = document.createElement('li');
    uList.appendChild(li);
    li.textContent = items[i];
  }

  //add an event listener for the toggle button
  const menuToggle = document.querySelector('.menu-button');

  menuToggle.addEventListener('click', (e) =>{
    console.log('button clicked');
    menuBox.classList.toggle('menu--open');
  })

  const header = document.querySelector('.header');
  header.appendChild(menuBox);
  menuBox.appendChild(uList);

  return menuBox
}

createMenu(menuItems);


//append the children
  // menuBox.appendChild(uList);
  // uList.appendChild(liList);
  //do this ^ in the for loop

  //set text content
  // liList.textContent = menuItems;
  // console.log(liList);
  //do this ^ in the for loop

    // const menuList = '<ul>'
  
  // menuItems.forEach(function(item){
  //   console.log(menuList);
  //   menuList += '<li>' + item + '<li>';
  // });
  // menuList += '</ul>';
  // document.querySelector('.menu').innerHTML = menuList;

  
  // console.log(`hello`);

    // menuToggle.addEventListener('click', (e) =>{
  //   console.log('button clicked')
  // })