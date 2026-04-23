fetch('data.json')
  .then(res => res.json())
  .then(data => {
    let html = '';
    data.forEach(p => {
      html += `
        <div class="card">
          <img src="${p.imagen}">
          <h3>${p.producto}</h3>
          <p>$${p.precio}</p>
        </div>
      `;
    });
    document.getElementById("lista").innerHTML = html;
  });
