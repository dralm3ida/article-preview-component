const btnShare = document.querySelectorAll("#btn-share1, #btn-share2");
const articleFooterAuthor = document.querySelector(".article-footer-author");
const articleFooterShare = document.querySelector(".article-footer-share");
const articleFooterTooltip = document.querySelector(".article-footer-tooltip");

const laptopSize = 1024;

var vw = null;

btnShare.forEach(btn => {
   btn.addEventListener('click', event =>{
      if ( vw < laptopSize ){
         articleFooterAuthor.classList.toggle('hide-mobile');
         articleFooterShare.classList.toggle('hide-mobile');
      } else {
         articleFooterTooltip.classList.toggle('hide-desktop');
         btn.classList.toggle('btn-share-open');
         btn.children[0].classList.toggle('svg-background');
      }
   });
});

function updateVw(){
   vw = Math.max(window.innerWidth || 0, document.documentElement.clientWidth || 0);
}
