const header = () => {
  return `
  <nav>
    <br>
    <div class="row">
      <div class="col-lg-8">
        <a href="#"><h1>PROGAME</h1></a>
      </div>
      <div class="col-lg-4">
        <div id="searchbar" class="d-flex justify-content-between flew-row align-items-center form-div">
          <i class="fas fa-search mx-3"></i>
          <input type="text" id="findgame" value="" placeholder="Find a game..." class="form-control"><br><br>
        </div>
      </div>
    <br>
  </nav>
  `;
};

const footer = () => {
  return `
  <footer class="d-flex justify-content-end mr-3 mt-3">
    <p>Kents Brockman © 2020</p>
  </footer>
  `;
};

export { header, footer };
