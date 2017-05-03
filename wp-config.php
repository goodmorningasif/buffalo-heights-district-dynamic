<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache

/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */
 
// Include local configuration
if (file_exists(dirname(__FILE__) . '/local-config.php')) {
	include(dirname(__FILE__) . '/local-config.php');
}

// Global DB config
if (!defined('DB_NAME')) {
	define('DB_NAME', 'root');
}
if (!defined('DB_USER')) {
	define('DB_USER', 'root');
}
if (!defined('DB_PASSWORD')) {
	define('DB_PASSWORD', 'password');
}
if (!defined('DB_HOST')) {
	define('DB_HOST', 'localhost');
}

/** Database Charset to use in creating database tables. */
if (!defined('DB_CHARSET')) {
	define('DB_CHARSET', 'utf8');
}

/** The Database Collate type. Don't change this if in doubt. */
if (!defined('DB_COLLATE')) {
	define('DB_COLLATE', '');
}

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '4kT#QkS_XEqW;ez+7g!#<Ng;d,%*fU%^h*EnIN(K~KF;W~,CEB%NIML|(Gc2QeS_');
define('SECURE_AUTH_KEY',  'c[2k3d,[v|0N*D#=ZYe/CzG42z`#i=815r]~.k/g}EoIU9Fh%8^[B4PwHURwyfI#');
define('LOGGED_IN_KEY',    'QSL.O,~UA%||i)fHPTr?VU|4. Mx:R-xlnA[9fQYu/2S^f$exCto-H&+9t$QXt|3');
define('NONCE_KEY',        '?{GGa_Xs+aI?|/#1(@N<Sh2Kj5$0Z#whf.@&VbsN9TG~v~uH[ANf;@:5BCk}d6IV');
define('AUTH_SALT',        'h/E}@z= nPo*a:E|tyE2[x/eut]:zkI(eWw*gOWr)*iZz8)qmHH-mNO}Hxjji)>]');
define('SECURE_AUTH_SALT', '}ehtD/O?bp]u+>a8bof!i5fxs{m{*l;+cCNlUau(Wf3Xi@}|`+7es`Zc(5+?{Bcx');
define('LOGGED_IN_SALT',   'sE|i.VSzFk,dP|Y1-C7>_JN &u1&%!7MRGOElg`9?h}eZ(Hbp3qbT4XSv==S[Dr$');
define('NONCE_SALT',       '|CQeEbPp-qwUG/iSe>@,;rZ^a`Z4J>j<+mAtfXN%OmndM.YIX3p&}L$+ye)Fr6By');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'bhd_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');


/**
 * Set custom paths
 *
 * These are required because wordpress is installed in a subdirectory.
 */
if (!defined('WP_SITEURL')) {
	define('WP_SITEURL', 'http://' . '10.1.10.96' . '/buffalo-heights-district-dynamic/wordpress');
}
if (!defined('WP_HOME')) {
	define('WP_HOME',    'http://' . '10.1.10.96' . '/buffalo-heights-district-dynamic');
}
if (!defined('WP_CONTENT_DIR')) {
	define('WP_CONTENT_DIR', dirname(__FILE__) . '/content');
}
if (!defined('WP_CONTENT_URL')) {
	define('WP_CONTENT_URL', 'http://' . '10.1.10.96' . '/buffalo-heights-district-dynamic/content');
}


/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
if (!defined('WP_DEBUG')) {
	define('WP_DEBUG', true);
}

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
