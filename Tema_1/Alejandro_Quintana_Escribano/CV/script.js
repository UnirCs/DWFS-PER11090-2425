// document.querySelectorAll('.accordion-button').forEach(button => {
//     button.addEventListener('click', () => {
//         const accordionContent = button.nextElementSibling;
//         const arrow = button.querySelector('.arrow');

//         // Ocultar otros contenidos y resetear flechas
//         document.querySelectorAll('.accordion-content').forEach(content => {
//             if (content !== accordionContent) {
//                 content.style.display = 'none';
//                 content.previousElementSibling.querySelector('.arrow').classList.remove('rotate');
//             }
//         });

//         // Alternar visibilidad del contenido seleccionado y rotación de la flecha
//         const isExpanded = accordionContent.style.display === 'block';
//         accordionContent.style.display = isExpanded ? 'none' : 'block';
//         arrow.classList.toggle('rotate', !isExpanded);
//     });
// });
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.closest('.accordion-item');
        const accordionContents = accordionItem.querySelectorAll('.accordion-content');
        const arrow = button.querySelector('.arrow');

        // Primero, ocultar todos los contenidos de otros acordeones
        document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== accordionItem) {
                item.querySelectorAll('.accordion-content').forEach(content => {
                    content.style.display = 'none';  // Cerrar contenido
                });
                item.querySelector('.accordion-button .arrow').classList.remove('rotate');  // Resetear flecha
            }
        });

        // Alternar visibilidad del contenido del acordeón actual
        const isExpanded = accordionContents[0].style.display === 'block'; // Comprobamos el primer contenido
        accordionContents.forEach(content => {
            content.style.display = isExpanded ? 'none' : 'block'; // Alternamos visibilidad para todos los contenidos
        });
        arrow.classList.toggle('rotate', !isExpanded); // Rotar la flecha
    });
});
