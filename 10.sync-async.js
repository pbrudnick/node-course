function readABlogPost(done) {
  setTimeout(function () {
    done("leí un lindo post");
  }, 3000)
}

function readABook(done) {
  setTimeout(function () {
    done("me leí un libro");
  }, 5000)
}
  
function run() {
  console.log("empieza secuencial:");
  readABlogPost((res) => {
    console.log(res);
  
    readABook((res) => {
      console.log(res);

      console.log("ahora async:");

      readABlogPost((res) => {
        console.log(res);
      });
      
      readABook((res) => {
        console.log(res);
      });
    });
  });
}

run();


