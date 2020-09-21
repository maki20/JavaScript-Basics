'use strict';

{　
   document.querySelector('button').addEventListener('click', () => {
   　　const item1 = document.querySelectorAll('li')[1];
      
      //item1.remove();     // 一部の古いブラウザでは使えない。

      //親Node.removeChild();
      document.querySelector('ul').removeChild(item1);

   });
}   

