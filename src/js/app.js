const btnShare = document.querySelector("button");
const articleFooter = document.querySelector(".article-footer");
const articleFooterAuthor = document.querySelector(".article-footer-author");
const articleFooterShare = document.querySelector(".article-footer-share");

btnShare.addEventListener('click', event =>{
   articleFooter.classList.toggle('share-on');
   articleFooterAuthor.classList.toggle('hide');
   articleFooterShare.classList.toggle('hide');
});
