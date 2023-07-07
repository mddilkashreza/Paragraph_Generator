const input = document.getElementById("numOfwords");

const container = document.querySelector(".container");

const generatorWord = (n) => {
  let text = "";
  const letters = "ABCDEFHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < n; ++i) {
    const random = (Math.random() * 20).toFixed(0);
    text += letters[random];
    console.log(random);
  }
  return text;
};


let numOfwords;
const generatorPara = () => {
  numOfwords = Number(input.value);

  const para = document.createElement("p");
  let data ="";

  for (let i =0; i<numOfwords; ++i){
    const randomNumber = (Math.random() * 15 ).toFixed(0);
    data +=generatorWord(randomNumber);
    data += " ";
  }
 
  para.innerText = data;

  para.setAttribute("class", "paras");

  container.append(para);
};




