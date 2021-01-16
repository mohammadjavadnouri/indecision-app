console.log("app.js is running!");

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();
  //console.log("form submitted!");
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderListApp();
  }
};

const onRemoveAll = () => {
  app.options = [];
  renderListApp();
};

const appRoot = document.getElementById("app");

const renderListApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle} </p>}
      <p>{app.options.length > 0 ? "Here are your options:" : "No Options"}</p>
      <button onClick={onRemoveAll}>Remove All</button>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
      <p>till now length of options array: {app.options.length}</p>
    </div>
  );
  ReactDOM.render(template, appRoot);
  console.log("optionnnsssssss: ", app.options);
  console.log("optionnnsssssss: ", app.options.length);
};

renderListApp();
