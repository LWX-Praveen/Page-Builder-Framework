( function( $ ) {

	var customizeBreakpoints = {
		desktop: 1024,
		tablet: 768,
		mobile: 480
	};

	var mediaQueries = {
		tablet: 'max-width: ' + (customizeBreakpoints.desktop - 1).toString() + 'px',
		mobile: 'max-width: ' + (customizeBreakpoints.tablet - 1).toString() + 'px'
	};

	/**
	 * Setup style tag.
	 *
	 * @param {string} id The style data id.
	 * @return {HTMLElement} The style tag.
	 */
	function setupStyleTag(id) {
		var tag = document.createElement('style');
		tag.dataset.id = id;
		tag.className = 'wpbf-customize-live-style';

		document.head.append(tag);
		return tag;
	}

	/* Layout */

	// Page width.
	wp.customize( 'page_max_width', function( value ) {
		var styleTag = setupStyleTag('page_boxed_margin');
		
		value.bind( function( newval ) {
			newval = !newval ? '1200px' : newval;
			styleTag.innerHTML = '.wpbf-container, .wpbf-boxed-layout .wpbf-page {max-width: ' + newval + ';}';
		} );
	} );

	// Boxed margin.
	wp.customize( 'page_boxed_margin', function( value ) {
		var styleTag = setupStyleTag('page_boxed_margin');

		value.bind( function( newval ) {
			styleTag.innerHTML = '.wpbf-page {margin-top: ' + newval + 'px; margin-bottom: ' + newval + 'px;}';
		} );
	} );

	// Boxed padding.
	wp.customize( 'page_boxed_padding', function( value ) {
		var styleTag = setupStyleTag('page_boxed_padding');

		value.bind( function( newval ) {
			styleTag.innerHTML = '.wpbf-container {padding-left: ' + newval + 'px; padding-right: ' + newval + 'px;}';
		} );
	} );

	// Boxed background color.
	wp.customize( 'page_boxed_background', function( value ) {
		var styleTag = setupStyleTag('page_boxed_background');

		value.bind( function( newval ) {
			styleTag.innerHTML = '.wpbf-page {background-color: ' + newval + ';}';
		} );
	} );

	// ScrollTop position.
	wp.customize( 'scrolltop_position', function( value ) {
		var styleTag = setupStyleTag('scrolltop_position');

		value.bind( function( newval ) {
			if( newval === 'left' ) {
				styleTag.innerHTML = '.scrolltop {left: 20px; right: auto;}';
			} else {
				styleTag.innerHTML = '.scrolltop {left: auto; right: 20px;}';
			}
		} );
	} );

	// ScrollTop background color.
	wp.customize( 'scrolltop_bg_color', function( value ) {
		var styleTag = setupStyleTag('scrolltop_bg_color');

		value.bind( function( newval ) {
			styleTag.innerHTML = '.scrolltop {background-color: ' + newval + ';}';
		} );
	} );

	// ScrollTop icon color.
	wp.customize( 'scrolltop_icon_color', function( value ) {
		var styleTag = setupStyleTag('scrolltop_icon_color');
		
		value.bind( function( newval ) {
			styleTag.innerHTML = '.scrolltop {color: ' + newval + ';}';
		} );
	} );

	// ScrollTop border radius.
	wp.customize( 'scrolltop_border_radius', function( value ) {
		var styleTag = setupStyleTag('scrolltop_border_radius');

		value.bind( function( newval ) {
			styleTag.innerHTML = '.scrolltop {border-radius: ' + newval + 'px;}';
		} );
	} );

	/* Typography */

	wp.customize( 'page_font_color', function( value ) {
		var styleTag = setupStyleTag('page_font_color');

		value.bind( function( newval ) {
			styleTag.innerHTML = 'body {color: ' + newval + ';}';
		} );
	} );

	/* 404 */

	wp.customize( '404_headline', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-404-content .entry-title').text( newval );
		} );
	} );

	wp.customize( '404_text', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-404-content p').text( newval );
		} );
	} );

	/* Navigation */

	// Width.
	wp.customize( 'menu_width', function( value ) {
		var styleTag = setupStyleTag('menu_width');

		value.bind( function( newval ) {
			newval = !newval ? '1200px' : newval;
			styleTag.innerHTML = '.wpbf-nav-wrapper {max-width: ' + newval + ';}';
		} );
	} );

	// Menu padding.
	wp.customize( 'menu_padding', function( value ) {
		var styleTag = setupStyleTag('menu_padding');

		value.bind( function( newval ) {
			styleTag.innerHTML = '.wpbf-navigation .wpbf-menu > .menu-item > a {padding-left: ' + newval + 'px; padding-right: ' + newval + 'px;}';
		} );
	} );

	// Font size.
	wp.customize( 'menu_font_size', function( value ) {
		var styleTag = setupStyleTag('menu_font_size');

		value.bind( function( newval ) {
			var suffix = $.isNumeric(newval) ? 'px' : '';
			styleTag.innerHTML = '.wpbf-navigation .wpbf-menu a, .wpbf-mobile-menu a {font-size: ' + newval + suffix + ';}';
		} );
	} );

	/* Sub Menu */

	// Padding top.
	wp.customize( 'sub_menu_padding_top', function( value ) {
		var styleTag = setupStyleTag('sub_menu_padding_top');

		value.bind( function( newval ) {
			styleTag.innerHTML = '.wpbf-sub-menu > .menu-item-has-children:not(.wpbf-mega-menu) .sub-menu a {padding-top: ' + newval + 'px;}';
		} );
	} );

	// Padding right.
	wp.customize( 'sub_menu_padding_right', function( value ) {
		var styleTag = setupStyleTag('sub_menu_padding_right');

		value.bind( function( newval ) {
			styleTag.innerHTML = '.wpbf-sub-menu > .menu-item-has-children:not(.wpbf-mega-menu) .sub-menu a {padding-right: ' + newval + 'px;}';
		} );
	} );

	// Padding bottom.
	wp.customize( 'sub_menu_padding_bottom', function( value ) {
		var styleTag = setupStyleTag('sub_menu_padding_bottom');

		value.bind( function( newval ) {
			styleTag.innerHTML = '.wpbf-sub-menu > .menu-item-has-children:not(.wpbf-mega-menu) .sub-menu a {padding-bottom: ' + newval + 'px;}';
		} );
	} );

	// Padding left.
	wp.customize( 'sub_menu_padding_left', function( value ) {
		var styleTag = setupStyleTag('sub_menu_padding_left');

		value.bind( function( newval ) {
			styleTag.innerHTML = '.wpbf-sub-menu > .menu-item-has-children:not(.wpbf-mega-menu) .sub-menu a {padding-left: ' + newval + 'px;}';
		} );
	} );

	// Width.
	wp.customize( 'sub_menu_width', function( value ) {
		var styleTag = setupStyleTag('sub_menu_width');

		value.bind( function( newval ) {
			styleTag.innerHTML = '.wpbf-sub-menu > .menu-item-has-children:not(.wpbf-mega-menu) .sub-menu {width: ' + newval + 'px;}';
		} );
	} );

	// Background color.
	wp.customize( 'sub_menu_bg_color', function( value ) {
		var styleTag = setupStyleTag('sub_menu_bg_color');

		value.bind( function( newval ) {
			styleTag.innerHTML = '\
				.wpbf-sub-menu > .menu-item-has-children:not(.wpbf-mega-menu) .sub-menu li,\
				.wpbf-sub-menu > .wpbf-mega-menu > .sub-menu {\
					background-color: ' + newval + ';\
				}\
			';
		} );
	} );

	// Accent color.
	wp.customize( 'sub_menu_accent_color', function( value ) {
		var styleTag = setupStyleTag('sub_menu_accent_color');

		value.bind( function( newval ) {
			styleTag.innerHTML = '.wpbf-menu .sub-menu a {color: ' + newval + ';}';
		} );
	} );

	// Font size.
	wp.customize( 'sub_menu_font_size', function( value ) {
		var styleTag = setupStyleTag('sub_menu_font_size');

		value.bind( function( newval ) {
			var suffix = $.isNumeric(newval) ? 'px' : '';
			styleTag.innerHTML = '.wpbf-menu .sub-menu a {font-size: ' + newval + suffix + ';}';
		} );
	} );

	// Separator color.
	wp.customize( 'sub_menu_separator_color', function( value ) {
		var styleTag = setupStyleTag('sub_menu_separator_color');

		value.bind( function( newval ) {
			styleTag.innerHTML = '.wpbf-sub-menu > .menu-item-has-children:not(.wpbf-mega-menu) li {border-bottom-color: ' + newval + ';}';
		} );
	} );

	/* Mobile Navigation */

	// Height.
	wp.customize( 'mobile_menu_height', function( value ) {
		var styleTag = setupStyleTag('mobile_menu_height');

		value.bind( function( newval ) {
			styleTag.innerHTML = '.wpbf-mobile-nav-wrapper {padding-top: ' + newval + 'px; padding-bottom: ' + newval + 'px;}';
		} );
	} );

	// Hamburger size.
	wp.customize( 'mobile_menu_hamburger_size', function( value ) {
		var styleTag = setupStyleTag('mobile_menu_hamburger_size');

		value.bind( function( newval ) {
			var suffix = $.isNumeric(newval) ? 'px' : '';
			styleTag.innerHTML = '.wpbf-mobile-nav-item {font-size: ' + newval + suffix + ';}';
		} );
	} );

	// Hamburger border radius (filled).
	wp.customize( 'mobile_menu_hamburger_border_radius', function( value ) {
		var styleTag = setupStyleTag('mobile_menu_hamburger_border_radius');
		
		value.bind( function( newval ) {
			styleTag.innerHTML = '.wpbf-mobile-nav-item {border-radius: ' + newval + 'px;}';
		} );
	} );

	// Padding top.
	wp.customize( 'mobile_menu_padding_top', function( value ) {
		var styleTag = setupStyleTag('mobile_menu_padding_top');

		value.bind( function( newval ) {
			styleTag.innerHTML = '\
				.wpbf-mobile-menu a,\
				.wpbf-mobile-menu .menu-item-has-children .wpbf-submenu-toggle {\
					padding-top: ' + newval + 'px;\
				}\
			';
		} );
	} );

	// Padding right.
	wp.customize( 'mobile_menu_padding_right', function( value ) {
		var styleTag = setupStyleTag('mobile_menu_padding_right');

		value.bind( function( newval ) {
			styleTag.innerHTML = '\
				.wpbf-mobile-menu a,\
				.wpbf-mobile-menu .menu-item-has-children .wpbf-submenu-toggle {\
					padding-right: ' + newval + 'px;\
				}\
			';
		} );
	} );

	// Padding bottom.
	wp.customize( 'mobile_menu_padding_bottom', function( value ) {
		var styleTag = setupStyleTag('mobile_menu_padding_bottom');

		value.bind( function( newval ) {
			styleTag.innerHTML = '\
				.wpbf-mobile-menu a,\
				.wpbf-mobile-menu .menu-item-has-children .wpbf-submenu-toggle {\
					padding-bottom: ' + newval + 'px;\
				}\
			';
		} );
	} );

	// Padding left.
	wp.customize( 'mobile_menu_padding_left', function( value ) {
		var styleTag = setupStyleTag('mobile_menu_padding_left');

		value.bind( function( newval ) {
			styleTag.innerHTML = '\
				.wpbf-mobile-menu a,\
				.wpbf-mobile-menu .menu-item-has-children .wpbf-submenu-toggle {\
					padding-left: ' + newval + 'px;\
				}\
			';
		} );
	} );

	// Menu item background color.
	wp.customize( 'mobile_menu_bg_color', function( value ) {
		var styleTag = setupStyleTag('mobile_menu_bg_color');

		value.bind( function( newval ) {
			styleTag.innerHTML = '.wpbf-mobile-menu > .menu-item a {background-color: ' + newval + ';}';
		} );
	} );

	// Menu item font color.
	wp.customize( 'mobile_menu_font_color', function( value ) {
		var styleTag = setupStyleTag('mobile_menu_font_color');

		value.bind( function( newval ) {
			styleTag.innerHTML = '.wpbf-mobile-menu a, .wpbf-mobile-menu-container .wpbf-close {color: ' + newval + ';}';
		} );
	} );

	// Menu item divider color.
	wp.customize( 'mobile_menu_border_color', function( value ) {
		var styleTag = setupStyleTag('mobile_menu_border_color');

		value.bind( function( newval ) {
			styleTag.innerHTML = '\
				.wpbf-mobile-menu .menu-item {border-top-color: ' + newval + ';}\
				.wpbf-mobile-menu > .menu-item:last-child {border-bottom-color: ' + newval + ';}\
			';
		} );
	} );

	// Sub menu arrow color.
	wp.customize( 'mobile_menu_submenu_arrow_color', function( value ) {
		var styleTag = setupStyleTag('mobile_menu_submenu_arrow_color');

		value.bind( function( newval ) {
			styleTag.innerHTML = '.wpbf-submenu-toggle {color: ' + newval + ';}';
		} );
	} );

	// Menu item font size.
	wp.customize( 'mobile_menu_font_size', function( value ) {
		var styleTag = setupStyleTag('mobile_menu_font_size');

		value.bind( function( newval ) {
			var suffix = $.isNumeric(newval) ? 'px' : '';
			styleTag.innerHTML = '.wpbf-mobile-menu a {font-size: ' + newval + suffix + ';}';
		} );
	} );

	/* Logo */

	// Width desktop.
	wp.customize( 'menu_logo_size_desktop', function( value ) {
		var styleTag = setupStyleTag('menu_logo_size_desktop');

		value.bind( function( newval ) {
			var suffix = $.isNumeric(newval) ? 'px' : '';
			styleTag.innerHTML = '.wpbf-logo img, .wpbf-mobile-logo img {width: ' + newval + suffix + ';}';
		} );
	} );

	// Width tablet.
	wp.customize( 'menu_logo_size_tablet', function( value ) {
		var styleTag = setupStyleTag('menu_logo_size_tablet');
		
		value.bind( function( newval ) {
			var suffix = $.isNumeric(newval) ? 'px' : '';
			styleTag.innerHTML = '\
				@media (' + mediaQueries.tablet + ') {\
					.wpbf-mobile-logo img {width: ' + newval + suffix + ';\
				}\
			';
		} );
	} );

	// Width mobile.
	wp.customize( 'menu_logo_size_mobile', function( value ) {
		var styleTag = setupStyleTag('menu_logo_size_mobile');

		value.bind( function( newval ) {
			var suffix = $.isNumeric(newval) ? 'px' : '';
			styleTag.innerHTML = '\
				@media (' + mediaQueries.mobile + ') {\
					.wpbf-mobile-logo img {width: ' + newval + suffix + ';}\
				}\
			';
		} );
	} );

	// Font size desktop.
	wp.customize( 'menu_logo_font_size_desktop', function( value ) {
		var styleTag = setupStyleTag('menu_logo_font_size_desktop');

		value.bind( function( newval ) {
			var suffix = $.isNumeric(newval) ? 'px' : '';
			styleTag.innerHTML = '.wpbf-logo a, .wpbf-mobile-logo a {font-size: ' + newval + suffix + ';}';
		} );
	} );

	// Font size tablet.
	wp.customize( 'menu_logo_font_size_tablet', function( value ) {
		var styleTag = setupStyleTag('menu_logo_font_size_tablet');

		value.bind( function( newval ) {
			var suffix = $.isNumeric(newval) ? 'px' : '';
			styleTag.innerHTML = '\
				@media (' + mediaQueries.tablet + ') {\
					.wpbf-mobile-logo a {font-size: ' + newval + suffix + ';\
				}\
			';
		} );
	} );

	// Font size mobile.
	wp.customize( 'menu_logo_font_size_mobile', function( value ) {
		var styleTag = setupStyleTag('menu_logo_font_size_mobile');

		value.bind( function( newval ) {
			var suffix = $.isNumeric(newval) ? 'px' : '';
			styleTag.innerHTML = '\
				@media (' + mediaQueries.mobile + ') {\
					.wpbf-mobile-logo a {font-size: ' + newval + suffix + ';}\
				}\
			';
		} );
	} );

	// Color.
	wp.customize( 'menu_logo_color', function( value ) {
		var styleTag = setupStyleTag('menu_logo_color');

		value.bind( function( newval ) {
			styleTag.innerHTML = '.wpbf-logo a, .wpbf-mobile-logo a {color: ' + newval + ';}';
		} );
	} );

	// Container width.
	wp.customize( 'menu_logo_container_width', function( value ) {
		var styleTag = setupStyleTag('menu_logo_container_width');

		value.bind( function( newval ) {
			var calculation = 100 - newval;
			styleTag.innerHTML = '\
				.wpbf-navigation .wpbf-1-4 {width: ' + newval + '%;}\
				.wpbf-navigation .wpbf-3-4 {width: ' + calculation + '%;}\
			';
		} );
	} );

	// Mobile container width.
	wp.customize( 'mobile_menu_logo_container_width', function( value ) {
		var styleTag = setupStyleTag('mobile_menu_logo_container_width');

		value.bind( function( newval ) {
			var calculation = 100 - newval;
			styleTag.innerHTML = '\
				@media (' + mediaQueries.tablet + ') {\
					.wpbf-navigation .wpbf-2-3 {width: ' + newval + '%;}\
					.wpbf-navigation .wpbf-1-3 {width: ' + calculation + '%;}\
				}\
			';
		} );
	} );

	/* Tagline */

	// Font size desktop.
	wp.customize( 'menu_logo_description_font_size_desktop', function( value ) {
		var styleTag = setupStyleTag('menu_logo_description_font_size_desktop');

		value.bind( function( newval ) {
			var suffix = $.isNumeric(newval) ? 'px' : '';
			styleTag.innerHTML = '.wpbf-logo .wpbf-tagline, .wpbf-mobile-logo .wpbf-tagline {font-size: ' + newval + suffix + ';}';
		} );
	} );

	// Font size tablet.
	wp.customize( 'menu_logo_description_font_size_tablet', function( value ) {
		var styleTag = setupStyleTag('menu_logo_description_font_size_tablet');

		value.bind( function( newval ) {
			var suffix = $.isNumeric(newval) ? 'px' : '';
			styleTag.innerHTML = '\
				@media (' + mediaQueries.tablet + ') {\
					.wpbf-mobile-logo .wpbf-tagline {font-size: ' + newval + suffix + ';}\
				}\
			';
		} );
	} );

	// Font size mobile.
	wp.customize( 'menu_logo_description_font_size_mobile', function( value ) {
		var styleTag = setupStyleTag('menu_logo_description_font_size_mobile');

		value.bind( function( newval ) {
			var suffix = $.isNumeric(newval) ? 'px' : '';
			styleTag.innerHTML = '\
				@media (' + mediaQueries.mobile + ') {\
					.wpbf-mobile-logo .wpbf-tagline {font-size: ' + newval + suffix + ';}\
				}\
			';
		} );
	} );

	// Font color.
	wp.customize( 'menu_logo_description_color', function( value ) {
		var styleTag = setupStyleTag('menu_logo_description_color');

		value.bind( function( newval ) {
			styleTag.innerHTML = '.wpbf-tagline {color: ' + newval + ';}';
		} );
	} );

	/* Pre Header */

	// Width.
	wp.customize( 'pre_header_width', function( value ) {
		var styleTag = setupStyleTag('pre_header_width');

		value.bind( function( newval ) {
			newval = !newval ? '1200px' : newval;
			styleTag.innerHTML = '.wpbf-inner-pre-header {max-width: ' + newval + ';}';
		} );
	} );

	// Height.
	wp.customize( 'pre_header_height', function( value ) {
		var styleTag = setupStyleTag('pre_header_height');

		value.bind( function( newval ) {
			styleTag.innerHTML = '.wpbf-inner-pre-header {padding-top: ' + newval + 'px; padding-bottom: ' + newval + 'px;}';
		} );
	} );

	// Background color.
	wp.customize( 'pre_header_bg_color', function( value ) {
		var styleTag = setupStyleTag('pre_header_bg_color');

		value.bind( function( newval ) {
			styleTag.innerHTML = '.wpbf-pre-header {background-color: ' + newval + ';}';
		} );
	} );

	// Font color.
	wp.customize( 'pre_header_font_color', function( value ) {
		var styleTag = setupStyleTag('pre_header_font_color');

		value.bind( function( newval ) {
			styleTag.innerHTML = '.wpbf-pre-header {color: ' + newval + ';}';
		} );
	} );

	// Font size.
	wp.customize( 'pre_header_font_size', function( value ) {
		value.bind( function( newval ) {
			var suffix = '';
			if( $.isNumeric( newval ) ) {
				suffix = 'px';
			};
			$('.wpbf-pre-header, .wpbf-pre-header .wpbf-menu, .wpbf-pre-header .wpbf-menu .sub-menu a').css('font-size', newval + suffix );
		} );
	} );

	/* Blog – Pagination */

	// Border radius.
	wp.customize( 'blog_pagination_border_radius', function( value ) {
		value.bind( function( newval ) {
			$('.pagination .page-numbers').css('border-radius', newval + 'px' );
		} );
	} );

	// Background color.
	wp.customize( 'blog_pagination_background_color', function( value ) {
		value.bind( function( newval ) {
			$('.pagination .page-numbers:not(.current)').css('background-color', newval );
		} );
	} );

	// Background color active.
	wp.customize( 'blog_pagination_background_color_active', function( value ) {
		value.bind( function( newval ) {
			$('.pagination .page-numbers.current').css('background-color', newval );
		} );
	} );

	// Font color.
	wp.customize( 'blog_pagination_font_color', function( value ) {
		value.bind( function( newval ) {
			$('.pagination .page-numbers:not(.current)').css('color', newval );
		} );
	} );

	// Font color active.
	wp.customize( 'blog_pagination_font_color_active', function( value ) {
		value.bind( function( newval ) {
			$('.pagination .page-numbers.current').css('color', newval );
		} );
	} );

	// Font size.
	wp.customize( 'blog_pagination_font_size', function( value ) {
		value.bind( function( newval ) {
			var suffix = '';
			if( $.isNumeric( newval ) ) {
				suffix = 'px';
			};
			$('.pagination .page-numbers').css('font-size', newval + suffix );
		} );
	} );

	/* Sidebar */

	// Width.
	wp.customize( 'sidebar_width', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-sidebar-wrapper').css('width', newval + '%' );
			$('.wpbf-sidebar-left .wpbf-main, .wpbf-sidebar-right .wpbf-main').css('width', 100 - newval + '%' );
		} );
	} );

	// Background color.
	wp.customize( 'sidebar_bg_color', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-sidebar .widget, .elementor-widget-sidebar .widget').css('background-color', newval );
		} );
	} );

	/* Buttons */

	// Background color.
	wp.customize( 'button_bg_color', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-button:not(.wpbf-button-primary), input[type="submit"]').css('background', newval );
		} );
	} );

	// Text color.
	wp.customize( 'button_text_color', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-button:not(.wpbf-button-primary), input[type="submit"]').css('color', newval );
		} );
	} );

	// Primary background color.
	wp.customize( 'button_primary_bg_color', function( value ) {
		value.bind( function( newval ) {
			if ( ! newval ) {
				newval = 'unset';
			}
			$('.wpbf-button-primary').css('background', newval );
		} );
	} );

	// Primary text color.
	wp.customize( 'button_primary_text_color', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-button-primary').css('color', newval );
		} );
	} );

	// Border radius.
	wp.customize( 'button_border_radius', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-button, input[type="submit"]').css('border-radius', newval + 'px' );
		} );
	} );

	// Border width.
	wp.customize( 'button_border_width', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-button, input[type="submit"]').css( 'border-width', newval + 'px' ).css( 'border-style', 'solid' );
		} );
	} );

	// Border color.
	wp.customize( 'button_border_color', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-button, input[type="submit"]').css('border-color', newval );
		} );
	} );

	// Border color.
	wp.customize( 'button_primary_border_color', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-button-primary').css('border-color', newval );
		} );
	} );

	/* Breadcrumbs */

	// Background background color.
	wp.customize( 'breadcrumbs_background_color', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-breadcrumbs-container').css('background', newval );
		} );
	} );

	// Alignment.
	wp.customize( 'breadcrumbs_alignment', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-breadcrumbs-container').css('text-align', newval );
		} );
	} );

	// Font color.
	wp.customize( 'breadcrumbs_font_color', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-breadcrumbs').css('color', newval );
		} );
	} );

	// Accent color.
	wp.customize( 'breadcrumbs_accent_color', function( value ) {
		var styleTag = setupStyleTag('breadcrumbs_accent_color');

		value.bind( function( newval ) {
			styleTag.innerHTML = '.wpbf-breadcrumbs a {color: ' + newval + ';}';
		} );
	} );

	// Accent color hover.
	wp.customize( 'breadcrumbs_accent_color_alt', function( value ) {
		var styleTag = setupStyleTag('breadcrumbs_accent_color_alt');

		value.bind( function( newval ) {
			styleTag.innerHTML = '.wpbf-breadcrumbs a:hover {color: ' + newval + ';}';
		} );
	} );

	/* Footer */

	// Width.
	wp.customize( 'footer_width', function( value ) {
		value.bind( function( newval ) {
			if( newval == '' ) {
				newval = '1200px';
			}
			$('.wpbf-inner-footer').css('max-width', newval );
		} );
	} );

	// Height.
	wp.customize( 'footer_height', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-inner-footer').css('padding-top', newval + 'px' ).css('padding-bottom', newval + 'px' );
		} );
	} );

	// Background color.
	wp.customize( 'footer_bg_color', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-page-footer').css('background-color', newval );
		} );
	} );

	// Font color.
	wp.customize( 'footer_font_color', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-inner-footer').css('color', newval );
		} );
	} );

	// Accent color.
	wp.customize( 'footer_accent_color', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-inner-footer a').css('color', newval );
		} );
	} );

	// Font size.
	wp.customize( 'footer_font_size', function( value ) {
		value.bind( function( newval ) {
			var suffix = '';
			if( $.isNumeric( newval ) ) {
				suffix = 'px';
			};
			$('.wpbf-inner-footer, .wpbf-inner-footer .wpbf-menu').css('font-size', newval + suffix );
		} );
	} );

	/* WooCommerce - Defaults */

	// Button border radius.
	wp.customize( 'button_border_radius', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce a.button, .woocommerce button.button').css('border-radius', newval + 'px' );
		} );
	} );

	// Custom width.
	wp.customize( 'woocommerce_loop_custom_width', function( value ) {
		value.bind( function( newval ) {
			if( newval == '' ) {
				newval = '1200px';
			}
			$('.archive.woocommerce #inner-content').css('max-width', newval );
		} );
	} );

	/* WooCommerce - Loop */

	// Image alignment.
	wp.customize( 'woocommerce_loop_image_alignment', function( value ) {
		value.bind( function( newval ) {
			if( newval == 'left' ) {
				$('.wpbf-woo-list-view .wpbf-woo-loop-thumbnail-wrapper').css('float', 'left' );
				$('.wpbf-woo-list-view .wpbf-woo-loop-summary').css('float', 'right' );
			} else {
				$('.wpbf-woo-list-view .wpbf-woo-loop-thumbnail-wrapper').css('float', 'right' );
				$('.wpbf-woo-list-view .wpbf-woo-loop-summary').css('float', 'left' );
			}
		} );
	} );

	// Image width.
	wp.customize( 'woocommerce_loop_image_width', function( value ) {
		value.bind( function( newval ) {
			$('.wpbf-woo-list-view .wpbf-woo-loop-thumbnail-wrapper').css('width', newval-2 + '%');
			$('.wpbf-woo-list-view .wpbf-woo-loop-summary').css('width', 98-newval + '%');
		} );
	} );

	// Title font size.
	wp.customize( 'woocommerce_loop_title_size', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce ul.products li.product h3, .woocommerce ul.products li.product .woocommerce-loop-product__title, .woocommerce ul.products li.product .woocommerce-loop-category__title').css('font-size', newval );
		} );
	} );

	// Title font color.
	wp.customize( 'woocommerce_loop_title_color', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce ul.products li.product h3, .woocommerce ul.products li.product .woocommerce-loop-product__title, .woocommerce ul.products li.product .woocommerce-loop-category__title').css('color', newval );
		} );
	} );

	// Price font size.
	wp.customize( 'woocommerce_loop_price_size', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce ul.products li.product .price').css('font-size', newval );
		} );
	} );

	// Price font color.
	wp.customize( 'woocommerce_loop_price_color', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce ul.products li.product .price').css('color', newval );
		} );
	} );

	// Out of stock notice.
	wp.customize( 'woocommerce_loop_out_of_stock_font_size', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce ul.products li.product .wpbf-woo-loop-out-of-stock').css('font-size', newval );
		} );
	} );

	// Out of stock color.
	wp.customize( 'woocommerce_loop_out_of_stock_font_color', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce ul.products li.product .wpbf-woo-loop-out-of-stock').css('color', newval );
		} );
	} );

	// Out of stock background color.
	wp.customize( 'woocommerce_loop_out_of_stock_background_color', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce ul.products li.product .wpbf-woo-loop-out-of-stock').css('background-color', newval );
		} );
	} );

	// Sale font size.
	wp.customize( 'woocommerce_loop_sale_font_size', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce span.onsale').css('font-size', newval );
		} );
	} );

	// Sale font color.
	wp.customize( 'woocommerce_loop_sale_font_color', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce span.onsale').css('color', newval );
		} );
	} );

	// Sale background color.
	wp.customize( 'woocommerce_loop_sale_background_color', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce span.onsale').css('background-color', newval );
		} );
	} );

	/* WooCommerce - Single */

	// Custom width.
	wp.customize( 'woocommerce_single_custom_width', function( value ) {
		value.bind( function( newval ) {
			if( newval == '' ) {
				newval = '1200px';
			}
			$('.single.woocommerce #inner-content').css('max-width', newval );
		} );
	} );

	// Image alignment.
	wp.customize( 'woocommerce_single_alignment', function( value ) {
		value.bind( function( newval ) {
			if( newval == 'right' ) {
				$('.woocommerce div.product div.summary, .woocommerce #content div.product div.summary, .woocommerce-page div.product div.summary, .woocommerce-page #content div.product div.summary').css('float', 'left' );
				$('.woocommerce div.product div.images, .woocommerce #content div.product div.images, .woocommerce-page div.product div.images, .woocommerce-page #content div.product div.images').css('float', 'right' );
				$('.single-product.woocommerce span.onsale').css('display', 'none' );
			} else {
				$('.woocommerce div.product div.summary, .woocommerce #content div.product div.summary, .woocommerce-page div.product div.summary, .woocommerce-page #content div.product div.summary').css('float', 'right' );
				$('.woocommerce div.product div.images, .woocommerce #content div.product div.images, .woocommerce-page div.product div.images, .woocommerce-page #content div.product div.images').css('float', 'left' );
				$('.single-product.woocommerce span.onsale').css('display', 'block' );
			}
		} );
	} );

	// Image width.
	wp.customize( 'woocommerce_single_image_width', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce div.product div.images, .woocommerce #content div.product div.images, .woocommerce-page div.product div.images, .woocommerce-page #content div.product div.images').css('width', newval-2 + '%' );
			$('.woocommerce div.product div.summary, .woocommerce #content div.product div.summary, .woocommerce-page div.product div.summary, .woocommerce-page #content div.product div.summary').css('width', 98 - newval + '%' );
		} );
	} );

	// Price font size.
	wp.customize( 'woocommerce_single_price_size', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce div.product span.price, .woocommerce div.product p.price').css('font-size', newval );
		} );
	} );

	// Price font color.
	wp.customize( 'woocommerce_single_price_color', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce div.product span.price, .woocommerce div.product p.price').css('color', newval );
		} );
	} );

	// Tabs font size.
	wp.customize( 'woocommerce_single_tabs_font_size', function( value ) {
		value.bind( function( newval ) {
			$('.woocommerce div.product .woocommerce-tabs ul.tabs li a').css('font-size', newval );
		} );
	} );

	/* Easy Digital Downloads - Defaults */

	// Button border radius.
	wp.customize( 'button_border_radius', function( value ) {
		value.bind( function( newval ) {
			$('.edd-submit.button').css('border-radius', newval + 'px' );
		} );
	} );

} )( jQuery );
