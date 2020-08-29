---
id: vhost
title: VHost Configuration
---

If you're configuring your own VPS/webserver, the vhosts should point to the `public` directory.

:::note
These are only example configurations and may require some tweaking, depending on the software versions
:::

## Apache

If you're using Apache as your webserver, you can use a similiar vhost file.

```htaccess
<VirtualHost *:80>
    ServerAdmin webmaster@localhost
    ServerName yoursite.com
    ServiceAlias www.yoursite.com
    DocumentRoot /path/to/phpvms/public

    <Directory "/path/to/phpvms/public">
            Options FollowSymLinks
            ReWriteEngine On
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

## nginx

If you're setting up a VPS with nginx, you can use a similiar vhost configuration. This is the vhost I use on the demo site

```nginx
server {
    listen 80 default_server;
    server_name phpvms.test;

    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;

    root /var/www/public;
    index index.php index.html index.htm;

    location / {
         try_files $uri $uri/ /index.php$is_args$args;
    }

    location ~ \.php$ {
        try_files $uri =404;
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass app:9000; # THIS DEPENDS ON YOUR SERVER AND MIGHT NEED TO CHANGE
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include /etc/nginx/fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}
```