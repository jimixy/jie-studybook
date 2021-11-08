Promise.resolve()
  .then(() => {
    console.log("1");
    Promise.resolve()
      .then(() => {
        console.log("1-1");
        return Promise.resolve();
      })
      .then(() => {
        console.log("1-2");
      });
  })
  .then(() => {
    console.log("2");
  })
  .then(() => {
    console.log("3");
  })
  .then(() => {
    console.log("4");
  })
  .then(() => {
    console.log("5");
  });
