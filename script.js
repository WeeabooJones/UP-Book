let backButton = document.querySelector("#back")
let nextButton = document.querySelector("#next")
let randomButton = document.querySelector("#random")

let students = [
  {
profileImage:"https://media.gettyimages.com/photos/tree-against-white-background-picture-id887508916?s=612x612",
name:"Brian Garcia",
quote:"*Tree noises*",
superlative:"Best Tree"
},
  
  {
profileImage:"https://www.meme-arsenal.com/memes/b209db0b589969075f5379495cc22b2e.jpg",
name:"Nicholas Peter St.John Hylton",
quote:" 'BRO IT HAS CYANIDE IM DEAD' ",
superlative:"Best Government Name"
  },
  
  {
profileImage:"https://vignette.wikia.nocookie.net/naruto/images/b/b7/Sasuke_Part_3.png/revision/latest/scale-to-width-down/340?cb=20190224132913",
name:"Yadira Carillo",
quote:"*Something edgy*",
superlative:"Most Edgy"
  },
  
   {
profileImage:"https://external-preview.redd.it/AygEF-vTOSXFuEIdfKa4mhHGUNzCmrCPMdxPfyTDGwQ.png?auto=webp&s=b2fd5d95cb08b222a9f12605645840be29b9b19a",
name:"Thierno Diallo",
quote:" 'This opening was during the fillers at the end of part one of Naruto' ",
superlative:"Best Weeb"
  },
  
   {
profileImage:"https://i.imgur.com/repX9Hi.png",
name:"Nancy Martinez",
quote:"*Short noises*",
superlative:"Tallest short person"
  },
  
   {
profileImage:"https://www.incimages.com/uploaded_files/image/970x450/getty_533062576_366656.jpg",
name:"Ronel Franco",
quote:" 'I wanna start a vote kick' ",
superlative:"Most Toxic"
  },
  
   {
profileImage:"https://media.istockphoto.com/photos/desert-picture-id643942724?k=6&m=643942724&s=612x612&w=0&h=E-Dsw3ZWHrrOU88FVnrn1IjUxtI1e1CIQSqj57E2u1c=",
name:"Anthony Bello",
quote:" 'she responded' ",
superlative:"Most de-hydrated"
  },
  
   {
profileImage:"https://i.ytimg.com/vi/PMCejyucn78/maxresdefault.jpg",
name:"Jeordy Abrue",
quote:"*drawing noises*",
superlative:"Best Artist"
  }
]

let count=0


nextButton.addEventListener("click",()=>{
  console.log('next')
  document.querySelector("#pic").src=students[count].profileImage
  document.querySelector("#name").innerHTML=students[count].name
  document.querySelector("#quote").innerHTML=students[count].quote
  document.querySelector("#superlative").innerHTML=students[count].superlative
  count++
if(count == 8){
  count = 0
}
})

backButton.addEventListener("click",()=>{
  console.log('back')
  document.querySelector("#pic").src=students[count].profileImage
  document.querySelector("#name").innerHTML=students[count].name
  document.querySelector("#quote").innerHTML=students[count].quote
  document.querySelector("#superlative").innerHTML=students[count].superlative
 count--
 if (count<0){
   count = 7
 }
  })

randomButton.addEventListener("click",()=>{
  console.log('random')
  document.querySelector("#pic").src=students[Math.floor(Math.random() * students.length)].profileImage
  document.querySelector("#name").innerHTML=students[Math.floor(Math.random() * students.length)].name
  document.querySelector("#quote").innerHTML=students[Math.floor(Math.random() * students.length)].quote
  document.querySelector("#superlative").innerHTML=students[Math.floor(Math.random() * students.length)].superlative
  

})


