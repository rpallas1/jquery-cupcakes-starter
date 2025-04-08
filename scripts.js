let cupcakesCollection = null;

const fetchCupcakes = () => {
  $.ajax({
    url: "https://6f186305-ab26-4839-b806-380e3560e049.mock.pstmn.io/cupcakes.json",
  })
    .done((data) => {
      displayCupcakes(data);
      cupcakesCollection = data;
    })
    .fail(() => {
      $("#cupcakes")
        .empty()
        .append(
          "<div>There was a problem with the server. Please try again.</div>",
        );
    });
};

const displayCupcakes = (cupcakes) => {
  let $cupcakeSection = $("#cupcakes");
  let html = "";

  $cupcakeSection.empty();

  for (const cupcake of cupcakes) {
    html += `
    <section>
      <img src="${cupcake.image}" alt="${cupcake.alt}" />
      <h4>${cupcake.name}</h4>
      <b>Ingredients:</b>
      <p class="ingredients">${cupcake.ingredients}</p>
      <b>${cupcake.frosting} Frosting</b>
      <p class="frosting">${cupcake.frostingIngredients}</p>
    </section>
    `;
  }

  $cupcakeSection.html(html);
};

$(() => {
  fetchCupcakes();
});
