/**
 * plugins/webfontloader.js
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

export async function loadFonts () {
  const webFontLoader = await import(/* webpackChunkName: "webfontloader" */'webfontloader')

  webFontLoader.load({
    google: {
      families: [
        'Roboto:100,300,400,500,700,900&display=swap',
        'Noto+Sans+JP:100,200,300,400,500,600,700,800,900&display=swap',     
        'Hachi+Maru+Pop:400&display=swap'     
      ],
    },
  })
}
