let content = document.getElementById('content');
const buttonAbout = document.getElementById('about');
const buttonKnowledge = document.getElementById('knowledge');
const buttonObjective = document.getElementById('objective');

function showKnowledge() {
  content.innerHTML = `
  <table>
    <thead>
        <th colspan="3">Conhecimentos</th>
    </thead>
    <tbody>
        <tr>
            <td colspan="2" class="list-knowledge">
            <ol type="a">
                <li>
                Inglês - Nível B2 (
                <a
                    href="https://www.britishcouncil.org.br/quadro-comum-europeu-de-referencia-para-linguas-cefr"
                    style="color: rgb(0, 0, 255)"
                    target="_blank"
                >
                    CEFR </a
                >)
                </li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>
                Aplicativos para escritório
                <ul>
                    <li>Excel</li>
                    <li>PowerPoint</li>
                    <li>Word</li>
                </ul>
                </li>
                <li>Ferramentas de desenvolvimento web</li>
            </ol>
            </td>
            <td>
            <iframe
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=felipe-bryan&layout=compact=true&theme=tokyonight"
                frameborder="0"
                class="iframe"
            >
            </iframe>
            </td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        </tbody>
    </table>`;

  buttonAbout.classList = ['button'];
  buttonKnowledge.classList = ['button active'];
  buttonObjective.classList = ['button'];
}

function showAbout() {
  content.innerHTML = `
  <main>
    <div class="index-content">
        <h1 class="profile-name">Felipe <span class="emphasis">Bryan Campos de Moraes</span></h1>
        <p>
            <address>
                <b>Endereço:</b> Rua Anna Ortega Traballi, 430 casa 37 - <span class="city"><b>São José dos Campos-SP</b></span><br>
            </address>                        
            <b>Telefone:</b> (12) 99737-9355
            <a href="https://api.whatsapp.com/send/?phone=%2B5512997379355&text&type=phone_number&app_absent=0" target="_blank"> 
                <img src="/assets/images/whatsapp-icon.png" alt="whatsapp" style="width: 16px; height: 16px;" title="Enviar whatsapp para Felipe">
            </a>                
        </p><hr>
        <p>
            Tenho ênfase na qualidade, precisão, organização e competência. Cooperativo, 
            sincero e leal.
            Cauteloso e preocupado. Focado no que é “correto”. Precavido, preciso, reativo.
        </p><br>
    </div>                    
    <figure>
        <a href="mailto:felipe.bryan@live.com" target="_blank" title="Enviar email para: felipe.bryan@live.com">
            <img src="/assets/images/outlook-icon.png" alt="outlook-icon" class="social-icon">
        </a>
        <a href="mailto:fbryancm@gmail.com" target="_blank" title="Enviar email para: fbryancm@gmail.com">
            <img src="/assets/images/gmail-icon.png" alt="gmail-icon" class="social-icon">
        </a>
        <a href="https://www.linkedin.com/in/felipe-bryan-55b2a6139/" target="_blank" title="Perfil de Felipe Bryan no LinkedIn">
            <img src="/assets/images/linkedin-icon.png" alt="linkedin-icon" class="social-icon">
        </a>
        <a href="https://github.com/Felipe-Bryan" target="_blank">
            <img src="/assets/images/github-icon.png" alt="github-icon" class="social-icon" title="Perfil de Felipe Bryan no GitHub">
        </a>
        <a href="https://www.facebook.com/felipe.bryan" target="_blank">
            <img src="/assets/images/facebook-icon.png" alt="facebook-icon" class="social-icon" title="Perfil de Felipe Bryan no Facebook">
        </a>                        
    </figure>                   
    </main>`;
  buttonAbout.classList = ['button active'];
  buttonKnowledge.classList = ['button'];
  buttonObjective.classList = ['button'];
}

function showObjective() {
  content.innerHTML = `
    <h2>Objetivos</h2>
    <ul class="objective-list">
        <li>
            Atuar na área da tecnologia e ampliar ainda mais os meus conhecimentos, desenvolvimento profissional e de vida, sempre em harmonia com a
            qualidade do meu trabalho e a preparação dos meus dias para obter o sucesso esperado no ato da minha contratação.
        </li>
        <br />
        <li>Poder proporcionar conforto e segurança para minha família por meio do meu trabalho, de forma honesta e digna</li>
    </ul>`;

  buttonAbout.classList = ['button'];
  buttonKnowledge.classList = ['button'];
  buttonObjective.classList = ['button active'];
}
