# Tarea-pelicula-2

Esta es una tarea propuesta por el profesor de Diseño Web 2 sobre una API de peliculas.

## Instalacion del Backend

### Requisito 

Tener composer instaldo.

### Pasos para la intalacion 

```bash
composer global require laravel/installer
```

Eliminar el contenido del Vhost y poner lo siguiente.
```bash
# Virtual Hosts
#
# Required modules: mod_log_config

# If you want to maintain multiple domains/hostnames on your
# machine you can setup VirtualHost containers for them. Most configurations
# use only name-based virtual hosts so the server doesn't need to worry about
# IP addresses. This is indicated by the asterisks in the directives below.
#
# Please see the documentation at
# <URL:http://httpd.apache.org/docs/2.4/vhosts/>
# for further details before you try to setup virtual hosts.
#
# You may use the command line option '-S' to verify your virtual host
# configuration.

#
# Use name-based virtual hosting.
#
##NameVirtualHost *:80
#
# VirtualHost example:
# Almost any Apache directive may go into a VirtualHost container.
# The first VirtualHost section is used for all requests that do not
# match a ##ServerName or ##ServerAlias in any <VirtualHost> block.
#
##<VirtualHost *:80>
    ##ServerAdmin webmaster@dummy-host.example.com
    ##DocumentRoot "C:/xampp/htdocs/dummy-host.example.com"
    ##ServerName dummy-host.example.com
    ##ServerAlias www.dummy-host.example.com
    ##ErrorLog "logs/dummy-host.example.com-error.log"
    ##CustomLog "logs/dummy-host.example.com-access.log" common
##</VirtualHost>

##<VirtualHost *:80>
    ##ServerAdmin webmaster@dummy-host2.example.com
    ##DocumentRoot "C:/xampp/htdocs/dummy-host2.example.com"
    ##ServerName dummy-host2.example.com
    ##ErrorLog "logs/dummy-host2.example.com-error.log"
    ##CustomLog "logs/dummy-host2.example.com-access.log" common
##</VirtualHost>

<VirtualHost *:80>
DocumentRoot "C:\xampp\htdocs\proWeb\Tarea-pelicula-2\Backend"
ServerName backend.localhost
ErrorLog "logs/anima-api_error.localhost.log"
CustomLog "logs/anima-api_access.localhost.log" common
</VirtualHost>
```

## Instalacion de el Frontend

### Requsitos
Tener node instalado

```python
Estar situado en frontend y dentro de frotend en MI-PRIMERA-APP y correr los siguientes comandos:

$ npm i

$ npm start
```

## Intalacion de la base de datos

Dentro de la carpeta de backend se ecuentra una carpeta Script con un archivo sql para importarlo en mysql. 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)