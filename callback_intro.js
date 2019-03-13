
getUser(1,(user)=>{
  
  console.log('user : ',user);
  
  getGithubRepo(user.githubUserName,(datas)=>{
     console.log("The github repos are ",datas);  
  })
  
});



function getUser(id,callback){
  setTimeout(()=>{
  console.log("Reading a user from the database");
  callback({id : id,githubUserName : "Mahadi hassan"})
},2000);

}

function getGithubRepo(username,callback){
  setTimeout(()=>{
    console.log("get datas from github repos");
    callback(['repo1','repo2','repo3']);
  },2000)
  
}