Promise.resolve().then((res) => {
    throw new Error("error 1");
  }, (err) => {
    console.log("err inside then:", err);
  });

Promise.resolve().then((res) => {
  return Promise.resolve()
    .then(() => {
      throw("error 2");
    });
  })
  .catch((err) => {
      console.log("get an error", err);
  })