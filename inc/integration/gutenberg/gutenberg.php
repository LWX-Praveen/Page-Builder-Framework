<?php
/**
 * Gutenberg Integration
 *
 * @package Page Builder Framework
 * @subpackage Integration/Gutenberg
 */
 
// exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Theme Setup
 */
function wpbf_gutenberg_theme_setup() {

	// add Support for Gutenberg Wide Aligned Elements
	add_theme_support( 'align-wide' );

	// Gutenberg Default Font Sizes
	add_theme_support( 'editor-font-sizes', array(

		array(
			'name'		=> __( 'tiny', 'page-builder-framework' ),
			'shortName'	=> __( 'XS', 'page-builder-framework' ),
			'size'		=> 12,
			'slug'		=> 'tiny'
		),

		array(
			'name'		=> __( 'small', 'page-builder-framework' ),
			'shortName'	=> __( 'S', 'page-builder-framework' ),
			'size'		=> 14,
			'slug'		=> 'small'
		),

		array(
			'name'		=> __( 'regular', 'page-builder-framework' ),
			'shortName'	=> __( 'M', 'page-builder-framework' ),
			'size'		=> 16,
			'slug'		=> 'regular'
		),

		array(
			'name'		=> __( 'large', 'page-builder-framework' ),
			'shortName'	=> __( 'L', 'page-builder-framework' ),
			'size'		=> 20,
			'slug'		=> 'large'
		),

		array(
			'name'		=> __( 'larger', 'page-builder-framework' ),
			'shortName'	=> __( 'XL', 'page-builder-framework' ),
			'size'		=> 32,
			'slug'		=> 'larger'
		),

		array(
			'name'		=> __( 'extra', 'page-builder-framework' ),
			'shortName'	=> __( 'XXL', 'page-builder-framework' ),
			'size'		=> 44,
			'slug'		=> 'extra'
		)

	) );

}
add_action( 'after_setup_theme', 'wpbf_gutenberg_theme_setup' );

/**
 * Generate CSS
 */
function wpbf_generate_gutenberg_css() {
 
	ob_start();
	include_once( get_template_directory() . '/inc/integration/gutenberg/gutenberg-styles.php' );
	return wpbf_minify_css( ob_get_clean() );

}

/**
 * Editor Styles
 */
function wpbf_gutenberg_block_editor_assets() {

	$inline_styles = wpbf_generate_gutenberg_css();
	wp_enqueue_style( 'wpbf-gutenberg-style', get_template_directory_uri() . '/css/block-editor-styles.css', '', WPBF_VERSION );
	wp_add_inline_style( 'wpbf-gutenberg-style', $inline_styles );

}
add_action( 'enqueue_block_editor_assets', 'wpbf_gutenberg_block_editor_assets' );