document.addEventListener('DOMContentLoaded', function() {
    // Para tarjetas
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            // Cierra todas las tarjetas primero
            document.querySelectorAll('.card').forEach(c => {
                c.classList.remove('active');
                c.querySelector('.card-visible').style.display = 'block';
                c.querySelector('.card-hidden').style.display = 'none';
            });
            
            // Abre solo esta tarjeta
            this.classList.add('active');
            this.querySelector('.card-visible').style.display = 'none';
            this.querySelector('.card-hidden').style.display = 'block';
        });
    });
});

// Para la sección culturas
document.querySelectorAll('.cultura-item').forEach(item => {
    item.addEventListener('click', function() {
        // Cierra otros elementos primero
        document.querySelectorAll('.cultura-item').forEach(i => {
            if (i !== this) i.classList.remove('active');
        });
        
        // Alternar estado
        this.classList.toggle('active');
    });
});