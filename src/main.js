(async function render(){

  const windowPathName = window.location.pathname.split('/')[1]

  console.log(windowPathName)

  const html = await getPostHtml(windowPathName).then(resp => resp.text())

  console.log(html)

  document.getElementById("root").innerHTML = html


})()

async function getPostHtml(n){
  const file = `post-${n}.html`
  const html = await fetch(`./posts/${file}`)

  return html
}
