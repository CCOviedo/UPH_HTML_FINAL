const TEMPLATE_LISTADO = "<ul>{{each(options)}}<li>{{@this.name}}</li>{{/each}}</ul>"

const pintaUsuarios = (obj) => {
  const listado = Sqrl.Render(TEMPLATE_LISTADO, obj)
  document.getElementById('listado').innerHTML = listado
}

document.addEventListener('DOMContentLoaded', ()=> {
  fetch('https://jsonplaceholder.typicode.com/users').then(res => {
    return res.json()
  }).then(pintaUsuarios)
})