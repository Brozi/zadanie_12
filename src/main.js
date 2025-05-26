import './style.css'

async function fetchArticles() {
  try {
    const response = await fetch('https://vexfoiiqufvkzdavwwkh.supabase.co/rest/v1/article', {
      headers: {
        apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZleGZvaWlxdWZ2a3pkYXZ3d2toIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzY1NTIxOCwiZXhwIjoyMDYzMjMxMjE4fQ.HRZX_zqR3YXrhWnqNC4BLjS8948BsOG90Xn8Cwd2K1w',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZleGZvaWlxdWZ2a3pkYXZ3d2toIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzY1NTIxOCwiZXhwIjoyMDYzMjMxMjE4fQ.HRZX_zqR3YXrhWnqNC4BLjS8948BsOG90Xn8Cwd2K1w',
        ContentType: 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    return data;

  } catch (error) {
    console.error(error);
  }
}
async function renderArticles(data) {
  const html = ''
  for (const i = 0; i < data.length; i++) {
    const article = data[i]
    html = +
      '<div>' +
      '<p>' + article.title + '</p>'
      + '</div>'
  }
}
const data = fetchArticles()
renderArticles(data)

document.querySelector('#app').innerHTML = `
  
`
