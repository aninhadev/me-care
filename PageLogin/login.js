document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 200,
        loop: true
    }).type( 'Inovação', {delay: 900}).delete(8)
    .type('Saúde', {delay: 500}).delete(5)
    .type('Auto Cuidado', {delay: 900})
    
    
    .go();
})