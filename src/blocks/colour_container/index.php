<?php
/**
 * Coloured Container Block
 *
 */
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
 
function colour_container_register_block() {

    // Enqueue block editor JS
    wp_register_script(
        'colour_container/editor-scripts',
        plugins_url( '/../../../build/index.js', __FILE__ ),
        [ 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components']
    );

    register_block_type('aimhigher/colour-container', array(
        'editor_script' => 'colour_container/editor-scripts', 
    ));
}

// Hook the enqueue functions into the editor
add_action( 'init', 'colour_container_register_block' );