
5. Godaddy deployment
https://dev.to/crishanks/deploy-host-your-react-app-with-cpanel-in-under-5-minutes-4mf6

https://stackoverflow.com/questions/16897723/how-to-add-my-current-project-to-an-already-existing-github-repository/16897800
.htcaccess below

<IfModule mod_rewrite.c>

  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]

</IfModule>
  https://javascript.plainenglish.io/how-to-build-a-contact-form-in-react-that-sends-emails-using-emailjs-70011d2563a3

8. Photo gallery/lightbox https://codepen.io/aradevich/embed/gOMwxVG?default-tab=&theme-id=
- COmplete all bug pages with images
- Do areas page with map
https://www.pestworld.org/

https://medium.com/geekculture/how-to-send-emails-from-a-form-in-react-emailjs-6cdd21bb4190