const selectNode = document.querySelector("#sources");
export const makeSelectSources = dataSources => {
  let select = `<option selected value="">All sources</option>`;
  if (dataSources.sources.length == 0) {
    let emptySelect = `<option  value=''>Not sources found for the country</option>`;
    selectNode.innerHTML = emptySelect;
  } else {
    dataSources.sources.forEach(source => {
      select += `<option value=${source.id}>${source.name}</option>`;
    });
    selectNode.innerHTML = select;
  }
};
