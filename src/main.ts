(async function render(){
  const windowPathName = window.location.pathname.split('/')[1]
  
  getPostHtml(windowPathName)
    .then(resp => resp.text())
    .then(htmlString => {
      (document.getElementById("root") as HTMLElement).innerHTML = htmlString
    })
    .catch(error => console.error(error))
})()


async function getPostHtml(n: string): Promise<Response>{
  const file = `post-${n}.html`
  const htmlResp = await fetch(`./posts/${file}`)
  return htmlResp
}
