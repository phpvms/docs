---
id: vhost
title: VHost Configuration
---

If you're configuring your own VPS/webserver, the vhosts should point to the `public` directory.

:::info
These are only example configurations and may require some tweaking, depending on the software versions
:::

## Apache

If you're using Apache as your webserver, you can use a similiar vhost file.

```htaccess
<VirtualHost *:80>
    ServerAdmin webmaster@localhost
    ServerName yoursite.com
    ServerAlias www.yoursite.com

    # Update these paths to the /public folder of phpVMS
    DocumentRoot /path/to/phpvms/public
    <Directory "/path/to/phpvms/public">
           Options FollowSymLinks
            ReWriteEngine On
            AllowOverride All
    </Directory>

    # Example paths to log files
    ErrorLog /var/log/http/phpvms/error.log
    CustomLog /var/log/http/phpvms/access.log combined
</VirtualHost>
```

## nginx

If you're setting up a VPS with nginx, you can use a similiar vhost configuration. This is the vhost I use on the demo site. This passes the PHP files to the FastCGI PHP handler, as well as enables the short, "friendly" URLS that Laravel requires.

```nginx
server {
    listen 80 default_server;
    server_name phpvms.test;

    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;

    # The vhost root should point to the /public directory of phpVMS
    root /var/www/public;
    index index.php index.html index.htm;

    location / {
         try_files $uri $uri/ /index.php$is_args$args;
    }

    location ~ \.php$ {
        try_files $uri =404;
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass 127.0.0.1:9000; # THIS DEPENDS ON YOUR SERVER AND MIGHT NEED TO CHANGE
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include /etc/nginx/fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

## More details

For more information, view the [Laravel Web Server Configuration Docs](https://laravel.com/docs/9.x/deployment#server-configuration)
