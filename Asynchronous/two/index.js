fetch(`https://api.github.com/users/bel7aG`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });

  const a = {
    a: 1,
    b: 22,
    c: 'done',
    d: "DONE"
  };

const b = Object.values(a).filter((_, index) => (index !== 1 && _ !== 1) && _ !== "done".toUpperCase());
console.log(b);
