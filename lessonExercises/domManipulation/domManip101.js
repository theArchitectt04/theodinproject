const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content'

container.appendChild(content);



const paragraph = document.createElement('p')
paragraph.classList.add('red-paragraph');
paragraph.textContent = 'Hey I\'m red'
paragraph.style.color = 'red';

container.appendChild(paragraph);



const heading3 = document.createElement('h3')
heading3.classList.add('blue-h3');
heading3.textContent = 'Hey I\'m a blue h3'
heading3.style.color = 'blue';

container.appendChild(heading3);



const customDiv = document.createElement('div');
customDiv.style.backgroundColor = 'pink';
customDiv.style.border = '2px solid black';

    const h1Div = document.createElement('h1');
    h1Div.textContent = "I'm in a div";
    customDiv.appendChild(h1Div);

    const pdiv = document.createElement('p');
    pdiv.textContent = 'I\'m in the div too';
    customDiv.appendChild(pdiv);

container.appendChild(customDiv);

