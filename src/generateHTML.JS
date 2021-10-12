generateHTML = data => {
  console.log('Im in the HTML Rn!', data)
  let cards = [];
  for (let i = 0; i < data.length; i++){
    const employee = data[i];
    const role = employee.getRole();
    switch (role) {
      case role === 'Manager':
        const managerCard = printManager(employee);
        cards.push(managerCard);
        break;
      case role === 'Engineer':
        const engineerCard = printEngineer(employee);
        cards.push(engineerCard);
        break;
      case role === 'Intern':
        const internCard = printIntern(employee);
        cards.push(internCard);
        break;
      default:
      ''
        break;
    }
  }
  const teamCards = cards.join('')
  return printTeamPage(teamCards)
  
}

const printManager = manager => {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h1>${manager.name}</h1>
      <h2><i class="fas fa-mug-hot coffee-icon">Manager</h2></i> 
    </div>
    <div class="card card-list" style="width: 15rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
          <li class="list-group-item">Office Number: ${manager.office}</li>
        </ul>
      </div>
    `
}

const printEngineer = engineer => {
  return `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h1>${engineer.name}</h1>
    <h2><i class="fas fa-mug-hot coffee-icon">Manager</h2></i> 
  </div>
  <div class="card card-list" style="width: 15rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
        <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
      </ul>
    </div>
  `
}

const printIntern = intern => {
  return `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h1>${intern.name}</h1>
    <h2><i class="fas fa-mug-hot coffee-icon">Manager</h2></i> 
  </div>
  <div class="card card-list" style="width: 15rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
        <li class="list-group-item">School: ${intern.school}</li>
      </ul>
    </div>
  `
}

const printTeamPage = teamCards => {
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="dist\styles.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/8e4832ddb4.js" crossorigin="anonymous"></script>
        <title>CLI Team Creator</title>
    </head>
    <body>
    <header>
    <nav>
        <h1>My Team</h1>
    </nav>
    </header>
    ${teamCards}
    </body>
    </html>
    </html>
`
}

module.exports = generateHTML;