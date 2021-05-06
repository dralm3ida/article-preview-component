const btnShareOff = document.querySelector("#btn-share-off");
const btnShareOn = document.querySelector("#btn-share-on");

const articleFooterAuthor = document.querySelector(".article-footer-author");
const articleFooterShare = document.querySelector(".article-footer-share");

console.log("init", articleFooterAuthor, articleFooterShare);

btnShareOff.addEventListener('click', event => {
   console.log("btnShareOff");
   articleFooterAuthor.classList.add('hide');
   articleFooterShare.classList.remove('hide');
});

btnShareOn.addEventListener('click', event => {
   console.log("btnShareOn");
   articleFooterAuthor.classList.remove('hide');
   articleFooterShare.classList.add('hide');
});