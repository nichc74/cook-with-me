#!/bin/bash

/etc/init.d/mysql start
# cat setup_mysql.sql | mysql -u root

cat >> /etc/mysql/my.cnf << EOF
[client]
database = cook_with_me
user = django_admin
password = N1chola\$andj0sh
default-character-set = utf8

EOF

/etc/init.d/mysql reload
/etc/init.d/mysql restart
