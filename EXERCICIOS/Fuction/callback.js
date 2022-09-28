function ArrozComPera(ovo) {
  console.log("antes do call back");
  ovo();
  console.log("Depois do call back");
}

ArrozComPera(() => {
  console.log("chama no callback");
});
