import INDEX_HTML from './index.html';
import ICON from './icon-nobg.png';

export default {
  async fetch(request) {
    const { pathname } = new URL(request.url);
    if (request.method !== "GET") {
      return new Response("Method Not Allowed", { status: 405 });
    }
 
    if (pathname === "/icon-nobg.png" || pathname === "/src/icon-nobg.png") {
      return new Response(ICON, {
        headers: { "content-type": "image/png" }
      });
    }
 
    if (pathname === "/" || pathname === "/index.html") {
      return new Response(INDEX_HTML, {
        headers: { "content-type": "text/html; charset=UTF-8" }
      });
    }
 
    return new Response("Not Found", { status: 404 });
  }
};
