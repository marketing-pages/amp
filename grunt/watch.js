module.exports = function (grunt) {
  return {
      html: {
        files: ['src/**/*.html'],
        tasks: ['copy', 'includes'],
      },
      css: {
        files: ['src/sass/*.scss'],
        tasks: ['stylelint', 'sass', 'postcss', 'cssmin', 'copy', 'includes'],
      },
      images: {
        files: ['src/assets/images/*'],
        tasks: ['image'],
      },
      svg: {
        files: ['src/assets/svg/**/*.svg'],
        tasks: ['svgmin'],
      },
      options: {
        spawn        : false,
        interrupt    : true,
        debounceDelay: 250,
        livereload: true,
      }, 
    };
  };
