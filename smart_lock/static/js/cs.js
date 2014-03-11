
SIDEBAR_WIDTH_OPEN = '235px';
SIDEBAR_WIDTH_CLOSE = '45px';
SIDEBAR_ANI_TIME = 250;
SIDEBAR_OPEN = 0;



function JS_Init(){
	JS_ScrollFix();
	JS_Sidebar();
	JS_TableSort();
	JS_TableScrollbar();
	JS_Popup_Tooltip();	
	JS_Misc();	
}

function JS_ScrollFix(){
	$('#sidebar').scrollToFixed();
	$('#breadcrumb').scrollToFixed({
		zIndex: 900,
		postFixed: function() { 
			$('#sidebar').css('width',GetSBWidth());
		}
	});
}


function JS_TableSort(){
	var $sortTable        = $('.sortable.table');
	if($.fn.tablesort !== undefined) {$sortTable.tablesort();}	
}


function JS_Popup_Tooltip(){
		
		if($('.popup').length) {
		
			$('.popup.left').popup(
			{
				position: 'left center'	
			});
			
			$('.popup.right').popup(
			{
				position: 'right center'	
			});
			
			$('.popup.top').popup(
			{
				position: 'top center'	
			});
			
			$('.popup.bottom').popup(
			{
				position: 'bottom center'	
			});		
		
		
		}else{
			alert('no pop');	
		}
}

function JS_Misc() {
	
	$('.ui.dropdown').dropdown();
	
	$('.ui.checkbox').checkbox();
	
	$('.message .close').on('click', function() {
			$(this).closest('.message').fadeOut();
	});
}


function JS_TableScrollbar() {
	if($('.ui.scrollbar').length) {
		$(window).resize( function() {
	  		SetTableTDWidth();
		});
		SetTableTDWidth();
		
	}else{
		alert('no');	
	}	
}

function SetTableTDWidth(){
	var widths = [];
 	
  $('.ui.scrollbar thead tr th').each( function(i, element) {
    widths[i] = Math.round($(element).width());
  });
  $('.ui.scrollbar.table tbody tr:first td').each( function(i, element) {
    var add = widths[i]*1.5;
	$(element).css('width', add + 'px');

  });
}

function JS_Sidebar(){
	
	//$('#JS_Menu_Prod').hide();

	$('#sidebar_slide_btn').click(
		function(event){
			//$('#JS_Menu_Prod').slideToggle(200);
			//$('#JS_Menu_Prod').fadeToggle(200);
			//alert('open');
			
			Sidebar_Show_Hide();
			
			event.stopPropagation();

		}
	);
	
	$('.sb_btn_group').click(
		function(event){
			if (SIDEBAR_OPEN) {
			  SidebarClose();
			}
			
			event.stopPropagation();

		}
	);
	
	
	
	$('#lightbox_shadow').click(
		function(event){
			
			SidebarClose();
			
			event.stopPropagation();

		}
	);

	
	$( window ).resize(function() {
	  SidebarClose();
	});
	
}

function Sidebar_Show_Hide(){
	//var sb = $('#sidebar');
	
	if (SIDEBAR_OPEN) {
	  SidebarClose();
	} else{
	  SidebarOpen();
	}
	
	//alert(sb.css('width'));
		
}

function SidebarOpen(){
	$('#sidebar').stop();
	$('#sidebar').animate(
		{
			width: SIDEBAR_WIDTH_OPEN
		},
		SIDEBAR_ANI_TIME,
		"easeOutCubic",
		function() {
			$('.sb_text_onoff').fadeIn(200);
		 }
	);
	
	SIDEBAR_OPEN = 1;
	//$('#lightbox_shadow').show();
	$('#lightbox_shadow').fadeIn(SIDEBAR_ANI_TIME);
	
	$('#sidebar_slide_btn').removeClass( "right" ).addClass( "left" );
	$('.sb_nav').css('margin-left','8px');
	

	
	
}

function SidebarClose(){
	$('#sidebar').stop();
	$('#sidebar').animate(
		{
			width: SIDEBAR_WIDTH_CLOSE
		},
		SIDEBAR_ANI_TIME,
		"easeOutCubic"
	);
	
	SIDEBAR_OPEN = 0;
	//$('#overlay').remove();
	//$('#lightbox_shadow').hide();
	$('#lightbox_shadow').fadeOut(SIDEBAR_ANI_TIME);
	
	$('.sb_text_onoff').hide();
	
	$('#sidebar_slide_btn').removeClass( "left" ).addClass( "right" );
	$('.sb_nav').css('margin-left','0px');

}

function GetSBWidth(){
	var w;// = $('#sidebar').css('width');
	
	if(SIDEBAR_OPEN)
		w =  SIDEBAR_WIDTH_OPEN;
	else
		w = SIDEBAR_WIDTH_CLOSE;
	//alert(w);
	return w;
}

