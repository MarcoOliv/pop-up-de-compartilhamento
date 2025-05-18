const linkGithub = 'https://github.com';
const linkLinkedin = 'https://linkedin.com';
const linkInstagram = 'https://instagram.com';
const linkWhatsapp = 'https://whatsapp.com';
const linkPinterest = 'https://pinterest.com';
const linkStackoverflow = 'https://stackoverflow.com';


function copiarLink() {
    const input = document.getElementById('link');
    navigator.clipboard.writeText(input.value)
        .then(() => {
            alert('Link copiado');
        })
        .catch(err => {
            console.error('Erro ao copiar: ', err);
        });
}

function compartilhar(plataforma) {
    switch(plataforma){
        case 'github' : url = linkGithub; break;
        case 'linkedin' : url = linkLinkedin; break;
        case 'instagram' : url = linkInstagram; break;
        case 'whatsapp' : url = linkWhatsapp; break;
        case 'pinterest' : url = linkPinterest; break;
        case 'stackoverflow' : url = linkStackoverflow; break;
        default: alert('Opção inválida'); return;
        
    }
    //const input = document.getElementById('link');
    window.open(url , '_blank');
}

function compartilharInstagram(){

}
