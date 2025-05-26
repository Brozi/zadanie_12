import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

async function fetchArticles() {
  try {
    const response = await fetch('https://vexfoiiqufvkzdavwwkh.supabase.co', {
      headers: {
        apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZleGZvaWlxdWZ2a3pkYXZ3d2toIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzY1NTIxOCwiZXhwIjoyMDYzMjMxMjE4fQ.HRZX_zqR3YXrhWnqNC4BLjS8948BsOG90Xn8Cwd2K1w',
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}


document.querySelector('#app').innerHTML = `
  <div>
    Article

  </div>
`
