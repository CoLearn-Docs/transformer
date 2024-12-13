import { pipeline } from "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.0.0";

document.querySelector("#load").addEventListener("click", () => {
  loadModel();
});

document.querySelector("#run").addEventListener("click", () => {
  runModel();
});

let classifier;

const loadModel = async () => {
  const loadButton = document.querySelector("#load");
  loadButton.textContent = "Loading...";
  loadButton.disabled = true;

  try {
    classifier = await pipeline("sentiment-analysis");
    loadButton.textContent = "Model Loaded!";
    loadButton.style.backgroundColor = "#2196F3";
  } catch (error) {
    loadButton.textContent = "Load Failed";
    loadButton.style.backgroundColor = "#f44336";
  }
};

const runModel = async () => {
  if (!classifier) {
    alert("Please load the model first!");
    return;
  }

  const inputText = document.querySelector("#input_box").value;
  if (!inputText.trim()) {
    alert("Please enter some text!");
    return;
  }

  try {
    let result = await classifier(inputText);
    document.querySelector("#output_box").value = result[0].label;
  } catch (error) {
    document.querySelector("#output_box").value = "Error occurred";
  }
};

let inputText = "I love transformers!";
document.querySelector("#input_box").value = inputText;
document.querySelector("#input_box").addEventListener("input", (e) => {
  inputText = e.target.value;
});
