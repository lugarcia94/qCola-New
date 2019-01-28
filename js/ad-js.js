;(function( $ ) {

	"use strict";



	$(document).ready( function(){


		$(document).on( 'click', '#header .main-top .options-topo .login', function(){ 
			var $this = $(this); 
			var $box = $this.find('span ul'); 

			if( $box.is(':visible') ){ 
				$box.fadeOut( function(){ 
					$this.addClass('ativo'); 
				}); 
			}else{ 
				$box.fadeIn( function(){ 
					$this.removeClass('ativo'); 
				}); 
			} 
		});
		
		$('.desc_titulo').click('click touchstart', function(e){
    		var ativo = $(this).next('div').css('display');
    		if(ativo == 'none') {
    			$(this).next('div').show();
    		}
    		else {
    			$(this).next('div').hide();
    		}
    	});
		
		$(".bonus_cupom").css("display", "none");
		$(".Login").css("color", "#fd0707");

		var menuSuperior = $('.menu.superior');

		if( menuSuperior.length ){

			var itensMenu = menuSuperior.find('.nivel-um > li');

			if( itensMenu.length && itensMenu.length >= 5 ){
				menuSuperior.find('.nivel-um').prepend( menuSuperior.find('.remove-todas > ul > li') );
				menuSuperior.find('.nivel-um > li.todas-categorias').removeClass('hide');
				//menuSuperior.find('.nivel-um > li:nth-child(1n + 7)').remove();
				//menuSuperior.find('.remove-todas').remove();
			}

			var ajusteMenu = function(){
				if( $(window).width() > 992 ){
					var nivemUmTamanho = $('.menu.superior .nivel-um').outerWidth();
					var qtyItensMenu = $('.menu.superior .nivel-um > li').length;
					var calc = nivemUmTamanho/qtyItensMenu;

					var categoryMenus = $('.menu.superior .nivel-um > li');
					var cont = 1;
					var tamanhoItemPrimeiro = 0;
					var tamanhoUnico = 0;

					$.each(categoryMenus, function(){
						var $this = $(this);
						if( cont === qtyItensMenu ){
							var tamanhoUnico = 0;
						}else {
							var tamanhoUnico = $this.outerWidth();
						}

						if( tamanhoUnico < calc ){
							var diferenca = calc - tamanhoUnico ;
							var metade = diferenca/2;
							if( cont === 1 ){
								tamanhoItemPrimeiro = $this.width();
								$this.css('padding', '10px '+diferenca+'px 10px 0');
							}else if( cont === qtyItensMenu ){
								var tamanhoItemUlt = tamanhoItemPrimeiro - $this.width();
								var totalL = diferenca - tamanhoItemUlt;
								$this.css('padding', '10px 0 10px '+( totalL - 50 )+'px');
							}else {
								$this.css('padding', '10px '+( metade + 10 )+'px');
							}
						}

						cont++;
					});
				}
			}

		}
		ajusteMenu();

		$('.menu.superior').attr('style', '');

		$(window).resize(function() {
			$('.menu.superior .nivel-um > li').css('padding', '10px 0px');
			ajusteMenu();				
		});

		if( $("#banner-home").length ){
			$("#banner-home").owlCarousel({
				items: 1,
				itemsDesktop : [1199,1],
			    itemsDesktopSmall : [980,1],
			    itemsTablet: [768,1],
			    itemsTabletSmall: false,
			    itemsMobile : [479,1],
				loop:true,
				autoPlay : 5000,
				stopOnHover : false,
				responsive: true,
			});
		}

		if( $('#showcase-owl,#showcase-owl2,#showcase-owl3,#showcase-owl4,#showcase-owl5').length ){
			$('#showcase-owl,#showcase-owl2,#showcase-owl3,#showcase-owl4,#showcase-owl5').owlCarousel({
				items: 4,
				itemsDesktop : [1199,3],
			    itemsDesktopSmall : [980,2],
			    itemsTablet: [768,1],
			    itemsTabletSmall: false,
			    itemsMobile : [479,1],
				loop:true,
				autoPlay : false,
				stopOnHover : false,
				navigation : false,
				pagination: true,
				responsive: true,
			});
		}


		// Product Images
		if( $(window).width() < 767 ){
			$('#visualBlock #colFotos #foto_a').appendTo('#product-main-image');

			if( $('#product-main-image #foto_a .cloud-zoom-gallery-video').length ){
				$('#product-main-image #foto_a .cloud-zoom-gallery-video').parents('li').remove();
			}

			$('#product-main-image #foto_a ul').owlCarousel({
				items: 1,
				itemsDesktop : [1199,1],
			    itemsDesktopSmall : [980,1],
			    itemsTablet: [768,1],
			    itemsTabletSmall: false,
			    itemsMobile : [479,1],
				loop:true,
				autoPlay : false,
				stopOnHover : false,
				navigation : true,
    			navigationText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
				pagination: false,
				responsive: true,
			});
		}else {
			$('#visualBlock #colFotos .produto-imagem-miniaturas li').each(function(index){
				$(this).appendTo('#product-thumbs');
			});
		}

		$('#foto_p #wrap').appendTo('#product-main-image');

		if( !$('#product-thumbs li').length ){
			$('#product-thumbs').hide();
			$('#product-main-image').removeClass('col-md-6').addClass('col-md-7');
		}

		var videoBox = $('#colVideo');

		if( videoBox.length ){
			$('body').append(videoBox);			

			$(document).on('click', '#product-thumbs li .cloud-zoom-gallery-video', function(){
				var $this = $(this);
				var $box = $this.parents('body').find(videoBox);

				if( $box.is(':visible') ){ 
					$box.fadeOut( function(){ 
						$this.removeClass('ativo'); 
					}); 
				}else{ 
					$box.fadeIn( function(){ 
						$this.addClass('ativo');
					}); 
				} 
			});

			$('#colVideo .bloco').prepend('<div class="fechar-video"><i class="fa fa-times" aria-hidden="true"></i></div>');

			$('.fechar-video').click( function(){
				$('#product-thumbs li .cloud-zoom-gallery-video').click();
			});
		}


		$(document).on('click', '.catalog-header .filter-ad', function(){
			var $this = $(this);
			var $box = $this.parents('.site-main').find('.sidebar');

			if( $box.is(':visible') ){ 
				$box.fadeOut( function(){ 
					$this.removeClass('ativo'); 
				}); 
			}else{ 
				$box.fadeIn( function(){ 
					$this.addClass('ativo');
				}); 
			} 

		});

		$('.sidebar .fechar').click( function(){
			$('.catalog-header .filter-ad').click();
		});

		$('.product-colum-right #cepbox label').after('<div class="box-cep"></div>');
		$('.product-colum-right #cepbox .box-cep').append($('.product-colum-right #cepbox input.text, .product-colum-right #cepbox .botao-simular-frete'));
		$('.product-colum-right #cepbox .box-cep').after('<a href="http://www.buscacep.correios.com.br/" target="_blank">N�o sei meu Cep.</a>');


		var suasMedidas = function(){
			var confAltura = $('.product-colum-right .box-product-calculator .altura input').val();
			var confLargura = $('.product-colum-right .box-product-calculator .largura input').val();

			if( confAltura != null && confAltura != '' && confAltura != undefined && confLargura != null && confLargura != '' && confLargura != undefined ){

				var productCalculadora = $('.product-colum-right .box-product-calculator');

				if( productCalculadora.length ){
					var _altura  = null;
					var _largura = null;
					var _m2      = 0; 
					var priceProductCalc = 0;

					var medidaProduto = $('.product-colum-right .texto_variacao span').text();

					if( medidaProduto != null && medidaProduto != '' && medidaProduto != undefined ){

						var medidaCm = medidaProduto.split('x');

						_largura = parseFloat( medidaCm[0].replace(',', '.').replace('(', '') ) || null;
						_altura  = parseFloat( medidaCm[1].replace(',', '.').replace(')', '') ) || null;
						_m2 = Math.ceil( _altura * _largura );

						if( _altura != null && _altura != '' && _altura != undefined && _largura != null && _largura != '' && _largura != undefined ){

							var altura = productCalculadora.find('.altura input').val();
							var largura = productCalculadora.find('.largura input').val();
							var priceProductCalc = parseFloat( $('#produto_preco .PrecoPrincipal #preco_atual').val() );

							if( altura != null && altura != '' && altura != undefined && largura != null && largura != '' && largura != undefined ){
								var m2 = parseInt( altura*largura );
								if( _m2 > m2 ){
									var numRolos = Math.ceil( _m2/m2 );
								}else {
									var numRolos = Math.ceil( m2/_m2 );
								}
								var precoFinal = priceProductCalc*numRolos;

								$('.product-colum-right .box-product-calculator .ad-area-total').html(m2+' m�');
								$('.product-colum-right .box-product-calculator .ad-num-rolos').html(numRolos);
								$('.product-colum-right .box-product-calculator .ad-total').html('R$'+ precoFinal.toFixed(2).replace('.', ',') );
								$('#modalCalc').show();
								if( !$('.modal-backdrop').length ){
									$('body').append('<div class="modal-backdrop exclusive  in"></div>');
								}
							}

						}
						$('#menuVars').removeClass('escolha-variacao');
					}else {
						$('#menuVars').addClass('escolha-variacao');
					}

				}
			}
		}

		$('.product-colum-right .box-cep input:first-child').after('<span>-</span>');

		var nomeProduto = $('.product-colum-right .product-title').text().toLowerCase();

		if( nomeProduto.match(/papel de parede/) ){
			$('#form_comprar').addClass('papel-parede');
			// $('.box-product-calculator').removeClass('hide');
		}

		$('#form_comprar #product-priceBox').bind('DOMNodeInserted DOMNodeRemoved', function() {
			suasMedidas();
		});

		$(document).on('change', '#produto_preco .PrecoPrincipal #preco_atual', function() {
			suasMedidas();
		});

		$('.product-colum-right .box-product-calculator label input').keyup( function(){
			suasMedidas();
		});

		$('#modalCalc').click( function(){
			$('#modalCalc').hide();
			$('.exclusive').remove();
		});

		$('#modalCalc .modal-body button').click( function(){
			$('#modalCalc').hide();
			$('.exclusive').remove();
			$('.product-colum-right #product-form-box #bt_comprar button').click();
		});

		var inputBusca = $('.search form input.search-key');
		var xTriggered = 0;

		inputBusca.keypress(function( event ) {
			$('#header').append( $('#header .search .suggestion') );
			$('#bg-black').removeClass('hide');
		});

		inputBusca.focusout(function () {
	        setTimeout(function () {
	            $('.suggestion').remove();
	            $('#bg-black').addClass('hide');
	        }, 150);
	    });

		inputBusca.click(function() {
			inputBusca.keypress();
		});

		var textoVazio = $('#div_erro h3');

		if( textoVazio.length && textoVazio.text() === 'N�o encontrou o produto que esta procurando? Clique aqui.' ){
			$('body').addClass('busca-vazia');
			$('.busca-vazia #vitrine-catalogo > div #Vitrine fieldset input[alt="OK"]').attr('src', '');
		}

		var loaderProduct = $('.product .product-image img.lazy[src*=loading]');

		if( loaderProduct.length ){
			loaderProduct.attr('src', '//images.tcdn.com.br/580806/themes/1/img/theme/loading.gif');
		}

		var textoVariacao = $('#menuVars .texto_variacao');

		$.each(textoVariacao, function(){
			var nomeVariacao = $(this).find('h2').text();

			if( nomeVariacao === 'Escolha Tamanho' ){
				$(this).find('+ ul').addClass('tamanho_variacao');
			}
		});

		$('.tamanho_variacao').click( function(){
			$('#product-form-box').removeClass('aviso_tamanho');
		});

		$('.product-colum-right #product-form-box #bt_comprar button').click( function(){

			if( !$('.tamanho_variacao li > div.cor_selecionada').length ){
				$('#product-form-box').addClass('aviso_tamanho');
				return false;
			}else {
				$('#product-form-box').removeClass('aviso_tamanho');
			}
			
		});

		var proctCatalog = $('.page-catalog .showcase-catalog .product');

		if( proctCatalog.length ){
			var heightProduct = 0;

			$.each(proctCatalog, function(){
				var tamanhoHeight = $(this).outerHeight();

				if( tamanhoHeight > heightProduct ){
					heightProduct = tamanhoHeight;
				}
			});

			proctCatalog.css('height', heightProduct+'px');
		}

	});

	$(window).load( function(){

		if( $('.page-cart').length ){
			$('.page-cart .page-content .tablePage th[colspan="2"]').attr('colspan', '3');
			$('.page-cart .page-content .tablePage th[width="50px"]').attr('width', '100px');
			$('.page-cart .page-content .tablePage th[width="100px"]').attr('width', '200px');
			$('.page-cart #cesta_produtos').prepend( $('.page-cart .caixa-botoes') );
			$('.page-cart .caixa-total .container2 .bottom').append($('.page-cart #cesta_produtos > .board .botao-commerce.botao-prosseguir-compra'));
			$('.page-cart .caixa-total .tit-total').html('Total da sua compra');
			$('.page-cart #cesta_produtos .caixa-total .tit-total').after($('.page-cart #cesta_produtos .caixa-total #mostra_total').parent('h3') );
			$('.page-cart #cesta_produtos .caixa-total h3.color').after( $('.page-cart #cesta_produtos .caixa-botoes .board .botao-prosseguir-compra').clone() );
			
			var tdCart = $('.page-cart .page-content #tabela_carrinho tr');
			$.each( tdCart, function(){
				$(this).find('td[width="94px"]').after( $(this).find('.bt-excluir').parents('td') );
				$(this).find('.bt-excluir').html('Retirar do carrinho');
				$(this).find('.qntd').parents('td').append( '<div class="box-qty"></div>');
				$(this).find('.qntd').parents('td').append( $(this).find('.bt-excluir') );
				$(this).find('.box-qty').append($(this).find('.qntd'));
				$(this).find('.box-qty').append('<span class="plus-qty"><i class="fa fa-plus" aria-hidden="true"></i></span>').prepend('<span class="minus-qty"><i class="fa fa-minus" aria-hidden="true"></i></span>');
			});

			$('.box-qty .plus-qty').click( function(){
				var qty = $(this).parents('.box-qty').find('input').attr('value');
				$(this).parents('.box-qty').find('input').attr('value', parseInt(qty) + 1);
				$('.refresh').click();
			});

			$('.box-qty .minus-qty').click( function(){
				var qty = $(this).parents('.box-qty').find('input').attr('value');
				if( qty > 0 ){
					$(this).parents('.box-qty').find('input').attr('value', parseInt(qty) - 1);
				}else {
					$(this).parents('.box-qty').find('input').attr('value', 0);
				}
				$('.refresh').click();
			});

			$('.page-cart .page-content .caixa-forma-frete #calculoFrete').append($('.page-cart .page-content .caixa-forma-frete .carFretePara'));
			$('.page-cart .page-content .caixa-forma-frete').removeClass('board').append($('.page-cart .page-content .caixa-forma-frete #calculoFrete'));
			$('.page-cart .page-content .caixa-forma-frete #calculoFrete').after('<div class="resultado-frete"></div>');
			$('.page-cart .page-content .caixa-forma-frete .resultado-frete').append( $('.page-cart .page-content .caixa-forma-frete #formas_envio_frete tr') );
			$('.page-cart .page-content .caixa-forma-frete .resultado-frete .valores_carrinho').parents('td').addClass('valor-do-frete');

			$('.page-cart .page-content .caixa-forma-frete').after(
				`<div class="caixas-forma">
					<div class="caixa-forma-cupom">
						<div class="titulo-cupom">Cupom de desconto</div>
					</div>
				</div>`);
			$('.page-cart .page-content .caixa-forma-cupom').append($('.page-cart .page-content .caixa-forma-frete .caixa-cupom'));
			$('.page-cart .page-content .caixas-forma').prepend($('.page-cart .page-content .caixa-forma-frete'));
			$('.page-cart .page-content .container.caixa-produto').removeClass('container');

			$('.page-cart .page-content .caixa-forma-frete table').hide();

			var menuSuperior = $('.page-cart .menu.superior');

			if( menuSuperior.length ){

				var itensMenu = menuSuperior.find('.nivel-um > li');

				if( itensMenu.length && itensMenu.length >= 5 ){
					menuSuperior.find('.nivel-um').prepend( menuSuperior.find('.remove-todas > ul > li') );
					menuSuperior.find('.nivel-um > li.todas-categorias').removeClass('hide');
					menuSuperior.find('.nivel-um > li:nth-child(1n + 7)').remove();
					menuSuperior.find('.remove-todas').remove();
				}

				var ajusteMenu = function(){
					if( $(window).width() > 992 ){
						var nivemUmTamanho = $('.page-cart .menu.superior .nivel-um').outerWidth();
						var qtyItensMenu = $('.page-cart .menu.superior .nivel-um > li').length;
						var calc = nivemUmTamanho/qtyItensMenu;

						var categoryMenus = $('.page-cart .menu.superior .nivel-um > li');
						var cont = 1;

						$.each(categoryMenus, function(){
							var $this = $(this);
							var tamanhoUnico = $this.outerWidth()

							if( tamanhoUnico < calc ){
								var diferenca = calc - tamanhoUnico ;
								var metade = diferenca/2;
								if( cont === 1 ){
									$this.css('padding', '10px '+diferenca+'px 10px 0');
								}else if( cont === qtyItensMenu ){
									$this.css('padding', '10px 0 10px '+diferenca+'px');
								}else {
									$this.css('padding', '10px '+(metade - 1 )+'px');
								}
							}

							cont++;
						});
					}
				}

			}
			ajusteMenu();

			$('.page-cart .menu.superior').attr('style', '');

			$(window).resize(function() {
				$('.page-cart .menu.superior .nivel-um > li').css('padding', '10px 0px');
				ajusteMenu();				
			});
			
		}

		var pagContato = $('.formulario-contato');
		if( pagContato.length ){
			pagContato.parents('body').addClass('pag-contato');
		}

		if( $(window).width() < 767 ){

			$('.btn-search').click( function(){
				var $this = $(this);
				var $box = $this.parents('#header').find('.search');

				if( $box.is(':visible') ){ 
					$box.fadeOut( function(){ 
						$this.addClass('ativo'); 
					}); 
				}else{ 
					$box.fadeIn( function(){ 
						$this.removeClass('ativo'); 
					}); 
				} 

			});

			$('.menu-mobile > i').click( function(){
				var $this = $(this);
				var $box = $this.parents('.menu-mobile').find('.menu.superior');

				if( $box.is(':visible') ){ 
					$box.fadeOut( function(){ 
						$this.addClass('ativo'); 
					}); 
				}else{ 
					$box.fadeIn( function(){ 
						$this.removeClass('ativo'); 
					}); 
				} 

			});

			$('.menu-mobile .menu.superior .nivel-um > li.com-filho > .fa').click( function(){
				var $this = $(this);
				var $box = $this.parent('li').find('.nivel-dois');

				$('.menu-mobile .menu.superior .nivel-dois').fadeOut();
				$this.removeClass('fa-minus').addClass('fa-plus');

				if( $box.is(':visible') ){ 
					$box.fadeOut( function(){  
						$this.removeClass('fa-minus').addClass('fa-plus') ;
					}); 
				}else{ 
					$box.fadeIn( function(){ 
						$this.removeClass('fa-plus').addClass('fa-minus');
					}); 
					return false;
				} 

			});

			$('#footer .title-footer').click( function(){
				var $this = $(this);
				var $box = $this.parent('.links-footer').find('ul');

				if( $box.is(':visible') ){ 
					$box.fadeOut( function(){ 
						$this.removeClass('ativo'); 
						$this.find('.fa').removeClass('fa-minus').addClass('fa-plus') ;
					}); 
				}else{ 
					$box.fadeIn( function(){ 
						$this.addClass('ativo');
						$this.find('.fa').removeClass('fa-plus').addClass('fa-minus');
					}); 
				} 

			});

			$('.menu-mobile .menu.superior .close-menu').click( function(){
				$('.menu-mobile > i').click();
			});

			setTimeout(function(){  
				var heightImg = $('.banner.banner-home #bannerJS img.image_main').outerHeight();
				$('.banner.banner-home #bannerJS .box_skitter').css('height', heightImg+'px');
			}, 30);

			$(window).resize(function() {
				var heightImg = $('.banner.banner-home #bannerJS img.image_main').outerHeight();
				$('.banner.banner-home #bannerJS .box_skitter').css('height', heightImg+'px');
			});

		}

	});
	var newsletterClose = function () {
		if (jQuery('.newsletter_subscribe').length > 0) {
			jQuery('.btn-close').click(function () {
				jQuery('.newsletter_subscribe').addClass("hidden");
			});
		}
	};
	
	var newsletterCookies = function () {
	
		var _getName = localStorage.getItem('M-IDE');
	
		if (_getName == "md18") {
			console.log(_getName);
		} else {
			console.log("Has no cookies.");
			jQuery('.newsletter_subscribe').removeClass('hidden');
			jQuery('html').addClass('show-idm');
		}
	
		var _confirmBtn = jQuery('.btn-close');
		_confirmBtn.attr('href', window.location.href);
	
		_confirmBtn.click(function () {
			localStorage.setItem('M-IDE', 'md18');
		});
	};
	
	jQuery(newsletterClose);
	jQuery(newsletterCookies);
	
	/*$(".news-button").on("click", function(){
		$(".conteudo__cupom").addClass("active__conteudoCupom");
	});*/

	$("#formNews").submit(function(e){
		
		e.preventDefault();
		var formData = new FormData(this);
		var url = $(this).attr("action");
		console.log(formData, url);
		var link = "form/insert";
		$.ajax({
			type: 'POST',
			url: url,
			data: formData ,
			processData: false,
			contentType: false
		}).done(function (data) {
			var htmlReturn = "<div style='padding-top:32px; font-size:25px'><p>Cadastro Efetuado com Sucesso!</p><p style='font-size:20px; color:#000'>Utilize o cupom abaixo na finaliza��o de seu pedido.</p><p style='font-size:14px; margin-top:10px'>cupom:</p><p style='font-weight:bold; color:#f40c54'>QCOLA5</p>";
			$(".return__json").append(htmlReturn);
		});
		$(this)[0].reset();
        $(".conteudo-light-textos").addClass("hide");
		
	});

	$(document).ready( function(){
		setTimeout(function(){ 
		let foto = $('#product-main-image #wrap a img');
		if ($('.page-product').length) {
			$('body').addClass('modal__promo');
		
			foto.clone().appendTo(".modal__item-foto");

			$('.PrecoPrincipal > span').clone().appendTo(".price__old");
			var precoat = $('#preco_atual').val();
			var calc = ((precoat * 5) / 100);
			var totalNew = (precoat - calc).toFixed(2);
			var convertValue = totalNew.toString().replace(".", ",");
			$(".price__new").append("R$" + convertValue);
			var clock;
									
			$(document).ready(function() {
				clock = $('.clock').FlipClock(59, {
				clockFace: 'MinuteCounter',
				countdown: true
				});
			}); 
		}
		$('.close__modal').on('click', function(){
			$('body').removeClass('modal__promo');
		});
		}, 30000);
	});

})(jQuery);

