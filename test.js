

const container = document.querySelector("#container")

const contentDiv = document.createElement("div")

const innerDiv = document.createElement("div")
const par = document.createElement("p")
const head = document.createElement("h1")

const par1 = document.createElement("p")
const head1 = document.createElement("h1")

innerDiv.classList.add("innerD")
head.classList.add("head")
head1.classList.add("head")
par1.classList.add("par")
par1.classList.add("par")
contentDiv.classList.add("content")


innerDiv.style.border = "1px solid black"
par.style.backgroundColor = "red"
head.style.backgroundColor = "blue"
// contentDiv.style.display =flex
// contentDiv.style.flexDirection =row

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
contentDiv.textContent = "First one i have made"
par.textContent = "the paragraph"
head.textContent = "hy, Im header"
par1.textContent = "the paragraph1"
head1.textContent = "hy, Im header1"


innerDiv.appendChild(par1)
innerDiv.appendChild(head1)

container.appendChild(contentDiv)
container.appendChild(par)
container.appendChild(head)
container.appendChild(innerDiv)

