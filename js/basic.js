// Lógica
// 1 - Selecionar elemenos que devem ser animados
// 2 - Definir classes que é adicionada durante a animação
// 3 - Criar função de animação
// 3.1 - Verificar a distnância entre a barra de scroll e o topo do site
// 3.2 - Verificar se a distancia do 3.1 + offset é maior que a distância entre o elemento e o topo da pagina
// 3.3 - Se verdadeiro adicionar classe  de animação, remover se for falso
// 4 - Ativar animação toda vez que o usuário utilizar o Scroll
// 5 - Otimizar ativação

var root = document.documentElement;
root.className += ' js-anime';

function boxTop(idBox) {
	var boxOffset = $(idBox).offset().top;
	return boxOffset;
}

$(document).ready(function() {
	var $target = $('[data-anime]'),
			animationClass = 'animate',
			windowHeight = $(window).height(),
			offset = windowHeight - (windowHeight / 4);

	function animeScroll() {
		var documentTop = $(document).scrollTop();
		$target.each(function() {
			if (documentTop > boxTop(this) - offset) {
                $(this).addClass(animationClass);
                console.log('maior');
			} else {
                $(this).removeClass(animationClass);
                console.log('menor');
			}
		});
	}
	animeScroll();

	$(document).scroll(function() {
		setTimeout(function() {animeScroll()}, 150);
	});
});

