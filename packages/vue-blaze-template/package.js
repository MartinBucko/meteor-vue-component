Package.describe({
  name: 'akryum:vue-blaze-template',
  version: '0.0.4',
  summary: 'Render Blaze templates in vue components',
  git: 'https://github.com/Akryum/meteor-vue-component',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.4.1');
  api.use(['ecmascript', 'templating', 'blaze']);
  api.mainModule('vue-render-blaze.js', 'client');
});
