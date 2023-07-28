const ps = document.body.getElementsByTagName("p");

document.body.insertBefore(ps[2], ps[0], ps[1]);

const h1 = document.createElement("h1");
const text = document.createTextNode("hello world");

h1.appendChild(text);
document.body.appendChild(h1);

function createNode(type, child) {
  const node = document.createElement(type);
  const text = document.createTextNode(child);

  node.appendChild(text);

  return node;
}

const author = createNode("strong", "- Karl Popper");

const cita = document.getElementById("quote");
cita.appendChild(author);
