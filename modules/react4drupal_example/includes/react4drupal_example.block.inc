<?php

/**
 * @file
 * Contains block-related code for this module.
 */

/**
 * Implements hook_block_info().
 */
function react4drupal_example_block_info() {
  $blocks['reactjs_app_block'] = array(
    'info' => t('React App'),
    'cache' => DRUPAL_NO_CACHE
  );

  return $blocks;
}

/**
 * Implements hook_block_view().
 */
function react4drupal_example_block_view($delta = '') {
  $block = [];

  switch ($delta) {

    case 'reactjs_app_block':
      $block['subject'] = '';
      $block['content'] = array(
        '#theme' => 'react4drupal',
      );
      break;

  }
  return $block;
}
