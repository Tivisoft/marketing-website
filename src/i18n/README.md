# Language preference

English URLs remain at the root and Spanish URLs use `/es`. The URL determines
the rendered language; visitors are never redirected based on location or language.

`LanguageSuggestion` runs after hydration in both locale layouts. It uses the
saved `tivisoft-language` preference first, then the first supported language in
`navigator.languages` (with `navigator.language` as a fallback). Regional tags
such as `es-CO` and `en-US` resolve to `es` and `en`. If no supported preference
is available, the suggestion defaults to Spanish, independently of the English
root URL and SEO `x-default`.

When the preferred language differs, a banner links to the equivalent route.
Accepting it, keeping the current language, or using any language-switch link
saves the explicit choice in local storage. If storage is blocked, the choice
still works for navigation but cannot persist; a console warning explains why.

The banner is not rendered in exported HTML, and canonical/hreflang metadata is
unchanged. New locales need translations, route mappings, and suggestion copy.
