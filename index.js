const form=document.querySelector("#header-form")
const nam=document.querySelector("#header-input")
const pasword=document.querySelector("#header-inputcha")
const btnjon= document.querySelector("#header-btn")

btnjon.addEventListener("click",(e)=>{
    e.preventDefault()
    fetch("https://autoapi.dezinfeksiyatashkent.uz/api/auth/signin", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    phone_number: nam.value,
    password: pasword.value,
  }),
}).then(response => response.json())
  .then(data => {
    localStorage.setItem("access_token", data.data.tokens.accessToken.token )
    window.location.href="home.html"
  })
})
