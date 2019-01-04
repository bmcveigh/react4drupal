<?php

namespace Drupal\react4drupal_example\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'ReactJsAppBlock' block.
 *
 * @Block(
 *  id = "reactjs_app_block",
 *  admin_label = @Translation("React App"),
 * )
 */
class ReactJsAppBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['reactjs_app_block']['#theme'] = 'react4drupal';

    return $build;
  }

}
