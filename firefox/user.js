//
/* You may copy+paste this file and use it as it is.
 *
 * If you make changes to your about:config while the program is running, the
 * changes will be overwritten by the user.js when the application restarts.
 *
 * To make lasting changes to preferences, you will have to edit the user.js.
 */

/****************************************************************************
 * Betterfox                                                                *
 * "Ad meliora"                                                             *
 * version: 152                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
 ****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
 ****************************************************************************/
/** GENERAL ***/
user_pref("gfx.content.skia-font-cache-size", 20);
user_pref("content.notify.interval", 100000);

/** GFX ***/
user_pref("gfx.canvas.accelerated.cache-size", 512);

/** JS ***/
user_pref("javascript.options.baselinejit.threshold", 50);

/** MEDIA CACHE ***/
user_pref("media.cache_readahead_limit", 3600);
user_pref("media.cache_resume_threshold", 1800);

/** IMAGE CACHE ***/
user_pref("image.mem.decode_bytes_at_a_time", 32768);

/** NETWORKING ***/
user_pref("network.buffer.cache.size", 65535);
user_pref("network.buffer.cache.count", 48);
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.request.max-start-delay", 5);
user_pref("network.dnsCacheExpiration", 3600);

/****************************************************************************
 * SECTION: SECUREFOX                                                       *
 ****************************************************************************/
/** TRACKING PROTECTION ***/
user_pref("browser.contentblocking.category", "strict");
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("browser.uitour.enabled", false);
user_pref("privacy.globalprivacycontrol.enabled", true);

/** OCSP & CERTS / HPKP ***/
user_pref("security.OCSP.enabled", 0);
user_pref("privacy.antitracking.isolateContentScriptResources", true);
user_pref("security.csp.reporting.enabled", false);

/** SSL / TLS ***/
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("security.tls.enable_0rtt_data", false);

/** DISK AVOIDANCE ***/
user_pref("browser.cache.disk.enable", false);
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("media.memory_cache_max_size", 65536);
user_pref("browser.sessionstore.interval", 60000);

/** SHUTDOWN & SANITIZING ***/
user_pref("privacy.history.custom", true);

/** SPECULATIVE LOADING ***/
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("network.prefetch-next", false);

/** SEARCH / URL BAR ***/
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.formfill.enable", false);
user_pref("network.IDN_show_punycode", true);

/** HTTPS-ONLY MODE ***/
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true);

/** PASSWORDS ***/
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("editor.truncate_user_pastes", false);

/** EXTENSIONS ***/
user_pref("extensions.enabledScopes", 5);

/** HEADERS / REFERERS ***/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/** CONTAINERS ***/
user_pref("privacy.userContext.ui.enabled", true);

/** VARIOUS ***/
user_pref("pdfjs.enableScripting", false);

/** SAFE BROWSING ***/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

/** MOZILLA ***/
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("geo.provider.network.url", "https://beacondb.net/v1/geolocate");
user_pref("browser.search.update", false);
user_pref("permissions.manager.defaultsUrl", "");
user_pref("extensions.getAddons.cache.enabled", false);

/** TELEMETRY ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("datareporting.usage.uploadEnabled", false);

/** EXPERIMENTS ***/
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

/** CRASH REPORTS ***/
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);

/****************************************************************************
 * SECTION: PESKYFOX                                                        *
 ****************************************************************************/
/** MOZILLA UI ***/
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref(
  "browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons",
  false,
);
user_pref(
  "browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features",
  false,
);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.aboutwelcome.enabled", false);
user_pref("browser.profiles.enabled", true);

/** THEME ADJUSTMENTS ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.privateWindowSeparation.enabled", false); // WINDOWS

/** AI ***/
user_pref("browser.ai.control.default", "blocked");
user_pref("browser.ml.enable", false);
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.menu", false);
user_pref("browser.tabs.groups.smart.enabled", false);
user_pref("browser.ml.linkPreview.enabled", false);

/** FULLSCREEN NOTICE ***/
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.timeout", 0);

/** URL BAR ***/
user_pref("browser.urlbar.trending.featureGate", false);

/** NEW TAB PAGE ***/
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);

/** DOWNLOADS ***/
user_pref("browser.download.manager.addToRecentDocs", false);

/** PDF ***/
user_pref("browser.download.open_pdf_attachments_inline", true);

/** TAB BEHAVIOR ***/
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("findbar.highlightAll", true);

/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
 ****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js
// Enter your scrolling overrides below this line:

/****************************************************************************
 * START: MY OVERRIDES                                                      *
 ****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/wiki/Common-Overrides
// visit https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening
// Enter your personal overrides below this line:

// PREF: revert back to Standard ETP
user_pref("browser.contentblocking.category", "standard");

// PREF: allow websites to ask you for your location
user_pref("permissions.default.geo", 0);

// PREF: allow websites to ask you to receive site notifications
user_pref("permissions.default.desktop-notification", 0);

// PREF: restore Top Sites on New Tab page
// user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);

// PREF: remove default Top Sites (Facebook, Twitter, etc.)
// This does not block you from adding your own.
// user_pref("browser.newtabpage.activity-stream.default.sites", "");

// PREF: remove sponsored content on New Tab page
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // Sponsored shortcuts
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // Recommended by Pocket
user_pref("browser.newtabpage.activity-stream.showSponsored", false); // Sponsored Stories

// PREF: enable container tabs
user_pref("privacy.userContext.enabled", true);

// PREF: disable Firefox Sync
user_pref("identity.fxaccounts.enabled", false);

// PREF: disable the Firefox View tour from popping up
user_pref("browser.firefox-view.feature-tour", '{"screen":"","complete":true}');

// PREF: hide site shortcut thumbnails on New Tab page
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);

// PREF: hide weather on New Tab page
user_pref("browser.newtabpage.activity-stream.showWeather", false);

// PREF: hide dropdown suggestions when clicking on the address bar
user_pref("browser.urlbar.suggest.topsites", false);

// PREF: ask whether to open or save new file types
user_pref("browser.download.always_ask_before_handling_new_types", true);

// PREF: enforce certificate pinning
// [ERROR] MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE
// 1 = allow user MiTM (such as your antivirus) (default)
// 2 = strict
user_pref("security.cert_pinning.enforcement_level", 2);

// PREF: delete all browsing data on shutdown
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.clearOnShutdown_v2.cache", true);
user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", false);
user_pref("privacy.clearOnShutdown_v2.browsingHistoryAndDownloads", true);
user_pref("privacy.clearOnShutdown_v2.downloads", true); // [HIDDEN]
user_pref("privacy.clearOnShutdown_v2.formdata", false);

// PREF: after crashes or restarts, do not save extra session data
// such as form content, scrollbar positions, and POST data
user_pref("browser.sessionstore.privacy_level", 2);

// PREF: re-enable search and form history
// This is trivial if you're sanitizing after every session.
user_pref("browser.formfill.enable", true);

// PREF: disable Firefox logo
user_pref("browser.newtabpage.activity-stream.hideLogo", true);

// PREF: reduce process count / disable site isolation (RAM tradeoff on low-RAM hardware)
user_pref("fission.autostart", false);
user_pref("dom.ipc.processCount", 2);

// PREF: re-enable disk cache — trade a bit of SSD wear for much lower RAM use
user_pref("browser.cache.disk.enable", true);
user_pref("browser.cache.disk.capacity", 358400); // ~350MB, adjust to taste

// PREF: let Firefox unload background tabs under memory pressure
user_pref("browser.tabs.unloadOnLowMemory", true);

// PREF: disable hardware video decoding process if not needed
user_pref("media.rdd-process.enabled", false);

// PREF: Disable accessibility services
// Prevents external applications from hooking into Firefox. This is a known cause
// of severe performance degradation and memory leaks. (Do not use if you need a screen reader).
user_pref("accessibility.force_disabled", 1);

// PREF: Stop parsing web pages for Reader Mode
// By default, Firefox analyzes the text/DOM of every single page you load to see
// if it should show the "Reader View" icon. Disabling this saves CPU cycles on every page load.
user_pref("reader.parse-on-load.enabled", false);

// PREF: Block all media autoplay (Audio & Video)
// Prevents background tabs and heavy media sites from pre-loading and playing video resources.
// 0 = Allow all, 1 = Block non-muted, 5 = Block all
user_pref("media.autoplay.default", 5);

// PREF: Disable cosmetic UI animations
// Turns off tab loading animations, fullscreen transitions, and fading effects.
// Saves minor CPU/GPU overhead and makes the browser feel instantly responsive.
user_pref("toolkit.cosmeticAnimations.enabled", false);

// PREF: Increase background tab throttling
// Increases the minimum timer interval for inactive background tabs, heavily reducing
// how much CPU power background websites can steal.
user_pref("dom.min_background_timeout_value", 10000);

// PREF: Force Firefox to free up dirty memory pages when minimized/idle (Windows/Linux)
user_pref("memory.free_dirty_pages", true);

// PREF: Enable hardware video decoding (VA-API) for lower CPU usage and thermals
user_pref("media.ffmpeg.vaapi.enabled", true);
user_pref("media.rdd-process.enabled", true); // Reverting previous override to allow hardware decoding

// PREF: Enable WebRender compositing for smoother scrolling
user_pref("gfx.webrender.all", true);
user_pref("gfx.webrender.compositor", true);

// PREF: Optimize process count for stability vs memory footprint
user_pref("dom.ipc.processCount", 4);

// PREF: Unload inactive background tabs after 5 minutes of inactivity (memory saver)
user_pref("browser.tabs.min_inactive_duration_before_unload", 300000);

// PREF: Scale down maximum concurrent network connections (saves memory/networking overhead)
user_pref("network.http.max-connections", 900);

// PREF: Disable network predictor to stop background calculations
user_pref("network.predictor.enabled", false);

// PREF: Increase Skia font cache to prevent re-rendering terminal/custom fonts on heavy pages
user_pref("gfx.content.skia-font-cache-size", 80);

/****************************************************************************
 * END: BETTERFOX                                                           *
 ****************************************************************************/
