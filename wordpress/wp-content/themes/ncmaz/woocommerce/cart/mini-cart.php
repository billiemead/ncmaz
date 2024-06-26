<?php


defined('ABSPATH') || exit;

do_action('woocommerce_before_mini_cart'); ?>

<?php if (!WC()->cart->is_empty()) : ?>
	<div class="nc-wc_shopping_mini-cart_content">
		<ul class="woocommerce-mini-cart cart_list product_list_widget hiddenScrollbar <?php echo esc_attr($args['list_class']); ?>">
			<?php
			do_action('woocommerce_before_mini_cart_contents');

			foreach (WC()->cart->get_cart() as $cart_item_key => $cart_item) {
				$_product   = apply_filters('woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key);
				$product_id = apply_filters('woocommerce_cart_item_product_id', $cart_item['product_id'], $cart_item, $cart_item_key);

				if ($_product && $_product->exists() && $cart_item['quantity'] > 0 && apply_filters('woocommerce_widget_cart_item_visible', true, $cart_item, $cart_item_key)) {
					$product_name      = apply_filters('woocommerce_cart_item_name', $_product->get_name(), $cart_item, $cart_item_key);
					$thumbnail         = apply_filters('woocommerce_cart_item_thumbnail', $_product->get_image(), $cart_item, $cart_item_key);
					$product_price     = apply_filters('woocommerce_cart_item_price', WC()->cart->get_product_price($_product), $cart_item, $cart_item_key);
					$product_permalink = apply_filters('woocommerce_cart_item_permalink', $_product->is_visible() ? $_product->get_permalink($cart_item) : '', $cart_item, $cart_item_key);
			?>
					<li class="woocommerce-mini-cart-item <?php echo esc_attr(apply_filters('woocommerce_mini_cart_item_class', 'mini_cart_item', $cart_item, $cart_item_key)); ?>">

						<a class="nc-mini-cart-item__content" href="<?php echo esc_url($product_permalink); ?>">

							<?php echo $thumbnail; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped 
							?>

							<div class="nc-mini-cart-item__content-right">
								<span>
									<?php echo wp_kses_post($product_name); ?>
								</span>
								<?php echo wc_get_formatted_cart_item_data($cart_item); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped 
								?>
								<?php echo apply_filters('woocommerce_widget_cart_item_quantity', '<span class="quantity">' . sprintf('%s &times; %s', $cart_item['quantity'], $product_price) . '</span>', $cart_item, $cart_item_key); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped 
								?>


							</div>
						</a>
						<?php
						echo apply_filters( // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
							'woocommerce_cart_item_remove_link',
							sprintf(
								'<a href="%s" class="remove remove_from_cart_button" aria-label="%s" data-product_id="%s" data-cart_item_key="%s" data-product_sku="%s">&times;</a>',
								esc_url(wc_get_cart_remove_url($cart_item_key)),
								esc_attr__('Remove this item', 'woocommerce'),
								esc_attr($product_id),
								esc_attr($cart_item_key),
								esc_attr($_product->get_sku())
							),
							$cart_item_key
						);
						?>
					</li>
			<?php
				}
			}

			do_action('woocommerce_mini_cart_contents');
			?>
		</ul>

		<div class="border-t border-neutral-200 dark:border-neutral-700 py-6 px-4 sm:px-6">

			<p class="woocommerce-mini-cart__total total">
				<?php
				/**
				 * Hook: woocommerce_widget_shopping_cart_total.
				 *
				 * @hooked woocommerce_widget_shopping_cart_subtotal - 10
				 */
				do_action('woocommerce_widget_shopping_cart_total');
				?>
			</p>
			<p class="nc-mini-cart__desctext mt-0.5 text-sm text-neutral-500 dark:text-neutral-400">
				<?php echo esc_html__('Shipping and taxes calculated at checkout.', 'ncmaz'); ?>
			</p>
			<?php do_action('woocommerce_widget_shopping_cart_before_buttons'); ?>

			<p class="woocommerce-mini-cart__buttons buttons"><?php do_action('woocommerce_widget_shopping_cart_buttons'); ?></p>

			<?php do_action('woocommerce_widget_shopping_cart_after_buttons'); ?>

		</div>
	</div>
<?php else : ?>

	<div class="woocommerce-mini-cart__empty-message">
		<p class="nc-wc-mini-cart__emptytext"><?php esc_html_e('No products in the cart.', 'woocommerce'); ?></p>

		<?php if (wc_get_page_id('shop') > 0) : ?>
			<p class="return-to-shop">
				<a class="button wc-backward" href="<?php echo esc_url(apply_filters('woocommerce_return_to_shop_redirect', wc_get_page_permalink('shop'))); ?>">
					<?php
					/**
					 * Filter "Return To Shop" text.
					 *
					 * @since 4.6.0
					 * @param string $default_text Default text.
					 */
					echo esc_html(apply_filters('woocommerce_return_to_shop_text', __('Continue shopping', 'woocommerce')));
					?>
				</a>
			</p>
		<?php endif; ?>

	</div>

<?php endif; ?>

<?php do_action('woocommerce_after_mini_cart'); ?>