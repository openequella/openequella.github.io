# Apache

Various tips and configs for running openEquella behind Apache.

- Forward Proxy
- Reverse Proxy
  - Running Apache in front of openEquella
  - Running Apache as a load balancer in front of openEquella

## Forward Proxy

NOTE: This is an insecure method to setup a forward proxy. Use only with caution and for a small time behind your firewall while you are testing.

- Setup a server running Apache 2
- Run: sudo a2enmod proxy_connect
- Create an available-site (I called it equella-forward-proxy) with the contents:

```
Listen <Apache Server IP>:8047

<VirtualHost <Apache Server IP>:8047>
ProxyRequests On
ProxyVia On
<Proxy *>
Order deny,allow
Allow from all
</Proxy>
</VirtualHost>
```

- Refresh / restart Apache: sudo a2dissite equella-forward-proxy ; sudo a2ensite equella-forward-proxy ; sudo service apache2 restart
- In your openEquella optional-config file, enable the following and restart openEquella.

```
configurationService.proxyHost=<Apache Server IP>
configurationService.proxyPort=8047
```

To confirm openEquella is using the proxy, change the ports in the Apache site file, and refresh apache and then try to add a URL to openEquella

## Reverse Proxy

### Running Apache in front of openEquella

This assumes a single node with the IP Address of 192.168.1.234.

Install Apache (in Ubuntu):
`$ sudo apt-get install apache2`

Enabled the needed mods (in Ubuntu), disable the default sites and restart:

```
$ sudo a2enmod proxy_http
$ sudo a2enmod proxy_balancer ====> Needed for clustering.
$ sudo a2enmod headers ====> Needed for clustering.
$ sudo a2enmod ssl ====> Needed for SSL.
$ sudo a2dissite default
$ sudo a2dissite default-ssl
$ service apache2 restart
```

In the apache install directory, edit the `httpd.conf` file and add the following:

```
ServerName 192.168.1.234
ServerAdmin YOUR_EMAIL_ADDRESS
```

Navigate to the sites-available and add a new site - just create a new file (I chose equella) with the following and change the desired configs (The IP Address and port in ProxyPass and ProxyPassReverse)

```
<VirtualHost *:80>
ProxyPreserveHost On
ProxyPass / http://192.168.1.234:8080/ nocanon
ProxyPassReverse / http://192.168.1.234:8080/ nocanon
ErrorLog ${APACHE_LOG_DIR}/error.log
LogLevel warn
CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

Then enable your equella site, and restart:

```
$ sudo a2ensite equella-standalone
$ service apache2 restart
```

### Running Apache as a load balancer in front of openEquella

HTTP:

```
<VirtualHost *:80>
ProxyPass / balancer://mycluster/ nocanon
ProxyPreserveHost On
Header add Set-Cookie "ROUTEID=.%{BALANCER_WORKER_ROUTE}e; path=/"
env=BALANCER_ROUTE_CHANGED
<Proxy balancer://mycluster/ >
BalancerMember http://192.168.1.234:8080 route=1
BalancerMember http://192.168.1.234:8080 route=2
ProxySet stickysession=ROUTEID
</Proxy>
</VirtualHost>
```

HTTPS:
_Note:_ You'll need at least a self-signed cert for this. A tutorial can be found here: https://help.ubuntu.com/lts/serverguide/certificates-and-security.html. Assuming you followed the steps in the link, then use this config for the clustered SSL:

```
<VirtualHost *:443>
ProxyPass / balancer://mycluster/ nocanon
ProxyPreserveHost On
Header add Set-Cookie "ROUTEID=.%{BALANCER_WORKER_ROUTE}e; path=/"
env=BALANCER_ROUTE_CHANGED
<Proxy balancer://mycluster/ >
BalancerMember http://192.168.1.234:8080 route=1
BalancerMember http://192.168.1.234:8080 route=2
ProxySet stickysession=ROUTEID
</Proxy>

SSLEngine On

SSLProxyEngine On

SSLCertificateFile /etc/ssl/certs/server.crt
SSLCertificateKeyFile /etc/ssl/private/server.key
</VirtualHost>
```
