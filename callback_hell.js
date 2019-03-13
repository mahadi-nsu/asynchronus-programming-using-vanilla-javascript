
getUser(1,(user)=>{
  
  console.log('user : ',user);
  
  getGithubRepo(user.githubUserName,(repos)=>{
     console.log("The github repos are ",repos); 
     
     getCommits(repos.repo1 , (commits)=>{
       
       console.log("The commits of the repo are:",commits);
       
       getStarOfCommit(commits.commit2,(stars)=>{
         console.log("The stars of the commits are...",stars);

           getSomethingElse(bla.bla,(blas)=>{
              console.log("bla bla bla");
           });
       });
        
     });      callback hell!!!
  });   
  
});

function getUser(id,callback){
  setTimeout(()=>{
  console.log("Reading a user from the database....");
  callback({id : id,githubUserName : "Mahadi hassan"})
},2000);

}

function getGithubRepo(username,callback){
  setTimeout(()=>{
    console.log("get datas from github repos....");
    callback(['repo1','repo2','repo3']);
  },2000)
  
}


function getCommits(repo,callback){
  setTimeout(()=>{
    console.log("Get the commits....");
    callback(['commit1','commit2']);
  },3000)
}


function getStarOfCommit(commit,callback){
  setTimeout(()=>{
    console.log("Get the stars....");
    callback([20,30,40]);
  },40000)
}

function getSomethingElse(bla, blabla){
  setTimeout(()=>{
    console.log("bla bla...")
  },5000);
}




