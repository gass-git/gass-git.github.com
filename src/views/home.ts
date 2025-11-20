import { postsMetaData } from '../main';

export default function home(): string {
  let html = '';

  postsMetaData.forEach((post) => {
    html += `
      <a href="${post.id}">
        <div class="post-card padding-20">
          <h2 class="capitalize-first">${post.title}</h2>
          <h3>${post.brief}</h3>
        </div>
      </a>
    `;
  });

  return html;
}
