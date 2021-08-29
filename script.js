const tagsEl=document.getElementById('tags')
const textarea= document.getElementById('textarea')

//automatic focus
textarea.focus()

//listening for the press down and let go
textarea.addEventListener('keyup',(e)=>{
    createTags(e.target.value)

    if(e.key==='Enter'){
        setTimeout(()=>{
            e.target.value=''
        },10)
        randomSelect()
    }
})

function createTags(input){
    //filter without empty strings and cannot be white spaces
   const tags= input.split(',').filter(tag=>tag.trim()!=='').map(tag=>tag.trim())

   //clear before we proceed anything
   tagsEl.innerHTML=''

   tags.forEach(tag=>{
       const tagEl=document.createElement('span')
       tagEl.classList.add('tag')
       tagEl.innerText=tag

       //div with the id tags(1st line), we are adding each of those tagEl to tagsEl
       tagsEl.appendChild(tagEl)
   })
}


function randomSelect(){
    //30 times will be highlighted and then it stops
   const times=30
    
   const interval=setInterval(()=>{
       //pick a randomTag
       const randomTag=pickRandomTag()

       highlightTag(randomTag)

       //after 100ms it unhighlights the tag, but it keeps going in highlighting other tags
       setTimeout(()=>{
            unHighlightTag(randomTag)
       },100)

   },100);


   setTimeout(()=>{
        clearInterval(interval)
        setTimeout(()=>{
            const randomTag=pickRandomTag()
            highlightTag(randomTag)
        })
   },times*100)
}

function pickRandomTag(){
    //picking up all the spans of class tag(line 28)
    const tags=document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()*tags.length)]
}

function highlightTag(tag){
    tag.classList.add('highlight')
}

function unHighlightTag(tag){
    tag.classList.remove('highlight')
}


























