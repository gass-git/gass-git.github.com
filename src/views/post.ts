import { getPostTitle, getPostHtml } from '../../engine/getters';

export default async function post(id: string): Promise<string> {
  let html = '';

  html += `<div class=padding-20>`;
  html += `<h1 class="capitalize-first">${getPostTitle(id)}</h1>`;
  html += await getPostHtml(id);
  html += `</div>`;

  return html;
}
