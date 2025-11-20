import { postsMetaData } from '../src/main';

function postExists(id: string): boolean {
  return postsMetaData.some((post) => post.id === id);
}

export { postExists };
