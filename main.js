const linksSocialMedia = {
  github: "AdamsCastillo",
  youtube: "AdamsCastillo",
  facebook:"AdamsCastillo",
  instagram:"AdamsCastillo",
  twitter: "AdamsCastillo"
 }

 function chageSocialMediaLinks(){
    for(let li of socialLinks.children){
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`       
   }
  } 
  
  chageSocialMediaLinks()

 function getGitHubProfileInfos() {
   const url = `https://api.github.com/users/${linksSocialMedia.github}`
   
   fetch(url)
      .then(response => response.json())
      .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userImage.src = data.avatar_url
        userLogin.textContent = data.login        
      })  
   }
   
   getGitHubProfileInfos()