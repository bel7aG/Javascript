fetch(`https://api.github.com/users/bel7aG`)
  .then(response => response.json())
  .then(data => {
    const dataArray = Object.values(data).map(item => document.write(`<p>${item}</p>`));
  });
