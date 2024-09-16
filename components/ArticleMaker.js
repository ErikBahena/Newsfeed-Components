import {updateArticles, data} from './Article.js'

const articleForm = document.querySelector(".articleMaker");
const makeArticleBtn = articleForm.querySelector("button");

function gatherFormData(form) {
  const title = form.querySelector("#title");

  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const firstParagraph = form.querySelector("#firstParagraph");
  const secondParagraph = form.querySelector("#secondParagraph");
  const thirdParagraph = form.querySelector("#thirdParagraph");

  function clearInputs() {
    [title, firstParagraph, secondParagraph, thirdParagraph].forEach(
      (el) => (el.value = "")
    );
  }

  return {
    title: `${title.value}`,
    date,
    firstParagraph: `${firstParagraph.value.trim()}`,
    secondParagraph: `${secondParagraph.value.trim()}`,
    thirdParagraph: `${thirdParagraph.value.trim()}`,
    clearInputs,
  };
}

makeArticleBtn.addEventListener("click", function () {
  const newArticleData = gatherFormData(articleForm);
  data.push(newArticleData);
  newArticleData.clearInputs();
  updateArticles(data)

});