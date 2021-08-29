'use strict';

{   
    
    
    function setWord() {
        word = words.splice(Math.floor(Math.random() * words.length),1)[0];
        target.textContent = word;
        loc = 0;
      }
      //問題を作る
      let starttime;
      let　isPlaying=false;
      document.addEventListener("click",()=>{
          if(isPlaying===true){
              return;
          }
        setWord();
        starttime=Date.now();
      })
      //クリックでゲームスタート
    let loc =0;
    const words=[
        "red",
        "blue",
        "pink"
    ];
    let word;

    const target = document.getElementById('target');

    
   document.addEventListener("keydown",e=>{
   if(e.key!==word[loc]){
       return;
   }
   //スペルミスをしたら進まない

   loc++;
       target.textContent ="_".repeat(loc)+word.substring(loc);

       if(word.length===loc){
           if(words.length===0){
            const elapsedTime = ((Date.now() - starttime) / 1000).toFixed(2);
        const result = document.getElementById('result');
        result.textContent = `Finished! ${elapsedTime} seconds!`;
               
               return;
           }
           //表示
           setWord();
       }
    });
}