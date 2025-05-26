import './style.css'
import { format } from "date-fns";
const app = document.querySelector("#app");
const form = document.getElementsByTagName("form")[0];
async function fetchArticles() {
  try {
    const response = await fetch('https://vexfoiiqufvkzdavwwkh.supabase.co/rest/v1/article', {
      headers: {
        apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZleGZvaWlxdWZ2a3pkYXZ3d2toIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzY1NTIxOCwiZXhwIjoyMDYzMjMxMjE4fQ.HRZX_zqR3YXrhWnqNC4BLjS8948BsOG90Xn8Cwd2K1w',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZleGZvaWlxdWZ2a3pkYXZ3d2toIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzY1NTIxOCwiZXhwIjoyMDYzMjMxMjE4fQ.HRZX_zqR3YXrhWnqNC4BLjS8948BsOG90Xn8Cwd2K1w',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    return data;

  } catch (error) {
    console.error(error);
  }
}
async function renderArticles() {
  const data = await fetchArticles();
  let html = '';
  for (let i = 0; i < data.length; i++) {
    const article = data[i];
    html +=
      '<div class="article">' +
      '<h2>' + article.title +
      '</h2>' +
      '<h4>' + article.subtitle + '</h4>' +
      '<p><strong>Autor:</strong> ' + article.author + '</p>' +
      '<p><strong>Data:</strong> ' + format(article.created_at, 'dd-MM-yyyy') + '</p>' +
      '<p>' + article.content + '</p>' +
      '<hr>' +
      '</div>';
  }
  app.innerHTML = html;
}

renderArticles();

async function createNewArticle(title, subtitle, author, content) {
  try {
    const response = await fetch('https://vexfoiiqufvkzdavwwkh.supabase.co/rest/v1/article', {
      method: 'POST',
      headers: {
        apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZleGZvaWlxdWZ2a3pkYXZ3d2toIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzY1NTIxOCwiZXhwIjoyMDYzMjMxMjE4fQ.HRZX_zqR3YXrhWnqNC4BLjS8948BsOG90Xn8Cwd2K1w',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZleGZvaWlxdWZ2a3pkYXZ3d2toIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzY1NTIxOCwiZXhwIjoyMDYzMjMxMjE4fQ.HRZX_zqR3YXrhWnqNC4BLjS8948BsOG90Xn8Cwd2K1w',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, subtitle, author, content })
    });

    if (response.status !== 201) {
      throw new Error(`Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
};


const formAction = function (e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const subtitle = document.getElementById("subtitle").value;
  const author = document.getElementById("author").value;
  const content = document.getElementById("content").value;
  const created_at = document.getElementById("date").value;
  createNewArticle(title, subtitle, author, content)

}
form.addEventListener('submit', formAction);